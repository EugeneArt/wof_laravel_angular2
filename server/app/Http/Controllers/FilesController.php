<?php

namespace App\Http\Controllers;

use App\Image;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class FilesController extends Controller
{

    public function store(Request $request){
        $image = $request->input('image');
        if($image) {
            $path = public_path() . '/upload/' .$image;
            if(file_exists($path)) {
                unlink($path);
            }
        }
        $file = $request->file('file');

        $uniquesavename = time().uniqid(rand());
        $fileExtension = $file->extension();
        $fileName = $uniquesavename.'.'.$fileExtension;
        $destinationPath = public_path(). '/upload/';
        $request->file('file')->move($destinationPath, $fileName);

        return $fileName;
    }

    public function destroy($imageId){
        $image = Image::findOrFail($imageId);

        $path = public_path() . '/upload/' .$image->url;
        if(file_exists($path)) {
            unlink($path);
        }

        $image->delete();

        return $image;
    }
}
