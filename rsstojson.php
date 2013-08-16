<?php
header('content-type: application/json; charset=utf-8');
$feed = file_get_contents('http://vodo.net/feeds/public/');
$feed = str_replace('<media:', '<', $feed);

$buffer = simplexml_load_string($feed);

echo $_GET['callback']."(".json_encode($buffer).")";

?>
