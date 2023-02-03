<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $userAdmin = \App\Models\User::create([
            'name' => 'Admin',
            'email' => 'admin@gmail.com',
            'email_verified_at' => date('Y-m-d H:i:s'),
            'password' => \Hash::make('password'),
        ]);
        $userPengguna = \App\Models\User::create([
            'name' => 'Pengguna',
            'email' => 'pengguna@gmail.com',
            'email_verified_at' => date('Y-m-d H:i:s'),
            'password' => \Hash::make('password'),
        ]);

        $roleAdmin = \App\Models\Role::where('name', 'like', '%Admin%')->first();
        $userAdmin->roles()->sync([$roleAdmin->id ?? 0]);
        
        $roleUser = \App\Models\Role::where('name', 'like', '%User%')->first();
        $userPengguna->roles()->sync([$roleUser->id ?? 0]);

        // \App\Models\User::factory(10)->create();
    }
}
