var height = 16;
var width = 16;

$(document).ready(function() {
	generateGrid(height, width);


});

function generateGrid(height, width) {
	//creates rows
	for (i = 0; i < height; i++) {
    	$('div#grid table').append('<tr class="row"></tr>');
    	console.log('test');
  	};

  	//creates columns
  	for (i = 0; i < width; i++) {
  		$('div#grid table tr.row').append('<td><div class="block"></div></td>');
  	};
};
