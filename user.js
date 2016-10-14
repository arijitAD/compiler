$(document).ready(function(){
	$("#compile").click(function(){
		$.ajax({
			type: 'POST',
			url: 'post.php',
			data: {
				lang: $("#lang").val(),
				source: $("#source").val(),
			},
			success: function(data){
				console.log(data);
				$("#result").html(data)
			}
		})
	});
});
