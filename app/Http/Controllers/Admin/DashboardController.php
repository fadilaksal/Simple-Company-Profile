<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index(Request $request)
    {
        $roleAuth = \Auth::user()->role_user->role;
        
        return Inertia::render('Dashboard', [
            'roleAuth' => $roleAuth
        ]);
    }
}
