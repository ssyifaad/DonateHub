<?php

use App\Http\Controllers\AboutController;
use App\Http\Controllers\CausesController;
use App\Http\Controllers\ContacController;
use App\Http\Controllers\DonateController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\OurTeamController;
use App\Http\Controllers\ServiceController;
use Illuminate\Support\Facades\Route;

// Route::get('/', function () {
//     return view('welcome');
// });

// Bisa digunakan untuk mengirim data dari routes ke views.

Route::get('/', [HomeController::class, 'index'])->name('home'); // Website diarahkan ke home.blade.php
Route::get('about', [AboutController::class, 'index'])->name('about'); // Website diarahkan ke views about.blade.php
Route::get('causes', [CausesController::class, 'index'])->name('causes'); // Website diarahkan ke causes.blade.php

Route::get('donation', [DonateController::class, 'index'])->name('donate'); // Website diarahkan ke donate.blade.php
Route::post('donation/store', [DonateController::class, 'store'])->name('donate.store'); // Website diarahkan ke donate.blade.php
Route::get('/success', [DonateController::class, 'success'])->name('success'); // Website diarahkan ke donate.blade.php


Route::get('team', [OurTeamController::class, 'index'])->name('team'); // Website diarahkan ke team.blade.php
Route::get('contact', [ContacController::class, 'index'])->name('contact'); // Website diarahkan ke contact.blade.php
Route::get('service', [ServiceController::class, 'index'])->name('service'); // Website diarahkan ke service.blade.php
