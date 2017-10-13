<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Timetable extends Model
{
    public $fillable = ['day','hour', 'gym_id', 'exercise_id', 'level_id', 'trainer_id'];
    public $timestamps = false;

    public function gyms() {
        return $this->belongsTo(Gym::class, 'gym_id');
    }

    public function levels() {
        return $this->belongsTo(Level::class, 'level_id');
    }

    public function exercises() {
        return $this->belongsTo(Exercise::class,'exercise_id');
    }

    public function trainers(){
        return $this->belongsToMany(Trainer::class);
    }

}
