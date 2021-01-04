function showNumbers()

 	{
                
    	let numberOne = parseInt(document.form.num1.value);
        let numberTwo = parseFloat(document.form.num2.value);

        result = (shoeSize % yearOfBirth);
        result = result.toFixed(2);
        
       		if (numberOne == "") {
        		alert("Veuillez remplir le premier champ.");
      		} else if(numberTwo == "") {
        		window.alert("Veuillez remplir le second champ.");
       		} else {
              document.getElementById("show").innerHTML = "Le résulat est égal à " + result;
       		}
   	}