<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\Role::create([
            'name' => 'Admin',
            'description' => 'Admin Role'
        ]);
        \App\Models\Role::create([
            'name' => 'User',
            'description' => 'User Role'
        ]);
    }
}
