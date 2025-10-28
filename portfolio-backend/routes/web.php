<?php

use Illuminate\Support\Facades\Route;

// Hanya keep route homepage (welcome page)
Route::get('/', function () {
    return view('welcome');
});

// HAPUS route ini kalau ada:
// Route::apiResource('projects', ProjectController::class);
// Route::get('/projects', ...);
