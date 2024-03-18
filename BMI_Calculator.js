// Calculate BMI
document.getElementById("mySubmit").onclick = function(){
    weight = document.getElementById("myText1").value;
    weight = Number(weight);
    height = document.getElementById("myText2").value;
    height = Number(height);
    heightN = height * height;
  
    bmi = weight / heightN;
    limitedBmi = bmi.toFixed(2);
    document.getElementById("myH3").textContent = `Your BMI is ${limitedBmi} kg/m²`;
  
  
    // Check BMI range and provide dietary advice
    if (isNaN (weight) || isNaN(height) || weight <= 0 || height <= 0) {
      alert("Please enter valid numerical values for weight and height.");
      return; 
      // Stop further execution if input is invalid
  
    } else if (limitedBmi < 18.5) {
      document.getElementById("myH4").innerHTML = `Weight Status: Underweight.<br><br><br>DIETARY ADVICE: <br> - Increase your calorie intake <br> - Add butter or margarine to your food <br> - Fry foods such as roast potatoes and chips <br> - Choose whole milk instead of skimmed or semi-skimmed milk`;
    } else if (limitedBmi >= 18.5 && limitedBmi <= 24.9) {
      document.getElementById("myH4").innerHTML = `Weight Status: Healthy weight.<br><br><br>DIETARY ADVICE: <br> - Base your meals on higher fiber starchy carbohydrates <br> - Eat lots of fruit and vegetables <br> - Cut down on saturated fat and sugar`;
    } else if (limitedBmi >= 25 && limitedBmi <= 29.9) {
      document.getElementById("myH4").innerHTML = `Weight Status: Overweight.<br><br><br>DIETARY ADVICE: <br> - Choose minimally processed, whole foods <br> - Whole grains (Whole wheat, steel cut oats, brown rice) <br> - Vegetables (a colorful variety - not potatoes) <br> - Whole fruits <br> - Healthful sources of protein`;
    } else {
      document.getElementById("myH4").innerHTML = `Weight Status: Obese.<br><br><br>DIETARY ADVICE: <br> - Choose minimally processed, whole foods <br> - Whole grains (Whole wheat, steel cut oats, brown rice) <br> - Vegetables (a colorful variety - not potatoes) <br> - Whole fruits <br> - Healthful sources of protein`;
    }
  
  
    // Calculate minimum and maximum weight
    let minWeight = heightN * 18.5;
    let maxWeight = heightN * 24.9;
    let limitedMinWeight = minWeight.toFixed(2);
    let limitedMaxWeight = maxWeight.toFixed(2);
  
    document.getElementById("myH5").textContent = `The minimum weight you should have: ${limitedMinWeight} kg`;
    document.getElementById("myH6").textContent = `The maximum weight you should have: ${limitedMaxWeight} kg`;
  
    document.getElementById("myH7").innerHTML = `Keep your BMI between 18.5 and 24.9 <br>Have a nice day !`;
  }
  // Run the application