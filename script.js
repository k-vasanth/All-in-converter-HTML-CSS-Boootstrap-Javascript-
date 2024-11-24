var inputVal = document.querySelectorAll(".convertion");
inputVal.forEach((form) => (form.style.display = "none"));

var categoryVal = document.getElementById("cat");
categoryVal.addEventListener("change", function () {
  let userInput = categoryVal.value;
  inputVal.forEach((form) => (form.style.display = "none"));
  document.getElementById(userInput).style.display = "block";
});

let sideOne = document.getElementById("temperatureValue1");
let sideTwo = document.getElementById("temperatureValue2");
let tempSource = document.getElementById("inputCatagory");
let tempOutput = document.getElementById("outputCatagory");


inputBox = document.getElementById("input_box");
resultBox = document.getElementById("result_box");
inputCategory = document.getElementById("inputCategory");
resultCategory = document.getElementById("resultCategory");

let areaInput = document.getElementById("areaInput_box");
let areaResult = document.getElementById("areaResult_box");
let areaInputCategory = document.getElementById("areaInput_category");
let areaOutputCategory = document.getElementById("areaResult_category");

const volumeInputBox = document.getElementById("volumeInput_box");
const volumeResultBox = document.getElementById("volumeResult_box");
const volumeInputCategory = document.getElementById("volumeInput_category");
const volumeResultCategory = document.getElementById("volumeResult_category");


let massInputBox = document.getElementById("massInput_box");
let massResultBox = document.getElementById("massResult_box");
let massInputCategory = document.getElementById("massInput_category");
let massResultCategory = document.getElementById("massResult_category");


let timeInputBox = document.getElementById("timeInput_box");
let timeResultBox = document.getElementById("timeResult_box");
let timeInputCategory = document.getElementById("timeInput_category");
let timeResultCategory = document.getElementById("timeResult_category");


const allClearBtn = document.querySelector("button");

sideOne.addEventListener("input", tempUpdate);
tempSource.addEventListener("change", tempUpdate);
tempOutput.addEventListener("change", tempUpdate);


inputBox.addEventListener("input", updateResult);
inputCategory.addEventListener("change", updateResult);
resultCategory.addEventListener("change", updateResult);


areaInput.addEventListener("input", areaUpdateResult);
areaInputCategory.addEventListener("change", areaUpdateResult);
areaOutputCategory.addEventListener("change", areaUpdateResult);


volumeInputBox.addEventListener("input", volumeUpdateResult);
volumeInputCategory.addEventListener("change", volumeUpdateResult);
volumeResultCategory.addEventListener("change", volumeUpdateResult);


massInputBox.addEventListener("input", massUpdateResult);
massInputCategory.addEventListener("change", massUpdateResult);
massResultCategory.addEventListener("change", massUpdateResult);


timeInputBox.addEventListener("input", timeUpdateResult);
timeInputCategory.addEventListener("change", timeUpdateResult);
timeResultCategory.addEventListener("change", timeUpdateResult);

allClearBtn.addEventListener("click",clearInput);


