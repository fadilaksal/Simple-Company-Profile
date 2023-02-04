<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\ProfileController;
use App\Http\Controllers\Admin\RoleController;
use App\Http\Controllers\Admin\UserController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [HomeController::class, 'index'])->name('home'); 

Route::get('/product/checkout', [HomeController::class, 'productCheckout'])->name('product.checkout'); 
Route::get('/product/{id}', [HomeController::class, 'productDetail'])->name('product.detail');

Route::get('/lacak-pemeriksaan', [HomeController::class, 'lacakPemeriksaan'])->name('lacak-pemeriksaan'); 

Route::get('/riwayat-transaksi', [HomeController::class, 'riwayatTransaksi'])->name('riwayat-transaksi'); 

Route::get('/admin/dashboard', [DashboardController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->prefix('admin')->name('admin.')->group(function () {
    Route::controller(ProfileController::class)->group(function () {
        Route::get('/profile', 'edit')->name('profile.edit');
        Route::patch('/profile', 'update')->name('profile.update');
        Route::delete('/profile', 'destroy')->name('profile.destroy');
    });

    Route::controller(UserController::class)->group(function () {
        Route::get('/users', 'index')->name('users.index');
        Route::get('/users/data', 'data')->name('users.data');
        Route::post('/users', 'store')->name('users.store');
        Route::put('/users/{id}/verify', 'verify')->name('users.verify');
        Route::put('/users/{id}', 'update')->name('users.update');
        Route::delete('/users/{id}', 'destroy')->name('users.destroy');
    });

    Route::controller(RoleController::class)->group(function () {
        Route::get('/roles', 'index')->name('roles.index');
        Route::get('/roles/data', 'data')->name('roles.data');
        Route::post('/roles', 'store')->name('roles.store');
        Route::put('/roles/{id}', 'update')->name('roles.update');
        Route::delete('/roles/{id}', 'destroy')->name('roles.destroy');
    });
});

require __DIR__.'/auth.php';
