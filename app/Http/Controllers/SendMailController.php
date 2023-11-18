<?php

namespace App\Http\Controllers;

use App\Mail\sendEmail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class SendMailController extends Controller
{
    public function enviarCorreo(Request $request)
    {
        // Valida los datos del formulario
        $request->validate([
            'nombres' => 'required',
            'apellidos' => 'required',
            'email' => 'required|email',
            'asunto' => 'required',
            'mensaje' => 'required',
        ]);

        // Datos del formulario
        $nombres = $request->input('nombres');
        $apellidos = $request->input('apellidos');
        $email = $request->input('email');
        $asunto = $request->input('asunto');
        $mensaje = $request->input('mensaje');

        // Envía el correo
        Mail::to('gerencia@wirelesslink.com.co')
            ->send(new sendEmail($nombres, $apellidos, $email, $asunto, $mensaje));

        // Puedes agregar lógica adicional aquí, como redireccionar a una página de agradecimiento

        return redirect()->back()->with('mensaje', 'Correo enviado correctamente');
    }
}