const conversionFactors = {
  meter: {
    kilometer: 0.001,
    meter: 1,
    centimeter: 100,
    millimeter: 1000,
    micrometer: 1000000,
    nanometer: 1000000000,
    mile: 1 / 1609.344,
    yard: 1.09361,
    foot: 3.28084,
    inch: 39.3701
  },
  kilometer: {
    meter: 1000,
    kilometer: 1,
    centimeter: 100000,
    millimeter: 1000000,
    micrometer: 1000000000,
    nanometer: 1000000000000,
    mile: 0.621371,
    yard: 1093.6133,
    foot: 3280.84,
    inch: 39370.1
  },
  centimeter: {
    meter: 0.01,
    kilometer: 0.00001,
    centimeter: 1,
    millimeter: 10,
    micrometer: 10000,
    nanometer: 10000000,
    mile: 1 / 160934,
    yard: 1 / 91.44,
    foot: 1 / 30.48,
    inch: 1 / 2.54
  },
  millimeter: {
    meter: 0.001,
    kilometer: 0.000001,
    centimeter: 0.1,
    millimeter: 1,
    micrometer: 1000,
    nanometer: 1000000,
    mile: 1 / 1609344.4978926,
    yard: 1 / 914.40275783872,
    foot: 1 / 304.7999902464,
    inch: 1 / 25.4
  },
  micrometer: {
    meter: 0.000001,
    kilometer: 0.000000001,
    centimeter: 0.0001,
    millimeter: 0.001,
    micrometer: 1,
    nanometer: 1000,
    mile: 1 / 1609344497.89,
    yard: 1 / 914402.75,
    foot: 1 / 304799.9,
    inch: 1 / 25399.9
  },
  nano: {
    meter: 0.000000001,
    kilometer: 0.000000000001,
    centimeter: 0.0000001,
    millimeter: 0.000001,
    micrometer: 0.001,
    nanometer: 1,
    mile: 1 / 16093449789000,
    yard: 1 / 914402750,
    foot: 1 / 304799990,
    inch: 1 / 25399900
  },
  mile: {
    meter: 1609.344,
    kilometer: 1.609344,
    centimeter: 160.9344,
    millimeter: 1609344,
    micrometer: 1609344000,
    nanometer: 1609344000000,
    mile: 1,
    yard: 1760,
    foot: 5280,
    inch: 63360 
  },
  yard: {
    meter: 0.9144,
    kilometer: 0.0009144,
    centimeter: 91.44,
    millimeter: 914.4,
    micrometer: 914400,
    nanometer: 914400000,
    mile: 0.00056818,
    yard: 1,
    foot: 3,
    inch: 36 
  },
  foot: {
    meter: 0.3048,
    kilometer: 0.0003048,
    centimeter: 30.48,
    millimeter: 304.8,
    micrometer: 304800,
    nanometer: 304800000,
    mile: 0.00018939,
    yard: 0.333333,
    foot: 1,
    inch: 12 
  },
  inch: {
    meter: 0.0254,
    kilometer: 0.0000254,
    centimeter: 2.54,
    millimeter: 25.4,
    micrometer: 25400,
    nanometer: 25400000,
    mile: 0.0000157828,
    yard: 0.027778,
    foot: 0.083333,
    inch: 1 
  }
};

const areaConversionFactors = {
  sq_meter: {
    sq_meter: 1,
    sq_kilometer: 1e-6,
    sq_centimeter: 1e4,
    sq_millimeter: 1e6,
    sq_micrometer: 1e12,
    sq_nanometer: 1e18,
    sq_mile: 3.861e-7,
    sq_yard: 1.19599,
    sq_foot: 10.7639,
    sq_inch: 1550,
  },
  sq_kilometer: {
    sq_meter: 1e6,
    sq_kilometer: 1,
    sq_centimeter: 1e10,
    sq_millimeter: 1e12,
    sq_micrometer: 1e18,
    sq_nanometer: 1e24,
    sq_mile: 0.3861,
    sq_yard: 1.196e6,
    sq_foot: 1.076e7,
    sq_inch: 1.55e9,
  },
  sq_centimeter: {
    sq_meter: 1e-4,
    sq_kilometer: 1e-10,
    sq_centimeter: 1,
    sq_millimeter: 100,
    sq_micrometer: 1e8,
    sq_nanometer: 1e14,
    sq_mile: 3.861e-11,
    sq_yard: 0.000119599,
    sq_foot: 0.00107639,
    sq_inch: 0.155,
  },
  sq_millimeter: {
    sq_meter: 1e-6,
    sq_kilometer: 1e-12,
    sq_centimeter: 0.01,
    sq_millimeter: 1,
    sq_micrometer: 1e6,
    sq_nanometer: 1e12,
    sq_mile: 3.861e-13,
    sq_yard: 1.19599e-6,
    sq_foot: 1.07639e-5,
    sq_inch: 0.00155,
  },
  sq_micrometer: {
    sq_meter: 1e-12,
    sq_kilometer: 1e-18,
    sq_centimeter: 1e-8,
    sq_millimeter: 1e-6,
    sq_micrometer: 1,
    sq_nanometer: 1e6,
    sq_mile: 3.861e-19,
    sq_yard: 1.19599e-12,
    sq_foot: 1.07639e-11,
    sq_inch: 1.55e-9,
  },
  sq_nanometer: {
    sq_meter: 1e-18,
    sq_kilometer: 1e-24,
    sq_centimeter: 1e-14,
    sq_millimeter: 1e-12,
    sq_micrometer: 1e-6,
    sq_nanometer: 1,
    sq_mile: 3.861e-25,
    sq_yard: 1.19599e-18,
    sq_foot: 1.07639e-17,
    sq_inch: 1.55e-15,
  },
  sq_mile: {
    sq_meter: 2.59e6,
    sq_kilometer: 2.59,
    sq_centimeter: 2.59e10,
    sq_millimeter: 2.59e12,
    sq_micrometer: 2.59e18,
    sq_nanometer: 2.59e24,
    sq_mile: 1,
    sq_yard: 3.098e6,
    sq_foot: 2.788e7,
    sq_inch: 4.014e9,
  },
  sq_yard: {
    sq_meter: 0.836127,
    sq_kilometer: 8.361e-7,
    sq_centimeter: 8361.27,
    sq_millimeter: 836127,
    sq_micrometer: 8.361e11,
    sq_nanometer: 8.361e17,
    sq_mile: 3.228e-7,
    sq_yard: 1,
    sq_foot: 9,
    sq_inch: 1296,
  },
  sq_foot: {
    sq_meter: 0.092903,
    sq_kilometer: 9.2903e-8,
    sq_centimeter: 929.03,
    sq_millimeter: 92903,
    sq_micrometer: 9.29e10,
    sq_nanometer: 9.29e16,
    sq_mile: 3.587e-8,
    sq_yard: 0.111111,
    sq_foot: 1,
    sq_inch: 144,
  },
  sq_inch: {
    sq_meter: 0.00064516,
    sq_kilometer: 6.4516e-10,
    sq_centimeter: 6.4516,
    sq_millimeter: 645.16,
    sq_micrometer: 6.4516e8,
    sq_nanometer: 6.4516e14,
    sq_mile: 2.491e-10,
    sq_yard: 0.000771605,
    sq_foot: 0.00694444,
    sq_inch: 1,
  },
};

