

 $(document).ready(function(){
  
	$('#myForm').on('submit', (e)=>{
		e.preventDefault();
		var userInput = {
			gender: $('input[name=gender]:checked').val(),
			mode: $('input[name=mode]:checked').val()
		}
		$.ajax({
			method: 'POST',
			url: '/animal',
			contentType: 'application/json',
			dataType: 'json',
			data: JSON.stringify(userInput)
 		}).then((res) => {
 			console.log(res);
				$('#exampleModalCenter').modal();	
				$('.modal-body').append(res.name);
				$('.modal-body').append(res.animal);
 			$('.myForm').submit();
		})
	})
})
 




