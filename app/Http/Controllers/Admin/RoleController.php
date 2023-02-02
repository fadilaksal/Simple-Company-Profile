<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Requests\RoleRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;
use Inertia\Response;

use App\Models\User;
use App\Models\Role;

class RoleController extends Controller
{
    public function index(Request $request)
    {
        $role = \Auth::user()->role_user->role;

        return Inertia::render('Role/Index', [
            'roleAuth' => $role,
            'dataUrl' => route('admin.roles.data')
        ]);
    }

    public function data(Request $request)
    {
        $pageSize = $request->page_size ?? 10;

        $filter = [ 'search' => $request->search ];

        $roles = Role::select('id', 'name', 'description')
            ->filter($filter)
            ->paginate($pageSize);

        return response()->json($roles);
    }

    public function store(RoleRequest $request): RedirectResponse
    {
        Role::create($request->validated());

        return Redirect::route('admin.roles.index');
    }

    public function update(RoleRequest $request, $id)
    {
        Role::findOrFail($id)->update($request->validated());

        return Redirect::route('admin.roles.index');
    }

    public function destroy($id)
    {
        Role::findOrFail($id)->delete();

        return Redirect::route('admin.roles.index');
    }
}
