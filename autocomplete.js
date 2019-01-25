$(document).ready(function() {
	var lastTitle;
	var xhr;
	var timer;
	
	$('#title').keyup(function () {
		$(this).loading('start');
		
		clearInterval(timer);
		timer = setInterval(function() {
			$(this).autocomplete();
			clearInterval(timer);
		}, 1000);
	});
	
	$('#title').keydown(function () {
		clearInterval(timer);
	});
	
	$('#list').change(function() {
		$('#id').val($(this).val());
		$('#selected').text($('#' + this.id + ' option:selected').text());
	});
	
	
	// Plugins
	$.fn.autocomplete = function() {		
		var currentTitle = $('#title').val();
		
		if (lastTitle != currentTitle) {
			if ((xhr) && (xhr.readyState != 4)) {
				xhr.abort();
			}
			
			xhr = $.ajax({
				method: 'post',
				url: 'query.php',
				data: {'title': currentTitle},
				error: function(response) {
					console.log(response.responseText);
					$(this).reset();
				},
				success: function(response) {
					console.log(response);
					var results = jQuery.parseJSON(response);
					$(this).render(results);
				}
			});
		}
		else { 
			$(this).reset();
		}
	};
	
	$.fn.render = function(results) {
		var total = results.length;
		
		if (total > 0) {
			var cont = 0;
			
			for (cont = 0; cont < total; cont++) {
				$('#list').append('<option value="' + results[cont].id + '">' + results[cont].title + '</option>');
			}
			
			$(this).visibility('show');
			$(this).loading('stop');
		}
		else {
			$(this).reset();
		}
	};
	
	$.fn.visibility = function(option) {
		if (option == 'show') {
			$('#list').removeClass('hide');
			$('#list').addClass('show');
		}
		else {
			$('#list').removeClass('show');
			$('#list').addClass('hide');
		}
	};
	
	$.fn.clean = function() {
		$('#list option').remove();
	};
	
	$.fn.loading = function(action) {
		if (action == 'start') {
			$(this).visibility('hide');
			$(this).clean();
			$('#selected').text('');
			$('#loading').html('<img src="loading.gif" />');
		}
		else {
			$('#loading').html('');
		}
	};
	
	$.fn.reset = function() {
		$(this).visibility('hide');
		$(this).loading('stop');
		$(this).clean();
		$('#selected').text('');
	};
});