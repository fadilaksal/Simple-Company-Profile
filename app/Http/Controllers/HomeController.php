<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Route;

use Illuminate\Http\Request;

use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        return Inertia::render('Welcome', [
            'canLogin' => Route::has('login'),
        ]);
    }

    public function productDetail($productId)
    {
        return Inertia::render('ProductDetail');
    }

    public function productCheckout()
    {
        return Inertia::render('Checkout');
    }

    public function lacakPemeriksaan()
    {
        return Inertia::render('LacakPemeriksaan');
    }

    public function riwayatTransaksi()
    {
        return Inertia::render('RiwayatTransaksi');
    }
}