const volumeConversionFactors = {
  cu_meter: {
    cu_meter: 1,
    cu_kilometer: 1e-9,
    cu_centimeter: 1e6,
    cu_millimeter: 1e9,
    cu_micrometer: 1e12,
    cu_nanometer: 1e18,
    cu_mile: 2.399127585e-10,
    cu_yard: 1.3079506193,
    cu_foot: 35.314666721,
    cu_inch: 61023.744095,
    liter: 1000,
    milliliter: 1e6,
    gallon_us: 264.1720523581,
    gallon_uk: 219.9692482991,
  },
  cu_kilometer: {
    cu_meter: 1e9,
    cu_kilometer: 1,
    cu_centimeter: 1e15,
    cu_millimeter: 1e18,
    cu_micrometer: 1e21,
    cu_nanometer: 1e27,
    cu_mile: 0.2399127585,
    cu_yard: 1307950.6193,
    cu_foot: 35314666.721,
    cu_inch: 61023744095,
    liter: 1e12,
    milliliter: 1e15,
    gallon_us: 264172052358.1,
    gallon_uk: 219969248299.1,
  },
  cu_centimeter: {
    cu_meter: 1e-6,
    cu_kilometer: 1e-15,
    cu_centimeter: 1,
    cu_millimeter: 1000,
    cu_micrometer: 1e9,
    cu_nanometer: 1e15,
    cu_mile: 2.399127585e-16,
    cu_yard: 1.3079506193e-6,
    cu_foot: 3.5314666721e-5,
    cu_inch: 0.0610237441,
    liter: 0.001,
    milliliter: 1,
    gallon_us: 0.0002641721,
    gallon_uk: 0.0002199692,
  },
  cu_millimeter: {
    cu_meter: 1e-9,
    cu_kilometer: 1e-18,
    cu_centimeter: 0.001,
    cu_millimeter: 1,
    cu_micrometer: 1e6,
    cu_nanometer: 1e12,
    cu_mile: 2.399127585e-19,
    cu_yard: 1.3079506193e-9,
    cu_foot: 3.5314666721e-8,
    cu_inch: 6.1023744095e-5,
    liter: 1e-6,
    milliliter: 0.001,
    gallon_us: 2.64172e-7,
    gallon_uk: 2.19969e-7,
  },
  liter: {
    cu_meter: 0.001,
    cu_kilometer: 1e-12,
    cu_centimeter: 1000,
    cu_millimeter: 1e6,
    cu_micrometer: 1e9,
    cu_nanometer: 1e15,
    cu_mile: 2.39913e-13,
    cu_yard: 0.001308,
    cu_foot: 0.0353147,
    cu_inch: 61.0237,
    liter: 1,
    milliliter: 1000,
    gallon_us: 0.264172,
    gallon_uk: 0.219969,
  },
  milliliter: {
    cu_meter: 1e-6,
    cu_kilometer: 1e-15,
    cu_centimeter: 1,
    cu_millimeter: 1000,
    cu_micrometer: 1e6,
    cu_nanometer: 1e12,
    cu_mile: 2.39913e-16,
    cu_yard: 1.30795e-6,
    cu_foot: 3.53147e-5,
    cu_inch: 0.0610237,
    liter: 0.001,
    milliliter: 1,
    gallon_us: 0.000264172,
    gallon_uk: 0.000219969,
  },
  gallon_us: {
    cu_meter: 0.00378541,
    cu_kilometer: 3.78541e-12,
    cu_centimeter: 3785.41,
    cu_millimeter: 3.78541e6,
    cu_micrometer: 3.78541e9,
    cu_nanometer: 3.78541e15,
    cu_mile: 9.08168e-13,
    cu_yard: 0.00495113,
    cu_foot: 0.133681,
    cu_inch: 231,
    liter: 3.78541,
    milliliter: 3785.41,
    gallon_us: 1,
    gallon_uk: 0.832674,
  },
  gallon_uk: {
    cu_meter: 0.00454609,
    cu_kilometer: 4.54609e-12,
    cu_centimeter: 4546.09,
    cu_millimeter: 4.54609e6,
    cu_micrometer: 4.54609e9,
    cu_nanometer: 4.54609e15,
    cu_mile: 1.09295e-12,
    cu_yard: 0.00594606,
    cu_foot: 0.160544,
    cu_inch: 277.419,
    liter: 4.54609,
    milliliter: 4546.09,
    gallon_us: 1.20095,
    gallon_uk: 1,
  },
  cu_inch: {
    cu_meter: 1.63871e-5,
    cu_kilometer: 1.63871e-14,
    cu_centimeter: 16.3871,
    cu_millimeter: 16387.1,
    cu_micrometer: 1.63871e10,
    cu_nanometer: 1.63871e16,
    cu_mile: 3.93147e-15,
    cu_yard: 2.14335e-5,
    cu_foot: 0.000578704,
    cu_inch: 1,
    liter: 0.0163871,
    milliliter: 16.3871,
    gallon_us: 0.004329,
    gallon_uk: 0.003605,
  },
  cu_foot: {
    cu_meter: 0.0283168,
    cu_kilometer: 2.83168e-11,
    cu_centimeter: 28316.8,
    cu_millimeter: 2.83168e7,
    cu_micrometer: 2.83168e13,
    cu_nanometer: 2.83168e19,
    cu_mile: 6.79357e-12,
    cu_yard: 0.037037,
    cu_foot: 1,
    cu_inch: 1728,
    liter: 28.3168,
    milliliter: 28316.8,
    gallon_us: 7.48052,
    gallon_uk: 6.22884,
  },
  cu_yard: {
    cu_meter: 0.764555,
    cu_kilometer: 7.64555e-10,
    cu_centimeter: 764555,
    cu_millimeter: 7.64555e8,
    cu_micrometer: 7.64555e14,
    cu_nanometer: 7.64555e20,
    cu_mile: 1.83427e-10,
    cu_yard: 1,
    cu_foot: 27,
    cu_inch: 46656,
    liter: 764.555,
    milliliter: 764555,
    gallon_us: 201.974,
    gallon_uk: 168.178,
  },
};

