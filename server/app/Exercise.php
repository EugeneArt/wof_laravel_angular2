<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Exercise extends Model
{
    public $fillable = ['exercise_name','exercise_description','exercise_video', 'exercise_images'];
    public $timestamps = false;

    public function timetable() {
        return $this->belongsTo(Timetable::class);
    }

    public function images(){
        return $this->hasMany(Image::class);
    }
}
