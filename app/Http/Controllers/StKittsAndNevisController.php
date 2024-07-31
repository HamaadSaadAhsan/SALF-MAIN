<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class StKittsAndNevisController extends Controller
{
    public function index(){
        return Inertia::render('StKittsNevis/Page');
    }
}
