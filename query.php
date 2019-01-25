<?php
	$list = json_decode(file_get_contents('data.json'), true);
	$title = $_POST['title'];
	$results = [];
	
	if (($title != '') && ($title != null)) {
		foreach ($list as $item) {
			if (preg_match('/' . $title . '/i', $item['title'])) {
				$results[] = $item;
			}
		}
	}
	
	echo json_encode($results);
	die();
?>

