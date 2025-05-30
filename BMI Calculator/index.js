/*------------------------------------------------------------swith from metric to imperial and vice versa--------------------------------------*/

const metricCheck = document.getElementById("metric");
const imperialCheck = document.getElementById("imperial");

metricCheck.addEventListener("change", () => {
  document.querySelector(".user_input_metric").style.display = "flex";
  document.querySelector(".user_input_imperial").style.display = "none";
  clearInputFields();
  yourBmi.textContent = "Welcome!";
  clearText.textContent =
    "Enter your height and weight and you’ll see your BMI result here";
  resultDetails.textContent =
    "A BMI range of 18.5 to 24.9 is considered a 'healthy weight. Maintaining a healthy weight may lower your chances of experiencing health issues later on, such as obesity and type 2 diabetes. Aim for a nutritious diet with reduced fat and sugar content, incorporating ample fruits and vegetables. Additionally, strive for regular physical activity, ideally about 30 minutes daily for five days a week.";
});

imperialCheck.addEventListener("change", () => {
  document.querySelector(".user_input_metric").style.display = "none";
  document.querySelector(".user_input_imperial").style.display = "flex";
  clearInputFields();
  yourBmi.textContent = "Welcome!";
  clearText.textContent =
    "Enter your height and weight and you’ll see your BMI result here";
  resultDetails.textContent =
    "A BMI range of 18.5 to 24.9 is considered a 'healthy weight. Maintaining a healthy weight may lower your chances of experiencing health issues later on, such as obesity and type 2 diabetes. Aim for a nutritious diet with reduced fat and sugar content, incorporating ample fruits and vegetables. Additionally, strive for regular physical activity, ideally about 30 minutes daily for five days a week.";
});

if (metricCheck.checked) {
  document.querySelector(".user_input_metric").style.display = "flex";
  document.querySelector(".user_input_imperial").style.display = "none";
} else if (imperialCheck.checked) {
  document.querySelector(".user_input_metric").style.display = "none";
  document.querySelector(".user_input_imperial").style.display = "flex";
}

/*------------------------------------------------------------BMI variables and calculation------------------------------------------------------------ */

const heightCmInput = document.getElementById("height_cm");
const weightKgInput = document.getElementById("weight_kg");
const heightFtInput = document.getElementById("height_ft");
const heightInInput = document.getElementById("height_in");
const weightStInput = document.getElementById("weight_st");
const weightLbsInput = document.getElementById("weight_lbs");
const resultDisplay = document.getElementById("result");
const resultExplanation = document.getElementById("result_explanation");
const resultDetails = document.getElementById("result_details");
const yourBmi = document.getElementById("your_bmi");
const clearText = document.getElementById("clear_text");

heightCmInput.addEventListener("input", calculateBmi);
weightKgInput.addEventListener("input", calculateBmi);
heightFtInput.addEventListener("input", calculateBmi);
heightInInput.addEventListener("input", calculateBmi);
weightStInput.addEventListener("input", calculateBmi);
weightLbsInput.addEventListener("input", calculateBmi);

function clearInputFields() {
  heightCmInput.value = "";
  weightKgInput.value = "";
  heightFtInput.value = "";
  heightInInput.value = "";
  weightStInput.value = "";
  weightLbsInput.value = "";
  resultDisplay.innerHTML = "";
  resultExplanation.innerHTML = "";
  resultDetails.innerHTML = "";
  yourBmi.innerHTML = "";
  clearText.innerHTML = "";
}

function calculateBmi() {
  let heightCmValue = parseFloat(heightCmInput.value);
  let weightKgValue = parseFloat(weightKgInput.value);
  let heightFtValue = parseFloat(heightFtInput.value);
  let heightInValue = parseFloat(heightInInput.value);
  let weightStValue = parseFloat(weightStInput.value);
  let weightLbsValue = parseFloat(weightLbsInput.value);

  if (!isNaN(heightCmValue) && !isNaN(weightKgValue)) {
    const bmiMetric = weightKgValue / Math.pow(heightCmValue / 100, 2);
    displayBmi(bmiMetric);
    return;
  }

  if (
    !isNaN(heightFtValue) &&
    !isNaN(heightInValue) &&
    !isNaN(weightStValue) &&
    !isNaN(weightLbsValue)
  ) {
    const totalHeightInInches = heightFtValue * 12 + heightInValue;
    const totalWeightInPounds = weightStValue * 14 + weightLbsValue;
    const bmiImperial =
      (totalWeightInPounds / Math.pow(totalHeightInInches, 2)) * 703;
    displayBmi(bmiImperial);
    return;
  }
}

function displayBmi(bmi) {
  let interpretation = "";
  let interpretationImperial = "";
  let details = "";

  if (bmi < 18.5) {
    interpretation = "Your BMI suggests you’re underweight and malnourished";
    details =
      "A BMI below 18.5 is considered underweight. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit odio id quam fugiat sit magni quibusdam esse minima, rerum nemo alias ullam facere dolorem dicta iste, suscipit voluptas nihil pariatur?";
  } else if (metricCheck.checked && bmi >= 18.5 && bmi < 25) {
    interpretation =
      "Your BMI suggests you’re a healthy weight. Your ideal weight is between <b>63.3kgs - 85.2kgs</b>";
    details =
      "A BMI range of 18.5 to 24.9 is considered a 'healthy weight.' Maintaining a healthy weight may lower your chances of experiencing health issues later on, such as obesity and type 2 diabetes. Aim for a nutritious diet with reduced fat and sugar content, incorporating ample fruits and vegetables. Additionally, strive for regular physical activity, ideally about 30 minutes daily for five days a week.";
  } else if (imperialCheck.checked && bmi >= 18.5 && bmi < 25) {
    interpretationImperial =
      "Your BMI suggests you’re a healthy weight. Your ideal weight is between <b> 18.5Lbs - 25Lbs</b>";
    details =
      "A BMI range of 18.5 to 24.9 is considered a 'healthy weight.' Maintaining a healthy weight may lower your chances of experiencing health issues later on, such as obesity and type 2 diabetes.";
  } else if (bmi >= 25 && bmi < 30) {
    interpretation = "Your BMI suggests you’re overweight";
    details =
      "A BMI range of 25 to 29.9 is considered overweight.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit odio id quam fugiat sit magni quibusdam esse minima, rerum nemo alias ullam facere dolorem dicta iste, suscipit voluptas nihil pariatur?";
  } else if (bmi >= 30) {
    interpretation = "Your BMI suggests you’re obese";
    details =
      "A BMI range of 40 or above indicates you're severely obese.Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit odio id quam fugiat sit magni quibusdam esse minima, rerum nemo alias ullam facere dolorem dicta iste, suscipit voluptas nihil pariatur?";
  }

  resultDisplay.innerHTML = `${bmi.toFixed(1)}`;
  if (metricCheck.checked && bmi >= 18.5 && bmi < 25) {
    resultExplanation.innerHTML = `${interpretation}`;
  } else if (imperialCheck.checked && bmi >= 18.5 && bmi < 25) {
    resultExplanation.innerHTML = `${interpretationImperial}`;
  } else {
    resultExplanation.innerHTML = `${interpretation}`;
  }
  resultDetails.innerHTML = `${details}`;
  yourBmi.innerHTML = "Your BMI is...";
  clearText.innerHTML = "";
}
