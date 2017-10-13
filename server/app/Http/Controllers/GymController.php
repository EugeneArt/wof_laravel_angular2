<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Gym;

class GymController extends Controller
{
    public function index() {
        return Gym::all();
    }

    public function show($id){
        $gym = Gym::findOrFail($id);

        return $gym;
    }

    public function store(Request $request){
        $gym = Gym::create([
            'gym_name' => $request->input('gym_name'),
        ]);
        return $gym;
    }

    public function update(Request $request, $gymId){
        $gym = Gym::findOrFail($gymId);

        $gym->update([
            'gym_name' => $request->input('gym_name'),
        ]);

        return $gym;
    }

    public function destroy($gymId){
        $gym = Gym::findOrFail($gymId);

        $gym->delete();

        return $gym;
    }

}
