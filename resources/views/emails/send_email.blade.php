{{-- resources/views/emails/send_email.blade.php --}}

@component('mail::message')
    ## Información de contacto
    Nombres: {{ $nombres }}
    Apellidos: {{ $apellidos }}
    Email: {{ $email }}
    Asunto: {{ $asunto }}
    Mensaje: {{ $mensaje }}
@endcomponent
