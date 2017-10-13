<?php

namespace App\Http\Controllers;

use App\Image;
use Illuminate\Http\Request;
use App\Exercise;

class ExerciseController extends Controller
{
    public function index() {
        return Exercise::with('images')
            ->get();
    }

    public function show($id){
        $exercise = Exercise::with('images')->findOrFail($id);

        return $exercise;
    }

    public function store(Request $request){
        $exercise = Exercise::create([
            'exercise_name' => $request->input('exercise_name'),
            'exercise_description' => $request->input('exercise_description'),
            'exercise_video' => $request->input('exercise_video')
        ]);

        $images= $request->input('images');

        if($images) {
            foreach ($images as $item) {
                $image = new Image(array('url' => $item));
                $image = $exercise->images()->save($image);
            }
        }

        return $exercise;
    }

    public function update(Request $request, $exerciseId){
        $exercise = Exercise::findOrFail($exerciseId);

        $exercise->update([
            'exercise_name' => $request->input('exercise_name'),
            'exercise_description' => $request->input('exercise_description'),
            'exercise_video' => $request->input('exercise_video'),
        ]);

        $images= $request->input('images');

        if($images) {
            foreach ($images as $item) {
                if(gettype($item) == 'string') {
                    $image = new Image(array('url' => $item));
                    $image = $exercise->images()->save($image);
                }
            }
        }

        return $exercise;
    }

    public function destroy($exerciseId){
        $exercise = Exercise::findOrFail($exerciseId);

        $path = public_path() . '/upload/' .$exercise->exercise_video;
        if(file_exists($path)) {
            unlink($path);
        }

        $images = $exercise->images;

        if($images) {
            foreach ($images as $image) {
                $pathToImage =  public_path() . '/upload/' .$image->url;
                if(file_exists($pathToImage)) {
                    unlink($pathToImage);
                }
            }
        }

        $exercise->delete();

        return $exercise;
    }

}
