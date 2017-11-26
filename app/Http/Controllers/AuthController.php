<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function store(Request $request)
    {
        echo 'Auth store';
    }

    public function signin(Request $request)
    {
        echo 'Auth signin';
    }
}
