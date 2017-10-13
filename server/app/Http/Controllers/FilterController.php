<?php

namespace App\Http\Controllers;

use App\Timetable;
use Illuminate\Http\Request;

class FilterController extends Controller
{
    public function getQuery(Request $request){
        $query = $request->query();
        $arr = array();

        foreach ($query as $key => $value) {
            $item = [$key, '=', $value];
            array_push($arr,$item);
        }

        $response = Timetable::with('gyms','exercises','levels', 'trainers')
            ->join('timetable_trainer', 'timetables.id', '=', 'timetable_trainer.timetable_id')
            ->where($arr)
            ->get();

        return $response;

    }
}
