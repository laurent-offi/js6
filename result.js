function showNumbers()

 	{
                
    	let numberOne = parseInt(document.form.num1.value);
        let numberTwo = parseFloat(document.form.num2.value);

        let result = numberOne % numberTwo;
       		if (numberOne == "") {
        		alert("Veuillez remplir le premier champ.");
      		} else if(numberTwo == "") {
        		window.alert("Veuillez remplir le second champ.");
       		} else {
              document.getElementById("show").innerHTML = "Le résulat est égal à " + result;
       		}
   	}