<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    public $fillable = ['id','url'];
    public $timestamps = false;

    public function exercises() {
        return $this->belongsTo(Exercise::class);
    }
}
