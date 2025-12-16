<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
class UserController extends Controller
{
    public function fetchUser(){
        $userDetails = User::all();
        return response()->json([
            'status' => true,
            'data' => $userDetails
        ]);
    }
}
