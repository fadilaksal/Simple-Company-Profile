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
            'id' => 1,
            'name' => 'Admin',
            'description' => 'Admin Role'
        ]);
        \App\Models\Role::create([
            'id' => 2,
            'name' => 'User',
            'description' => 'User Role'
        ]);
    }
}
