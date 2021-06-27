<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}" />
    <title>Cookie bakery</title>

    <!-- Fonts -->
    <link href="{{ mix('css/app.css') }}" rel="stylesheet" type="text/css">

    <!-- Styles -->
    <style>
        #app {
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: 100vh;
            transition: background 0.3s ease;
        }

        .min-vh-10 {
            min-height: 100vh;
        }
    </style>
</head>
<body>
<div id="app">
    <router-view></router-view>
</div>
<script src="{{mix('js/app.js')}}"></script>
</body>
</html>
