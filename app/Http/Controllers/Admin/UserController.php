<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Requests\UserStoreRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;
use Inertia\Response;

use App\Models\Role;
use App\Models\User;
use Hash;

class UserController extends Controller
{
    public function index(Request $request)
    {
        $roles = Role::all();
        $role = \Auth::user()->role_user->role;

        return Inertia::render('User/Index', [
            'roleAuth' => $role,
            'roles' => $roles,
            'dataUrl' => route('admin.users.data')
        ]);
    }

    public function data(Request $request)
    {
        $pageSize = $request->page_size ?? 10;
        
        $filter = [
            'search' => $request->search
        ];

        $users = User::select('id', 'name', 'email', 'email_verified_at', 'created_at', 'updated_at')
            ->with('role_user.role:roles.id,name')
            ->filter($filter)
            ->paginate($pageSize);

        return response()->json($users);
    }

    public function store(UserStoreRequest $request): RedirectResponse
    {
        $user = User::create($request->safe()->except(['role', 'profile_image']));
        $user->roles()->sync([$request->safe()->only('role')['role'] ?? null]);


        return Redirect::route('admin.users.index');
    }

    public function update(UserStoreRequest $request, $id)
    {
        $user = User::findOrFail($id)->update($request->safe()->except(['role', 'profile_image']));
        $user = User::findOrFail($id);
        $user->roles()->sync([$request->safe()->only('role')['role'] ?? null]);

        return Redirect::route('admin.users.index');
    }

    public function destroy($id)
    {
        User::findOrFail($id)->delete();

        return Redirect::route('admin.users.index');
    }

    public function verify(Request $request, $id)
    {
        $user = User::findOrFail($id);

        $user->email_verified_at = $request->date ?? date('Y-m-d H:i:s');

        $user->save();

        return Redirect::route('admin.users.index');
    }
}
