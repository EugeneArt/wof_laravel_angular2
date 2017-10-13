<?php

use Illuminate\Http\Request;

//CORS
header('Access-Control-Allow-Origin: http://localhost:4200');
header('Access-Control-Allow-Headers: Content-Type, x-xsrf-token, x_csrftoken');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Credentials: true');

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::resource('gyms','GymController',['only'=>['index','store','show', 'update', 'destroy']]);
Route::resource('levels','LevelController',['only'=>['index','store','show', 'update', 'destroy']]);
Route::resource('banners','BannerController',['only'=>['index','store','show', 'update', 'destroy']]);
Route::resource('comments','CommentController',['only'=>['index','store','show', 'update', 'destroy']]);
Route::resource('exercises','ExerciseController',['only'=>['index','store','show', 'update', 'destroy']]);
Route::resource('trainers','TrainerController',['only'=>['index','store','show', 'update', 'destroy']]);
Route::resource('timetables','TimetableController',['only'=>['index','store','show', 'update', 'destroy']]);

Route::resource('files','FilesController',['only'=>['index','store','show', 'update', 'destroy']]);
Route::get('filter', 'FilterController@getQuery');