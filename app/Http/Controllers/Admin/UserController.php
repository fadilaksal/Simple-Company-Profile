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

class UserController extends Controller
{
    // public function index(Request $request)
    // {
    //     $columns = [
    //         'name', 
    //         'email', 
    //         'email_verified_at', 
    //         'created_at', 
    //         'updated_at'
    //     ];

    //     $users = User::select('id')->addSelect($columns)->paginate(10);

    //     $tableData = [
    //         'columns' => $columns,
    //         'rows' => $users
    //     ];

    //     return Inertia::render('User/Index', [
    //         'users' => $users,
    //         'tableData' => $tableData
    //     ]);
    // }

    public function index(Request $request)
    {
        $users = User::select('id', 'name', 'email', 'email_verified_at', 'created_at', 'updated_at')->paginate(10);

        return Inertia::render('User/Index', [
            'users' => $users
        ]);
    }

    public function store(UserStoreRequest $request): RedirectResponse
    {
        $user = User::create($request->validated());


        return Redirect::route('admin.users.index');
    }
}
