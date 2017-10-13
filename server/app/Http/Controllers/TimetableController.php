<?php

namespace App\Http\Controllers;

use App\Exercise;
use App\Gym;
use App\Level;
use Illuminate\Http\Request;
use App\Timetable;
use App\Trainer;

class TimetableController extends Controller
{
    public function index() {
        return Timetable::with('gyms','exercises','levels', 'trainers')
            ->get()
            ->groupBy('gyms.gym_name');
    }

    public function show($id){
        $timetable = Timetable::with('trainers')->findOrFail($id);

        return $timetable;
    }

    public function store(Request $request){

        $timetable = Timetable::create([
            'day' => $request->input('day'),
            'hour' => $request->input('hour'),
            'gym_id' => $request->input('gym_id'),
            'exercise_id' => $request->input('exercise_id'),
            'level_id' => $request->input('level_id'),
        ]);

        $trainers_id = $request->trainers_id;
        $timetable->trainers()->attach($trainers_id);

        return $timetable;
    }

    public function update(Request $request, $timetableId){
        $timetable = Timetable::findOrFail($timetableId);

        $timetable->update([
            'day' => $request->input('day'),
            'hour' => $request->input('hour'),
            'gym_id' => $request->input('gym_id'),
            'exercise_id' => $request->input('exercise_id'),
            'level_id' => $request->input('level_id'),
        ]);

        $trainers_id = $request->trainers_id;
        $timetable->trainers()->detach();
        $timetable->trainers()->attach($trainers_id);

        return $timetable;
    }

    public function destroy($timetableId){
        $timetable = Timetable::findOrFail($timetableId);

        $timetable->trainers()->detach();
        $timetable->delete();

        return $timetable;
    }
}
