const inputUnitSelect = document.getElementById("input-unit");
const inputValueInput = document.getElementById("input-value");
const outputUnitSelect = document.getElementById("output-unit");
const outputValueInput = document.getElementById("output-value");
const convertButton = document.getElementById("convert-button");

function convertUnit() {
  const inputUnit = inputUnitSelect.value;
  const inputValue = inputValueInput.value;
  const outputUnit = outputUnitSelect.value;

  let outputValue;
  if (inputUnit === "km") {
    if (outputUnit === "km") {
      outputValue = inputValue;
    } else if (outputUnit === "m") {
      outputValue = inputValue * 1000;
    } else if (outputUnit === "cm") {
      outputValue = inputValue * 100000;
    } else if (outputUnit === "mm") {
        outputValue = inputValue * 1000000;
    }else if (outputUnit === "mi") {
        outputValue = inputValue * 0.621371;
    }else if (outputUnit === "ft") {
        outputValue = inputValue * 3280.8399;
    }else if (outputUnit === "in") {
        outputValue = inputValue * 39370.0787;
    }
  } else if (inputUnit === "m") {
    if (outputUnit === "m") {
      outputValue = inputValue;
    } else if (outputUnit === "km") {
      outputValue = inputValue * 0.001;
    } else if (outputUnit === "cm") {
      outputValue = inputValue * 100;
    } else if (outputUnit === "mm") {
        outputValue = inputValue * 1000;
    }else if (outputUnit === "mi") {
        outputValue = inputValue * 0.00062137119;
    }else if (outputUnit === "ft") {
        outputValue = inputValue * 3.281;
    }else if (outputUnit === "in") {
        outputValue = inputValue * 39.37;
    }
  } else if (inputUnit === "cm") {
    if (outputUnit === "cm") {
      outputValue = inputValue;
    } else if (outputUnit === "km") {
      outputValue = inputValue * 0.00001;
    } else if (outputUnit === "m") {
      outputValue = inputValue * 0.01;
    } else if (outputUnit === "mm") {
        outputValue = inputValue * 10;
    }else if (outputUnit === "mi") {
        outputValue = inputValue * 0.0000062137;
    }else if (outputUnit === "ft") {
        outputValue = inputValue * 0.0328084;
    }else if (outputUnit === "in") {
        outputValue = inputValue * 0.3937;
    }
  } else if (inputUnit === "mm") {
    if (outputUnit === "mm") {
      outputValue = inputValue;
    } else if (outputUnit === "km") {
      outputValue = inputValue * 0.000001;
    } else if (outputUnit === "m") {
      outputValue = inputValue * 0.001;
    } else if (outputUnit === "cm") {
        outputValue = inputValue * 0.1;
    }else if (outputUnit === "mi") {
        outputValue = inputValue * 0.000000621371;
    }else if (outputUnit === "ft") {
        outputValue = inputValue * 0.00328084;
    }else if (outputUnit === "in") {
        outputValue = inputValue * 0.0393701;
    }
  } else if (inputUnit === "mi") {
    if (outputUnit === "mi") {
      outputValue = inputValue;
    } else if (outputUnit === "km") {
      outputValue = inputValue * 1.60934;
    } else if (outputUnit === "m") {
      outputValue = inputValue * 1609.34;
    } else if (outputUnit === "cm") {
        outputValue = inputValue * 160934.4;
    }else if (outputUnit === "mm") {
        outputValue = inputValue * 1609344;
    }else if (outputUnit === "ft") {
        outputValue = inputValue * 5280;
    }else if (outputUnit === "in") {
        outputValue = inputValue * 63360;
    }
  } else if (inputUnit === "ft") {
    if (outputUnit === "ft") {
      outputValue = inputValue;
    } else if (outputUnit === "km") {
      outputValue = inputValue * 0.0003048;
    } else if (outputUnit === "m") {
      outputValue = inputValue * 0.3048;
    } else if (outputUnit === "cm") {
        outputValue = inputValue * 30.48;
    }else if (outputUnit === "mm") {
        outputValue = inputValue * 304.8;
    }else if (outputUnit === "mi") {
        outputValue = inputValue * 0.000189394;
    }else if (outputUnit === "in") {
        outputValue = inputValue * 12;
    }
  } else if (inputUnit === "in") {
    if (outputUnit === "in") {
      outputValue = inputValue;
    } else if (outputUnit === "km") {
      outputValue = inputValue * 0.0000254;
    } else if (outputUnit === "m") {
      outputValue = inputValue * 0.0254;
    } else if (outputUnit === "cm") {
        outputValue = inputValue * 2.54;
    }else if (outputUnit === "mm") {
        outputValue = inputValue * 25.4;
    }else if (outputUnit === "mi") {
        outputValue = inputValue * 0.0000157828;
    }else if (outputUnit === "ft") {
        outputValue = inputValue * 0.0833333333;
    }
  }

  outputValueInput.value = outputValue;
}

convertButton.addEventListener("click", convertUnit);