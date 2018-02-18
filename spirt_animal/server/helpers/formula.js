module.exports = (obj, arr){		
	for (var i = 0; i< arr.length; i++) {
		if (obj.gender.toLowerCase() === arr[i].gender && obj.mode.toLowerCase() === arr[i].mode){
			return "your spirit animal is" + arr[i].name + "the" + arr[i].animal + "."
		} else if (obj.gender === "Male" && $('input[value="air"]:checked')){
		var myText= $("<h2>")
		myText.text("your spirit animal is" + arr[i].name + "the" + arr[i].animal + ".")

		}else if (obj.gender === "Male" && $('input[value="water"]:checked')){
		var myText= $("<h2>")
		myText.text("your spirit animal is" + arr[i].name + "the" + arr[i].animal + ".")

		}else if (obj.gender === "Female" && $('input[value="earth"]:checked')){
		var myText= $("<h2>")
		myText.text("your spirit animal is" + arr[i].name + "the" + arr[i].animal + ".")

		}else if (obj.gender === "Female" && $('input[value="air"]:checked')){
		var myText= $("<h2>")
		myText.text("your spirit animal is" + arr[i].name + "the" + arr[i].animal + ".")

		}else if (obj.gender === "Female" && $('input[value="water"]:checked')){
		var myText= $("<h2>")
		myText.text("your spirit animal is" + arr[i].name + "the" + arr[i].animal + ".")

		}
	}
}