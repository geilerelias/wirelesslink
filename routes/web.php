<?php

use App\Http\Controllers\SendMailController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/welcome', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});


Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

Route::get('/about-us', function () {
    return Inertia::render('AboutUs');
})->name('about-us');

Route::get('/services', function () {
    return Inertia::render('Services');
})->name('services');

Route::get('/clients', function () {
    return Inertia::render('Clients');
})->name('clients');

Route::get('/contact-us', function () {
    return Inertia::render('ContactUs');
})->name('contact-us');

Route::get('/speed-test', function () {
    return Inertia::render('SpeedTest');
})->name('speed-test');

Route::get('/project/detail/{project}', function ($project) {
    return Inertia::render('ProjectDetail', ['project' => $project]);
})->name('project-detail');

Route::get('/example', function () {
    return Inertia::render('Example');
});

Route::get('/documentation', function () {
    return Inertia::render('Documentation');
});

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
});


Route::post('/enviar-correo', [SendMailController::class, 'enviarCorreo'])->name('enviar-correo');


Route::get('/get/img/{folder}/{file?}', function ($folder, $file = null) {
    $path = '/resources/images/projects/';
    $directory = '';
    if ($file == null) {
        $ficheros = scandir(base_path() . $path . '/' . trim($folder, " ") . '/');
        //echo  $ficheros[2] .'<br>';
        $directory = base_path() . $path . '/' . trim($folder, " ") . '/' . $ficheros[2];

    } else {
        $directory = base_path() . $path . '/' . trim($folder, " ") . '/' . trim($file, " ");

    }
    //echo  $directory;
    try {

        $file = File::get($directory);
        $type = File::mimeType($directory);

        $response = Response::make($file, 200);
        $response->header("Content-Type", $type);

        return $response;
    } catch (Exception $e) {
        return 'Excepción capturada: ' . $e->getMessage() . "\n";
    }
});

// Función para obtener dimensiones de una imagen
function getImageDimensions($file_path): array
{
    list($width, $height) = getimagesize($file_path);
    return ['width' => $width, 'height' => $height];
}

// Listado de instituciones
Route::get('/get/list/projects', function () {
    $path = '/resources/images/projects/';
    $directory = base_path() . $path;

    try {
        $folder = listadoDirectorio($directory);
        return response()->json($folder);
    } catch (Exception $e) {
        return response()->json(['error' => $e->getMessage()], 500);
    }
});

function listadoDirectorio($directorio): array
{
    $folder = array();
    $listado = scandir($directorio);
    unset($listado[array_search('.', $listado, true)]);
    unset($listado[array_search('..', $listado, true)]);

    if (count($listado) < 1) {
        return ['message' => 'directorio vacío'];
    }

    foreach ($listado as $elemento) {
        $elementoPath = $directorio . '/' . $elemento;

        if (is_dir($elementoPath)) {
            $array = [
                'folder' => $elemento,
                'sub' => listadoDirectorio($elementoPath),
            ];
            $folder[] = $array;
        }

        if (!is_dir($elementoPath)) {
            $imageDimensions = getImageDimensions($elementoPath);
            $fileDetails = [
                'url' => $elemento,
                'width' => $imageDimensions['width'],
                'height' => $imageDimensions['height'],
            ];
            $folder[] = $fileDetails;
        }
    }

    return $folder;
}

