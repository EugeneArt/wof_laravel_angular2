<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Comment;

class CommentController extends Controller
{
    public function index() {
        return Comment::all();
    }

    public function show($id){
        $comment = Comment::findOrFail($id);

        return $comment;
    }

    public function store(Request $request){
        $comment = Comment::create([
            'name' => $request->input('name'),
            'comment' => $request->input('comment'),
        ]);

        return $comment;
    }

    public function update(Request $request, $commentId){
        $comment = Comment::findOrFail($commentId);

        $comment->update([
            'name' => $request->input('name'),
            'comment' => $request->input('comment'),
        ]);

        return $comment;
    }

    public function destroy($commentId){
        $comment = Comment::findOrFail($commentId);

        $comment->delete();

        return $comment;
    }

}
