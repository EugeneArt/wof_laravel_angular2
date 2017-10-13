<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Level;

class LevelController extends Controller
{
    public function index() {
        return Level::all();
    }

    public function show($id){
        $level = Level::findOrFail($id);

        return $level;
    }

    public function store(Request $request){
        $level = Level::create([
            'level_name' => $request->input('level_name'),
            'level_color' => $request->input('level_color'),
        ]);

        return $level;
    }

    public function update(Request $request, $levelId){
        $level = Level::findOrFail($levelId);

        $level->update([
            'level_name' => $request->input('level_name'),
            'level_color' => $request->input('level_color'),
        ]);

        return $level;
    }

    public function destroy($levelId){
        $level = Level::findOrFail($levelId);

        $level->delete();

        return $level;
    }

}