const massConversionFactors = {
  kilogram: {
    kilogram: 1,
    gram: 1000,
    milligram: 1000000,
    microgram: 1000000000,
    tonne: 0.001,
    ton: 0.001,
    pound: 2.20462,
    ounce: 35.274,
    stone: 0.157473,
    carat: 5000,
    grain: 15432.4,
    dram: 564.383
  },
  gram: {
    kilogram: 0.001,
    gram: 1,
    milligram: 1000,
    microgram: 1000000,
    tonne: 0.000001,
    ton: 0.000001,
    pound: 0.00220462,
    ounce: 0.035274,
    stone: 0.000157473,
    carat: 5,
    grain: 15.4324,
    dram: 0.564383
  },
  milligram: {
    kilogram: 0.000001,
    gram: 0.001,
    milligram: 1,
    microgram: 1000,
    tonne: 0.000000001,
    ton: 0.000000001,
    pound: 0.00000220462,
    ounce: 0.000035274,
    stone: 0.000000157473,
    carat: 0.005,
    grain: 0.0154324,
    dram: 0.000564383
  },
  microgram: {
    kilogram: 0.000000001,
    gram: 0.000001,
    milligram: 0.001,
    microgram: 1,
    tonne: 0.000000000001,
    ton: 0.000000000001,
    pound: 0.00000000220462,
    ounce: 0.000000035274,
    stone: 0.000000000157473,
    carat: 0.000005,
    grain: 0.0000154324,
    dram: 0.000000564383
  },
  tonne: {
    kilogram: 1000,
    gram: 1000000,
    milligram: 1000000000,
    microgram: 1000000000000,
    tonne: 1,
    ton: 1,
    pound: 2204.62,
    ounce: 35274,
    stone: 157.473,
    carat: 5000000,
    grain: 15432358.4,
    dram: 564383.39
  },
  ton: {
    kilogram: 1000,
    gram: 1000000,
    milligram: 1000000000,
    microgram: 1000000000000,
    tonne: 1,
    ton: 1,
    pound: 2204.62,
    ounce: 35274,
    stone: 157.473,
    carat: 5000000,
    grain: 15432358.4,
    dram: 564383.39
  },
  pound: {
    kilogram: 0.453592,
    gram: 453.592,
    milligram: 453592,
    microgram: 453592000,
    tonne: 0.000453592,
    ton: 0.000453592,
    pound: 1,
    ounce: 16,
    stone: 0.0714286,
    carat: 226.796,
    grain: 7000,
    dram: 256
  },
  ounce: {
    kilogram: 0.0283495,
    gram: 28.3495,
    milligram: 28349.5,
    microgram: 28349500,
    tonne: 0.0000283495,
    ton: 0.0000283495,
    pound: 0.0625,
    ounce: 1,
    stone: 0.00446429,
    carat: 141.748,
    grain: 437.5,
    dram: 16
  },
  stone: {
    kilogram: 6.35029,
    gram: 6350.29,
    milligram: 6350290,
    microgram: 6350290000,
    tonne: 0.00635029,
    ton: 0.00635029,
    pound: 14,
    ounce: 224,
    stone: 1,
    carat: 31751.5,
    grain: 98000,
    dram: 3584
  },
  carat: {
    kilogram: 0.0002,
    gram: 0.2,
    milligram: 200,
    microgram: 200000,
    tonne: 0.0000002,
    ton: 0.0000002,
    pound: 0.000440925,
    ounce: 0.00705479,
    stone: 0.0000314961,
    carat: 1,
    grain: 3.08647,
    dram: 0.112088
  },
  grain: {
    kilogram: 0.0000647989,
    gram: 0.0647989,
    milligram: 64.7989,
    microgram: 64798.9,
    tonne: 0.0000000647989,
    ton: 0.0000000647989,
    pound: 0.000142857,
    ounce: 0.00228571,
    stone: 0.0000102041,
    carat: 0.324,
    grain: 1,
    dram: 0.0365714
  },
  dram: {
    kilogram: 0.00177185,
    gram: 1.77185,
    milligram: 1771.85,
    microgram: 1771850,
    tonne: 0.00000177185,
    ton: 0.00000177185,
    pound: 0.00390625,
    ounce: 0.0625,
    stone: 0.000279,
    carat: 5.671,
    grain: 27.3437,
    dram: 1
  }
};

