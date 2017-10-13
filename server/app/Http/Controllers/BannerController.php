<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Banner;

class BannerController extends Controller
{
    public function index() {
        return Banner::all();
    }

    public function show($id){
        $banner = Banner::findOrFail($id);

        return $banner;
    }

    public function store(Request $request){
        $banner = Banner::create([
            'name' => $request->input('name'),
            'image_url' => $request->input('image_url'),
            'is_used' => $request->input('is_used'),
        ]);

        return $banner;
    }

    public function update(Request $request, $bannerId){
        $banner = Banner::findOrFail($bannerId);

        $banner->update([
            'name' => $request->input('name'),
            'image_url' => $request->input('image_url'),
            'is_used' => $request->input('is_used'),
        ]);

        return $banner;
    }

    public function destroy($bannerId){
        $banner = Banner::findOrFail($bannerId);

        $path = public_path() . '/upload/' .$banner->image_url;
        if(file_exists($path)) {
            unlink($path);
        }

        $banner->delete();

        return $banner;
    }
}
