

 $(document).ready(function(){
  
	$('#myBtn').on('click', ()=>{
		for (var i = 0; i< spiritAnimal.length; i++) {
			if ($('input[value="male"]:checked') && $('input[value="earth"]:checked')){
			var myText= $("<h2>")
			myText.text("your spirit animal is" + spiritAnimal.name + "the" + spiritAnimal.animal + ".")

			}else if ($('input[value="male"]:checked') && $('input[value="air"]:checked')){
			var myText= $("<h2>")
			myText.text("your spirit animal is" + spiritAnimal.name + "the" + spiritAnimal.animal + ".")

			}else if ($('input[value="male"]:checked') && $('input[value="water"]:checked')){
			var myText= $("<h2>")
			myText.text("your spirit animal is" + spiritAnimal.name + "the" + spiritAnimal.animal + ".")

			}else if ($('input[value="female"]:checked') && $('input[value="earth"]:checked')){
			var myText= $("<h2>")
			myText.text("your spirit animal is" + spiritAnimal.name + "the" + spiritAnimal.animal + ".")

			}else if ($('input[value="female"]:checked') && $('input[value="air"]:checked')){
			var myText= $("<h2>")
			myText.text("your spirit animal is" + spiritAnimal.name + "the" + spiritAnimal.animal + ".")

			}else if ($('input[value="female"]:checked') && $('input[value="water"]:checked')){
			var myText= $("<h2>")
			myText.text("your spirit animal is" + spiritAnimal.name + "the" + spiritAnimal.animal + ".")

			$('#resultDiv').append(myText);
			consol.log(myText)
			}
		}
	})
	
 })


	//$('#myBtn').on('click', ()=>{
  		//if(gender == male && mode == earth) {
  			// $('#resultDiv').text(" your are ");
		//}
	//})
//})