const timeConversionFactors = {
  second: {
    second: 1,
    minute: 1 / 60,
    hour: 1 / 3600,
    day: 1 / 86400,
    week: 1 / 604800,
    month: 1 / 2628000,
    year: 1 / 31536000
  },
  minute: {
    second: 60,
    minute: 1,
    hour: 1 / 60,
    day: 1 / 1440,
    week: 1 / 10080,
    month: 1 / 43800,
    year: 1 / 525600
  },
  hour: {
    second: 3600,
    minute: 60,
    hour: 1,
    day: 1 / 24,
    week: 1 / 168,
    month: 1 / 730,
    year: 1 / 8760
  },
  day: {
    second: 86400,
    minute: 1440,
    hour: 24,
    day: 1,
    week: 1 / 7,
    month: 1 / 30.44,
    year: 1 / 365
  },
  week: {
    second: 604800,
    minute: 10080,
    hour: 168,
    day: 7,
    week: 1,
    month: 1 / 4.345,
    year: 1 / 52.143
  },
  month: {
    second: 2628000,
    minute: 43800,
    hour: 730,
    day: 30.44,
    week: 4.345,
    month: 1,
    year: 1 / 12
  },
  year: {
    second: 31536000,
    minute: 525600,
    hour: 8760,
    day: 365,
    week: 52.143,
    month: 12,
    year: 1
  }

};


