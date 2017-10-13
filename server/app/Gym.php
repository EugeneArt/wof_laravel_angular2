<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Gym extends Model
{
        public $fillable = ['gym_name'];
        public $timestamps = false;

        public function timetable() {
            return $this->belongsTo(Timetable::class);
        }

}
