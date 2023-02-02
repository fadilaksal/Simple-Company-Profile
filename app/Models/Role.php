<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'description'];

    public function role()
    {
        return $this->belongsToMany(User::class, 'role_users', 'role_id', 'user_id');
    }

    public function scopeFilter($query, $filter)
    {
        $query->when($filter['search'], function ($query, $search) {
            $query->where('name', 'like', "%$search%");
        });
    }
}