function tempUpdate() {
  let inputValue = parseFloat(sideOne.value);
  let temp_source = tempSource.value;
  let temp_output = tempOutput.value;
  let resultValue = parseFloat(sideTwo.value);

  if (temp_source === "celsius" && temp_output === "fahrenheit") {
    resultValue = (inputValue * 9) / 5 + 32;
  } else if (temp_source === "celsius" && temp_output === "kelvin") {
    resultValue = inputValue + 273.15;
  } else if (temp_source === "fahrenheit" && temp_output === "celsius") {
    resultValue = ((inputValue - 32) * 5) / 9;
  } else if (temp_source === "fahrenheit" && temp_output === "kelvin") {
    resultValue = ((inputValue - 32) * 1.8) + 273.15;
  } else if (temp_source === "kelvin" && temp_output === "celsius") {
    resultValue = inputValue - 273.15;
  } else if (temp_source === "kelvin" && temp_output === "fahrenheit") {
    resultValue = ((inputValue - 273.15) / 1.8) - 32;
  } else {
    resultValue = inputValue;
  }

  sideTwo.value = isNaN(resultValue) ? "" : resultValue.toFixed(2);
  
}


function updateResult() {
  let inputValue = parseFloat(inputBox.value);
  let inputCategoryVal = inputCategory.value;
  let resultCategoryVal = resultCategory.value;

  
    const conversionFactor = conversionFactors[inputCategoryVal][resultCategoryVal];
    resultBox.value = isNaN(inputValue) ? "" : (inputValue * conversionFactor).toFixed(2);
    
  

  
}


function areaUpdateResult() {
  let inputValue = parseFloat(areaInput.value);
  let inputCategoryVal = areaInputCategory.value;
  let resultCategoryVal = areaOutputCategory.value;

 
    const areaConversionFactor = areaConversionFactors[inputCategoryVal][resultCategoryVal];
    areaResult.value = isNaN(inputValue) ? "" : (inputValue * areaConversionFactor).toFixed(2);
    
  

  
}


function volumeUpdateResult() {
  const inputValue = parseFloat(volumeInputBox.value);
  const inputCategoryVal = volumeInputCategory.value;
  const resultCategoryVal = volumeResultCategory.value;

  
    const volumeConversionFactor = volumeConversionFactors[inputCategoryVal][resultCategoryVal];
    volumeResultBox.value = isNaN(inputValue) ? "" : (inputValue * volumeConversionFactor).toFixed(2);
    
}

function massUpdateResult() {
  let inputValue = parseFloat(massInputBox.value);
  let inputCategoryVal = massInputCategory.value;
  let resultCategoryVal = massResultCategory.value;

  const massConversionFactor = massConversionFactors[inputCategoryVal][resultCategoryVal];
  massResultBox.value = isNaN(inputValue) ? "" : (inputValue * massConversionFactor).toFixed(2);
}

function timeUpdateResult() {
  let inputValue = parseFloat(timeInputBox.value);
  let inputCategoryVal = timeInputCategory.value;
  let resultCategoryVal = timeResultCategory.value;

  const timeConversionFactor = timeConversionFactors[inputCategoryVal][resultCategoryVal];
  timeResultBox.value = isNaN(inputValue) ? "" : (inputValue * timeConversionFactor).toFixed(2);
}


function clearInput() {
  sideOne.value = "";
  sideTwo.value = "";
  inputBox.value = "";
  resultBox.value = "";
  areaInput.value = "";
  areaResult.value = "";
  volumeInputBox.value = "";
  volumeResultBox.value = "";
  massInputBox.value = "";
  massResultBox.value = "";
  timeInputBox.value = "";
  timeResultBox.value = "";
}

