<?php

namespace App\Mail;

use Illuminate\Mail\Mailable;
use Illuminate\Notifications\Messages\MailMessage;

class sendEmail extends Mailable
{
    public $nombres;
    public $apellidos;
    public $email;
    public $asunto;
    public $mensaje;

    public function __construct($nombres, $apellidos, $email, $asunto, $mensaje)
    {
        $this->nombres = $nombres;
        $this->apellidos = $apellidos;
        $this->email = $email;
        $this->asunto = $asunto;
        $this->mensaje = $mensaje;
    }

    public function build()
    {
        //return $this->markdown('emails.send_email');
        return $this->markdown('emails.send_email')
            ->subject('Desde la pagina web: ' . $this->asunto)
            ->from($this->email, $this->nombres . ' ' . $this->apellidos)
            ->cc('geilerelias@gmail.com');

    }
}
