var height = 16;
var width = 16;

var $block = $('div.block');

$(document).ready(function() {
	generateGrid(height, width);

	$('button').click(function() {
		$('tr.row').remove();
		$('td.row').remove();

		height = prompt('Please enter number of rows', '16');
		width = prompt('Please enter number of columns', '16');

		generateGrid(height, width);
	});
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

  	$('div.block').mouseenter(function() {
		$(this).addClass('filled');
	});
};
