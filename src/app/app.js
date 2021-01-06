import { convertBinaryToDecimal } from "./index.js";

const Elements = {
  $btnConvert: document.querySelector("#btn-convert"),
  $binaryNumber: document.querySelector("#input-binary-number"),
  $decimalNumber: document.querySelector("#text-decimal-number"),
};

const App = {
  init: () => {
    App.bindEvents();
    App.view.render();
  },
  bindEvents: () => {
    Elements.$btnConvert.addEventListener("click", function () {
      App.controller.convert();
    });
    Elements.$binaryNumber.addEventListener("keyup", function (event) {
      App.service.updateBinaryNumber(this.value);
    });
  },
};

App.model = {
  binaryNumber: null,
  decimalNumber: null,
};

App.service = {
  updateBinaryNumber: (newBinaryNumber) => {
    App.model.binaryNumber = newBinaryNumber;
  },
  updateDecimalNumber: (newDecimalNumber) => {
    App.model.decimalNumber = newDecimalNumber;
  },
};

App.view = {
  render: () => {
    Elements.$decimalNumber.innerHTML = App.model.decimalNumber;
  },
};

App.controller = {
  convert: () => {
    const decimalValue = convertBinaryToDecimal(App.model.binaryNumber);
    App.service.updateDecimalNumber(decimalValue);

    App.view.render();
  },
};

App.init();

export default App;
