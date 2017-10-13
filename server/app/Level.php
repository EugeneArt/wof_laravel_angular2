<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Level extends Model
{
    public $fillable = ['level_name','level_color'];
    public $timestamps = false;

    public function timetable() {
        return $this->belongsTo(Timetable::class);
    }
}
