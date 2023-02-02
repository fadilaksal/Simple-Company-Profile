<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Requests\UserStoreRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;
use Inertia\Response;

use App\Models\User;
use Hash;

class UserController extends Controller
{
    public function index(Request $request)
    {
        return Inertia::render('User/Index', [
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
            ->filter($filter)
            ->paginate($pageSize);

        return response()->json($users);
    }

    public function store(UserStoreRequest $request): RedirectResponse
    {
        User::create($request->validated());

        return Redirect::route('admin.users.index');
    }

    public function update(UserStoreRequest $request, $id)
    {
        $user = User::findOrFail($id)->update($request->validated());

        return Redirect::route('admin.users.index');
    }

    public function destroy($id)
    {
        User::findOrFail($id)->delete();

        return Redirect::route('admin.users.index');
    }
}
