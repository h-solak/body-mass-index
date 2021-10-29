

const calc = () => {
    var height = (document.querySelector("#height").value);
    var weight = (document.querySelector("#weight").value);
    height /= 100; //converting cm to m
    var mass = weight / (height**2);
    
    if  (typeof mass == 'number' && !isNaN(mass)
        || typeof height == 'number' && !isNaN(height)
        || typeof weight == 'number' && !isNaN(weight))  { //checking if the user entered correct data
        
        mass = mass.toFixed(1); //decimal format
        document.querySelector("#result1").innerHTML = mass;

            if(mass<16){
                document.querySelector("#result2").innerHTML = "Severe Thinness"
            }

            else if(mass<17) {
                document.querySelector("#result2").innerHTML = "Moderate Thinness"
            }

            else if(mass<18.5) {
                document.querySelector("#result2").innerHTML = "Mild Thinness"
            }

            else if(mass<25) {
                document.querySelector("#result2").innerHTML = "Normal"
            }

            else if(mass<30) {
                document.querySelector("#result2").innerHTML = "Overweight"
            }

            else if(mass<35) {
                document.querySelector("#result2").innerHTML = "Obese Class I"
            }

            else if(mass<40){
                document.querySelector("#result2").innerHTML = "Obese Class II"
            }

            else if(mass>=40){
                document.querySelector("#result2").innerHTML = "Obese Class III"
            }

            else if ((height == "") || (weight == "") ) {
                document.querySelector("#result1").innerHTML = "Type something!"
            }
        
    } else{    
        document.querySelector("#result1").innerHTML = "Enter a valid data!";
        document.querySelector("#result2").innerHTML = "";
    }
    
}

//Allows user to calculate the calculation by pressing enter when user is on input weight
//source of the code below: https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp
var input = document.getElementById("weight");

input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("calc-btn").click();
  }
});