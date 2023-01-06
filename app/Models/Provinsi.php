<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\Provinsi
 *
 * @property int $id
 * @property string $nama
 * @property float|null $latitude
 * @property float|null $longitude
 * @property string|null $keterangan
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Database\Factories\ProvinsiFactory factory(...$parameters)
 * @method static \Illuminate\Database\Eloquent\Builder|Provinsi newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Provinsi newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Provinsi query()
 * @method static \Illuminate\Database\Eloquent\Builder|Provinsi whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Provinsi whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Provinsi whereKeterangan($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Provinsi whereLatitude($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Provinsi whereLongitude($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Provinsi whereNama($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Provinsi whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class Provinsi extends Model
{
    use HasFactory;
}
