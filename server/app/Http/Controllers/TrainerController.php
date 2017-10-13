<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Trainer;

class TrainerController extends Controller
{
    public function index() {
        return Trainer::all();
    }

    public function show($id){
        $trainer = Trainer::findOrFail($id);

        return $trainer;
    }

    public function store(Request $request){
        $trainer = Trainer::create([
            'trainer_name' => $request->input('trainer_name'),
            'trainer_tagline' => $request->input('trainer_tagline'),
            'trainer_achievements' => $request->input('trainer_achievements'),
            'trainer_img' => $request->input('trainer_img'),
        ]);

        return $trainer;
    }

    public function update(Request $request, $trainerId){
        $trainer = Trainer::findOrFail($trainerId);

        $trainer->update([
            'trainer_name' => $request->input('trainer_name'),
            'trainer_tagline' => $request->input('trainer_tagline'),
            'trainer_achievements' => $request->input('trainer_achievements'),
            'trainer_img' => $request->input('trainer_img'),
        ]);

        return $trainer;
    }

    public function destroy($trainerId){
        $trainer = Trainer::findOrFail($trainerId);

        $path = public_path() . '/upload/' .$trainer->trainer_img;
        if(file_exists($path)) {
            unlink($path);
        }

        $trainer->delete();

        return $trainer;
    }
}
