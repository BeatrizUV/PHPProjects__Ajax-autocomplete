<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>BeatrizUV - tools__ajax-autocomplete</title>
		<script src="https://code.jquery.com/jquery-3.3.1.js" integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60=" crossorigin="anonymous"></script>
		<script src="autocomplete.js"></script>
		<link type="text/css" rel="stylesheet" href="styles.css" />
    </head>
    <body>
		<p id="selected"></p>
		<input type="text" name="title" id="title" value="" placeholder="Escriba un título..." /><span id="loading"></span><br />
		<input type="hidden" name="id" id="id" value="" />
		<select multiple id="list" name="list" class="hide"></select>
    </body>
</html>
