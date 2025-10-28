<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProjectController; // <-- Ini harus ada!

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Pakai class dengan namespace lengkap
Route::apiResource('projects', ProjectController::class);
