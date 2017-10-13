<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Banner extends Model
{
    public $fillable = ['name', 'image_url', 'is_used'];
    public $timestamps = false;
}
