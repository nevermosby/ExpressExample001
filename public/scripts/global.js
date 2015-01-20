//global.js
console.log($.fn.jquery);

$(document).ready(function(){

	populateInstanceList();

	var $instanceListTable = $('#instanceList table'); 
	
	// handle backup funtion
	$instanceListTable.on('click', 'button.backup', function(){
		$currentTr = $(this).parents('tr');
		if($currentTr.length >0 ){
			// console.log($currentTr.html());
			var currentName = $currentTr.find('td.name').text();
			alert("clicked instance name: " + currentName);	

			//TODO: call the api to backup the current instance
		}
		
	});

	// handle restore function
	$instanceListTable.on('click', 'button.restore', function(){
		$currentTr = $(this).parents('tr');
		if($currentTr.length >0 ){
			// console.log($currentTr.html());
			var currentName = $currentTr.find('td.name').text();
			alert("show the existed backup list for " + currentName);	

			//TODO: show the existed backup list for user to choose
		}
	});

});

function populateInstanceList() {
	var tbodyContent = '';

	$.getJSON('/mockup/instanceList.json', function(data){
		$.each(data, function(){
			tbodyContent += '<tr>';
            tbodyContent += '<td class="name">' + this.name+'</td>';
            tbodyContent += '<td class="date">' + this.createDate + '</td>';
            tbodyContent += '<td class="status">' + this.status + '</td>';
            tbodyContent += '<td class="action">' +
            					'<button class=destroy>Destroy</button>' + 
            					'<button class=backup>Backup</button>' + 
            					'<button class=restore>Restore</button>' +
            					'<button class=rebuild>Rebuild</button>' +
            				'</td>';
            tbodyContent += '</tr>';

            $('#instanceList table tbody').html(tbodyContent);
		})
	});
}
