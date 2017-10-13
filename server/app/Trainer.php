<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Trainer extends Model
{
    public $fillable = ['trainer_name','trainer_tagline', 'trainer_achievements','trainer_img'];
    public $timestamps = false;

    public function timetables(){
        return $this->belongsToMany(Timetable::class);
    }
}
