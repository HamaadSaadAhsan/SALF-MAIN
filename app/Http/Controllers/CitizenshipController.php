<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class CitizenshipController extends Controller
{
    public function index(){
        return Inertia::render('Citizenship/Investment');
    }



}
