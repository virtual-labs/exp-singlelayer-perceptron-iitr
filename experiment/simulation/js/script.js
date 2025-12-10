let gateSelectedBtn = document.getElementById("gate-selected-btn");
let compute = document.getElementById("compute");
let analyze = document.getElementById("analyze");
compute.disabled = true;
analyze.disabled = true;

compute.style.cursor = `not-allowed`;
analyze.style.cursor = `not-allowed`;
// analyze.style.cursor = `pointer`;
let controlInp = document.getElementById("control-inp");
var initialHide = document.getElementById("initial-hide");
var lrCount = 0;
var checkCount = 0;
var epochNum = document.querySelector(".epochNumber");
var tableNumber = 1;
epochNum.innerText = tableNumber;
var weightOneVal, weightTwoVal, biasVal;
var oldWeight1, oldWeight2, updatedWeight1, updatedWeight2, oldBias, newBias;
initialHide.style.display = "none";
let selectNumber = document.querySelector(".select-number");
let analyzeDiv = document.querySelector(".analyze-div");

let numberSelected = document.querySelector(".number-selected");
let forTwoInput = document.querySelector(".for-two-input");
// let forThreeInput = document.querySelector(".for-three-input");
let networkCanvaOne = document.querySelector(".network-canva-one");
let networkTab = document.querySelector(".network");

let secCon = document.querySelector(".sec-con");
let controlTab = document.querySelector(".control");
let secConSecRow = document.querySelector(".sec-con-sec-row");
let networkCanvaWithOneBall = document.querySelector("#network-canva-one");
let networkCanvaWithOneBallContext = networkCanvaWithOneBall.getContext("2d");
let networkCanvaTwo = document.querySelector(".network-canva-two");
let networkCanvaWithTwoBall = document.querySelector(
  ".network-canva-two-canva"
);
// let networkCanvaWithTwoBall = document.querySelector("#network-canva-two");
let networkCanvaWithTwoBallContext = networkCanvaWithTwoBall.getContext("2d");
let networkCanvaWithTwoBallAnalyze = document.querySelector(
  ".network-canva-analyze"
);
let networkCanvaWithTwoBallAnalyzeContext =
  networkCanvaWithTwoBallAnalyze.getContext("2d");
let networkCanvaThree = document.querySelector(".network-canva-three");
let networkCanvaWithThreeBall = document.querySelector("#network-canva-three");
let networkCanvaWithThreeBallContext =
  networkCanvaWithThreeBall.getContext("2d");
var observationTableOne = document.querySelector(".observation-table");
var observationTableTwo = document.querySelector(".observation-table-2");
var observationTableThree = document.querySelector(".observation-table-3");
var printBtn = document.querySelector(".print-btn");
var plotBtn = document.querySelector(".plot-btn");

printBtn.disabled = true;
plotBtn.addEventListener("click", () => {
  document.getElementById('network').innerHTML = 'TRAINED NETWORK';
  if (controlInp.value == "or") {
    alerts1('info', '', 'A single-layer classifier effectively categorizes OR logic gate data into two distinct classes.');
  }
  else {
    alerts1('info', '', 'A single-layer classifier effectively categorizes AND logic gate data into two distinct classes.');
  }
  printBtn.disabled = false;
  plotBtn.disabled = true;
});
var summantionInput;
var putInOne = true;
var putInTwo = false;
var putInThree = false;
var putInFour = false;
var putInFive = false;
var flag;
var one = "1";
var two = "2";
var zero = "0";
var x = "X";
var w = "w";
var x1 = x;
var x2 = x;
var w1 = w;
var w2 = w;
var w0 = w;
var bias = "B";
var summantion = "Σ";
var activation = "A";
var biasCenter = true;
var biasInput = document.querySelector("#bias");
var weightZero = document.querySelector("#weight-zero");
var weightOne = document.querySelector("#weight-one");
var weightTwo = document.querySelector("#weight-two");
var variableOne = document.querySelector("#variable-one");
var variableTwo = document.querySelector("#variable-two");
var rowCount = 0;
var generateWeight = document.querySelector("#generateWeight");
var submit = document.querySelector("#submit");
var reset = document.querySelector("#reset");
var check = document.querySelector("#check");
var update = document.querySelector("#update");
var graph = document.querySelector("#graph");
var button = document.querySelector("button");
var btns = document.querySelector(".btns");
var activationBtn = document.querySelector("#activation");
var andGatePic = document.querySelector(".and-gate-pic");
var orGatePic = document.querySelector(".or-gate-pic");
orGatePic.style.display = "none";
andGatePic.style.display = "none";

var summantionOne, summantionTwo, summantionThree, summantionFour;
var terminologyDiv = document.querySelector(".terminology");
var singleLevelPerceptron = document.querySelector("#single-level-perceptron");

var holllow = document.querySelector(".hollow");
var newWeightOneDiv = document.querySelector("#new-weight-one-div");
var newWeightOneValue = document.querySelector("#new-weight-one-value");
var newWeightTwoDiv = document.querySelector("#new-weight-two-div");
var newWeightTwoValue = document.querySelector("#new-weight-two-value");
var newBiasDiv = document.querySelector("#new-bias-div");
var newBiasValue = document.querySelector("#new-bias-value");
var oldWeightOne = document.querySelector("#old-weight-one");
var targetVal = document.querySelector("#target-one");
var actualVal = document.querySelector("#actual-one");
var inputOne = document.querySelector("#input-one");
var oldWeightTwo = document.querySelector("#old-weight-two");
var targetValTwo = document.querySelector("#target-two");
var actualValTwo = document.querySelector("#actual-two");
var inputTwo = document.querySelector("#input-two");
var oldBiasInput = document.querySelector("#old-bias");
var targetValThree = document.querySelector("#target-three");
var actualValThree = document.querySelector("#actual-three");
var showGraph = document.querySelector(".show-plot");
var showGraphBtn = document.querySelector(".show-graph-btn");
showGraph.style.display = "none";
showGraphBtn.addEventListener("click", () => {
  showGraph.style.display = "block";
});
var singleLPCount = 0;
var multiLPCount = 0;
var sNo = 0;
var rowNum = 1;
var computeNumber = 1;
var calculationDiv = document.querySelector(".calculation-div");
calculationDiv.style.display = "none";
singleLevelPerceptron.style.cursor = "pointer";
singleLevelPerceptron.addEventListener("click", () => {
  singleLPCount = singleLPCount + 1;
  multiLPCount = 0;
  if (singleLPCount == 1) {

    initialHide.style.display = "block";
    singleLevelPerceptron.style.color = "black";
    singleLevelPerceptron.style.backgroundColor = "#e0e0e0";
    document.getElementById('selectimg').src = 'images/select.png';
    document.getElementById('matter').style.display = 'none';
    document.querySelector('.container').style.backgroundImage = 'none';

    networkCanvaOne.style.display = "block";
    holllow.style.display = "none";
    terminologyDiv.style.display = "block";
    askGate();
  }

});


gateSelectedBtn.disabled = true;

function alerts1(icon, title, html) {
  Swal.fire({
    icon: icon,
    title: title,
    html: html,

    allowOutsideClick: false,
    customClass: {
      container: "swal-container",
      popup: "swal-popup",
      title: "swal-title",
      content: "swal-content",
    },
  });
}


controlInp.addEventListener("input", () => {
  gateSelectedBtn.disabled = false;

});
gateSelectedBtn.addEventListener("click", () => {
  alerts1('info', '', 'Now, click on <b>COMPUTE</b> tab to start your computation.');

  gateSelectedBtn.disabled = true;


  singleLevelPerceptron.disabled = true;
  singleLevelPerceptron.style.cursor = `not-allowed`;

  compute.disabled = false;
  compute.style.cursor = "pointer";

  selectNumber.style.display = "block";
  compute.addEventListener("click", () => {
    if (computeNumber == "1") {
      computeNumber = 2;
      networkCanvaTwo.style.display = "block";
      networkCanvaOne.style.display = "none";
      networkCanvaThree.style.display = "none";

      singleLevelPerceptron.style.color = "white";
      singleLevelPerceptron.style.backgroundColor = "#444648";

      document.getElementById('selectimg').src = 'images/select1.png';

      compute.style.color = "black";
      compute.style.backgroundColor = "#e0e0e0";
      document.getElementById('calimg').src = 'images/calculator.png';
      selectNumber.style.display = "none";
      numberSelected.style.display = "block";
      forTwoInput.style.display = "block";
      terminologyDiv.style.display = "none";
      secConSecRow.style.display = "block";
      if (controlInp.value == "and") {

        andGatePic.style.display = "block";
        document.getElementById("network-header").innerText = "AND NETWORK";
        const data = [
          { A: -1, B: -1, Y: -1 },
          { A: -1, B: 1, Y: -1 },
          { A: 1, B: -1, Y: -1 },
          { A: 1, B: 1, Y: 1 },
        ];

        // Separate data points for -1 and +1 outputs
        const dataMinus1 = data.filter((point) => point.Y === -1);
        const dataPlus1 = data.filter((point) => point.Y === 1);

        // Create traces for -1 and +1 outputs
        const traceMinus1 = {
          x: dataMinus1.map((point) => point.A),
          y: dataMinus1.map((point) => point.B),
          mode: "markers",
          type: "scatter",
          name: "Y -1",
          marker: { color: "blue" },
        };

        const tracePlus1 = {
          x: dataPlus1.map((point) => point.A),
          y: dataPlus1.map((point) => point.B),
          mode: "markers",
          type: "scatter",
          name: "Y +1",
          marker: { color: "red" },
        };

        // Create the line separating the points
        const line = {
          x: [-1, 1.2],
          y: [1.2, -1],
          mode: "lines",
          type: "scatter",
          name: "Separating Line",
          line: { color: "black", dash: "dash" },
        };

        // Layout for the graph
        const layout = {
          xaxis: { title: "X₁" },
          yaxis: { title: "X₂", autorange: "reversed" }, // Reverse Y-axis to match the observation table
          margin: { l: 60, r: 30, b: 60, t: 30 },
          legend: { x: 0.5, y: 1.15, orientation: "h" },
        };

        // Combine all traces
        const dataTraces = [traceMinus1, tracePlus1, line];

        // Plot the graph
        Plotly.newPlot("plot", dataTraces, layout, {
          displaylogo: false, // Set the displaylogo option to false to remove the logo from icons
        });
      }
      if (controlInp.value == "or") {

        orGatePic.style.display = "block";
        document.getElementById("network-header").innerText = "OR NETWORK";
        const plot = document.getElementById("plot");
        const data = [
          { A: -1, B: -1, Y: -1 },
          { A: -1, B: 1, Y: 1 },
          { A: 1, B: -1, Y: 1 },
          { A: 1, B: 1, Y: 1 },
        ];

        // Separate the data based on the output value
        const outputNegative = data.filter((item) => item.Y === -1);
        const outputPositive = data.filter((item) => item.Y === 1);

        // Create trace for negative output (-1) data points
        const traceNegative = {
          x: outputNegative.map((item) => item.A),
          y: outputNegative.map((item) => item.B),
          mode: "markers",
          type: "scatter",
          marker: {
            color: "blue", // Set the color for negative output (-1) points to blue
          },
          name: "Y: -1",
        };

        // Create trace for positive output (+1) data points
        const tracePositive = {
          x: outputPositive.map((item) => item.A),
          y: outputPositive.map((item) => item.B),
          mode: "markers",
          type: "scatter",
          marker: {
            color: "red", // Set the color for positive output (+1) points to red
          },
          name: "Y: +1",
        };

        // Create the line to separate the points
        const line = {
          type: "scatter",
          mode: "lines",
          x: [-1.2, 1.2], // X values of the line (A = -1 and A = 1)
          y: [1, -1.3], // Y values of the line (B = 1 and B = -1)
          line: {
            color: "black",
            width: 2,
          },
          name: "Separating Line",
        };

        // Combine traces
        const dataTrace = [traceNegative, tracePositive, line];

        // Set the layout
        const layout = {

          xaxis: {
            title: "X₁",
          },
          yaxis: {
            title: "X₂",
          },
          margin: { l: 60, r: 30, b: 60, t: 30 },
          legend: { x: 0.5, y: 1.15, orientation: "h" },
        };

        // Create the plot
        Plotly.newPlot("plot", dataTrace, layout, {
          displaylogo: false, // Set the displaylogo option to false to remove the logo from icons
        });
      }
    }
  });
});
async function askGate() {
  const { value: gate } = await Swal.fire({
    html: 'Select the GATE type and click on <b style="color:#FF6600">SUBMIT</b> button.',
    icon: "info",
    allowOutsideClick: false,
    customClass: {
      container: "swal-container",
      popup: "swal-popup",
      title: "swal-title",
      content: "swal-content",
    },
  });
  selectNumber.style.display = "block";
}

//reset
reset.addEventListener("click", () => {
  one = "1";
  two = "2";
  zero = "0";
  x = "X";
  w = "w";
  x1 = x;
  x2 = x;
  w1 = w;
  w2 = w;
  w0 = w;
  bias = "B";
  weightOne.value = "";
  weightTwo.value = "";
  biasInput.value = "";
  variableOne.value = "";
  variableTwo.value = "";
  tableNumber = 1;
  epochNum.innerText = tableNumber;
  updateOne = false;
  updateTwo = false;
  updateThree = false;
  updateFour = false;
  weightOneVal = "";
  weightTwoVal = "";
  biasVal = "";
  i = 1;
  weightOne.disabled = false;
  weightTwo.disabled = false;
  biasInput.disabled = false;
  console.log(newWeightOneDiv.style.display, newWeightOneValue.innerText);
  newWeightOneDiv.style.display = "block";
  newWeightOneValue.innerText = "";
  console.log(newWeightOneDiv.style.display, newWeightOneValue.innerText);
  newWeightTwoDiv.style.display = "block";
  newWeightTwoValue.innerText = "";
  newBiasDiv.style.display = "block";
  newBiasValue.innerText = "";
  oldWeightOne.value = "";
  targetVal.value = "";
  actualVal.value = "";
  inputOne.value = "";
  oldWeightTwo.value = "";
  targetValTwo.value = "";
  actualValTwo.value = "";
  inputTwo.value = "";
  oldBiasInput.value = "";
  targetValThree.value = "";
  actualValThree.value = "";
  oldWeightOne.disabled = false;
  targetVal.disabled = false;
  actualVal.disabled = false;
  inputOne.disabled = false;
  generateWeight.disabled = false;

  graph.disabled = false;

  activationRowOne = true;
  activationRowTwo = false;
  activationRowThree = false;
  activationRowFour = false;
  checkedOne = false;
  checkedTwo = false;
  checkedThree = false;
  checkedFour = false;

  checkedOneEqual = false;
  checkedTwoEqual = false;
  checkedThreeEqual = false;
  checkedFourEqual = false;
  reDrawCanva();
  lrCount = 0;
  calculationDiv.style.display = "none";

  if (putInOne) {
    for (let i = 0; i < sNo; i++) {
      table = document.getElementById("myTable");
      deleteLastRow();
    }
    sNo = 0;
  }
  activationBtn.disabled = true;
  update.disabled = true;
  check.disabled = true;
  submit.disabled = false;
  //generateWeight.disabled = false;
  secConSecRow.style.display = "block";
  selectNumber.style.display = "none";
});

//submit
submit.addEventListener("click", () => {
  if (

    variableOne.value == "" ||
    variableTwo.value == ""

  ) {
    alerts1('error', 'An input value is missing!!!', 'Please select the value for both <b>X<sub>1</sub></b> and <b>X<sub>2</sub></b>.');

  } else if (weightOne.value == "" ||
    weightTwo.value == "" || biasInput.value == "") {
    alerts1('error', 'First, initialize weight and bias.', 'Begin by clicking <b style="color:#FF6600">Generate Weight & Bias</b>, and then proceed to click the <b style="color:#FF6600">SUBMIT</b> button.');

  } else {

    (w1 = weightOne.value),
      (w2 = weightTwo.value),
      (x1 = variableOne.value),
      (x2 = variableTwo.value),
      (bias = biasInput.value);
    one = "";
    zero = "";
    two = "";
    biasCenter = false;
    reDrawCanva();
    weightOneVal = w1;
    weightTwoVal = w2;
    biasVal = bias;

    alerts1('info', '', 'Now, click on <b>Y<sub>in</sub></b> cell of the current row and enter the value.');

    submit.disabled = true;
    addRow();

    if (rowCount == 4) {
      submit.disabled = true;
    }
  }
});
//check
var checkedOne, checkedTwo, checkedThree, checkedFour;
checkedOne = false;
checkedTwo = false;
checkedThree = false;
checkedFour = false;
var checkedOneEqual, checkedTwoEqual, checkedThreeEqual, checkedFourEqual;
checkedOneEqual = false;
checkedTwoEqual = false;
checkedThreeEqual = false;
checkedFourEqual = false;
const learningRate = document.getElementsByClassName("learning-rate");
var learningValue;


var updateOne, updateTwo, updateThree, updateFour;
updateOne = false;
updateTwo = false;
updateThree = false;
updateFour = false;
var table;
var checkNumber = 0;
check.addEventListener("click", () => {
  if (putInOne) {
    table = document.getElementById("myTable");
    partOfCheck();
  }
  var table = document.getElementById("myTable");
  var rowCount = table.rows.length;
  var matchedColumns = 0;
  for (var i = 1; i < rowCount; i++) {
    var row = table.rows[i];
    var cells = row.cells;

    var t = Number(cells[3].innerHTML);

    var a = Number(cells[5].innerHTML);
    if (t == a) {
      matchedColumns = matchedColumns + 1;
    }
  }
  console.log(matchedColumns, rowNum);
  if (matchedColumns == 4) {
    alerts1('success', 'Your Epoch has successfully executed.', 'Now, click on <b>ANALYZE</b> tab.');

    analyze.style.cursor = "pointer";

    graph.disabled = true;
    analyze.addEventListener("click", () => {
      secCon.style.display = "none";

      document.getElementById('calimg').src = "images/calculator1.png";
      compute.style.color = "white";
      compute.style.backgroundColor = "#444648";
      analyze.style.color = "black";
      analyze.style.backgroundColor = "#e0e0e0";
      document.getElementById('anaimg').src = "images/slp.png";
      analyzeDiv.style.display = "block";
      compute.disabled = true;
      compute.style.cursor = "not-allowed";
      singleLevelPerceptron.disabled = true;
    });
  }
  if (putInTwo) {
    table = document.getElementById("myTable2");
    partOfCheck();
  }
});
var analyzeOT = [];
function partOfCheck() {
  var rowCount = table.rows.length;

  for (var i = 1; i < rowCount; i++) {
    // console.log(table);
    var row = table.rows[i];
    // console.log(row);
    var cells = row.cells;
    var x1 = Number(cells[1].innerHTML);
    var x2 = Number(cells[2].innerHTML);
    var w1 = Number(weightOneVal);
    var w2 = Number(weightTwoVal);

    var b = Number(biasVal);
    var t = Number(cells[3].innerHTML);
    var s = Number(cells[4].innerHTML);
    var a = Number(cells[5].innerHTML);
    if (!checkedOne) {
      if (t !== a && i == 1) {
        checkedOne = true;
        analyzeOT = [];
        console.log(analyzeOT);

        alerts1('error', 'T != Y', 'Now, click the <b style="color:#FF6600">UPDATE</b> button to update the values for <b>W₁</b>, <b>W₂</b> and <b>b</b>.');

        cells[3].style.border = "2px solid red";
        cells[5].style.border = "2px solid red";
        update.disabled = false;

        console.log(i, "checked fro !=");
        break;
      }
    }
    if (!checkedTwo) {
      if (t !== a && i == 2) {
        checkedTwo = true;
        analyzeOT = [];
        console.log(analyzeOT);

        alerts1('error', 'T != Y', 'Now, click the <b style="color:#FF6600">UPDATE</b> button to update the values for <b>W₁</b>, <b>W₂</b> and <b>b</b>.');
        cells[3].style.border = "2px solid red";
        cells[5].style.border = "2px solid red";
        update.disabled = false;

        console.log(i, "checked fro !=");
        break;
      }
    }
    if (!checkedThree) {
      if (t !== a && i == 3) {
        checkedThree = true;
        analyzeOT = [];
        console.log(analyzeOT);
        alerts1('error', 'T != Y', 'Now, click the <b style="color:#FF6600">UPDATE</b> button to update the values for <b>W₁</b>, <b>W₂</b> and <b>b</b>.');
        cells[3].style.border = "2px solid red";
        cells[5].style.border = "2px solid red";
        update.disabled = false;

        console.log(i, "checked fro !=");
        break;
      }
    }
    if (!checkedFour) {
      if (t !== a && i == 4) {
        checkedFour = true;
        analyzeOT = [];
        console.log(analyzeOT);
        alerts1('error', 'T != Y', 'Now, click the <b style="color:#FF6600">UPDATE</b> button to update the values for <b>W₁</b>, <b>W₂</b> and <b>b</b>.');
        cells[3].style.border = "2px solid red ";
        cells[5].style.border = "2px solid red";
        update.disabled = false;

        updateOne = false;
        updateTwo = false;
        updateThree = false;
        updateFour = false;
        checkedOneEqual = false;
        checkedTwoEqual = false;
        checkedThreeEqual = false;
        checkedFourEqual = false;
        checkedOne = false;
        checkedTwo = false;
        checkedThree = false;
        checkedFour = false;
        console.log(i, "checked fro !=");
        break;
      }
    }

    if (!checkedOneEqual) {
      if (t == a && i == 1) {
        checkedOneEqual = true;
        rowNum = rowNum + 1;
        checkNumber = checkNumber + 1;
        console.log(i, rowNum, checkNumber);
        alerts1('success', 'T == Y', 'Now, select a different combination for <b>X<sub>1</sub></b> and <b>X<sub>2</sub></b> and click on <b style="color:#FF6600">SUBMIT</b> button.');

        console.log(b, learningValue, t, a);
        cells[3].style.border = "2px solid green";
        cells[5].style.border = "2px solid green";
        cells[6].innerHTML = 0;
        cells[7].innerHTML = 0;
        cells[8].innerHTML = 0;
        cells[9].innerHTML = weightOneVal;
        cells[10].innerHTML = weightTwoVal;
        cells[11].innerHTML = biasVal;
        weightOne.value = weightOneVal;
        weightTwo.value = weightTwoVal;
        biasInput.value = biasVal;
        activationBtn.disabled = true;
        check.disabled = true;
        update.disabled = true;
        submit.disabled = false;

        analyzeOT.push({
          sno: cells[0].innerHTML,
          x1: cells[1].innerHTML,
          x2: cells[2].innerHTML,
          yin: cells[4].innerHTML || "",
          t: cells[3].innerHTML,
          y: cells[5].innerHTML,
          dw1: cells[6].innerHTML,
          dw2: cells[7].innerHTML,
          db: cells[8].innerHTML,
          nw1: cells[9].innerHTML,
          nw2: cells[10].innerHTML,
          nb: cells[11].innerHTML,
        });
        console.log(analyzeOT);
        console.log(i, "checked fro =");
      }
    }
    if (!checkedTwoEqual) {
      if (t == a && i == 2) {
        checkedTwoEqual = true;
        rowNum = rowNum + 1;
        checkNumber = checkNumber + 1;
        console.log(i, rowNum, checkNumber);
        alerts1('success', 'T == Y', 'Now, select a different combination for <b>X<sub>1</sub></b> and <b>X<sub>2</sub></b> and click on <b style="color:#FF6600">SUBMIT</b> button.');

        cells[3].style.border = "2px solid green";
        cells[5].style.border = "2px solid green";
        cells[6].innerHTML = 0;
        cells[7].innerHTML = 0;
        cells[8].innerHTML = 0;
        cells[9].innerHTML = w1;
        cells[10].innerHTML = w2;
        cells[11].innerHTML = b;
        weightOne.value = Number(w1);
        weightTwo.value = Number(w2);
        biasInput.value = Number(b);
        activationBtn.disabled = true;
        check.disabled = true;
        update.disabled = true;
        submit.disabled = false;

        analyzeOT.push({
          sno: cells[0].innerHTML,
          x1: cells[1].innerHTML,
          x2: cells[2].innerHTML,
          yin: cells[4].innerHTML || "",
          t: cells[3].innerHTML,
          y: cells[5].innerHTML,
          dw1: cells[6].innerHTML,
          dw2: cells[7].innerHTML,
          db: cells[8].innerHTML,
          nw1: cells[9].innerHTML,
          nw2: cells[10].innerHTML,
          nb: cells[11].innerHTML,
        });
        console.log(analyzeOT);
        console.log(i, "checked fro =");
      }
    }
    if (!checkedThreeEqual) {
      if (t == a && i == 3) {
        checkedThreeEqual = true;
        rowNum = rowNum + 1;
        checkNumber = checkNumber + 1;
        console.log(i, rowNum, checkNumber);
        alerts1('success', 'T == Y', 'Now, select a different combination for <b>X<sub>1</sub></b> and <b>X<sub>2</sub></b> and click on <b style="color:#FF6600">SUBMIT</b> button.');


        console.log(b, learningValue, t, a);

        cells[3].style.border = "2px solid green";
        cells[5].style.border = "2px solid green";
        cells[6].innerHTML = 0;
        cells[7].innerHTML = 0;
        cells[8].innerHTML = 0;
        cells[9].innerHTML = w1;
        cells[10].innerHTML = w2;
        cells[11].innerHTML = b;
        weightOne.value = Number(w1);
        weightTwo.value = Number(w2);
        biasInput.value = Number(b);
        activationBtn.disabled = true;
        check.disabled = true;
        update.disabled = true;
        submit.disabled = false;

        analyzeOT.push({
          sno: cells[0].innerHTML,
          x1: cells[1].innerHTML,
          yin: cells[4].innerHTML || "",
          x2: cells[2].innerHTML,
          t: cells[3].innerHTML,
          y: cells[5].innerHTML,
          dw1: cells[6].innerHTML,
          dw2: cells[7].innerHTML,
          db: cells[8].innerHTML,
          nw1: cells[9].innerHTML,
          nw2: cells[10].innerHTML,
          nb: cells[11].innerHTML,
        });
        console.log(analyzeOT);
        console.log(i, "checked fro =");
      }
    }
    if (!checkedFourEqual) {
      if (t == a && i == 4) {
        checkedFourEqual = true;
        rowNum = 1;
        checkNumber = checkNumber + 1;
        console.log(i, rowNum, checkNumber);
        submit.disabled = true;
        alerts1('success', 'T == Y', 'This epoch has been completed.<br>Now, click on <b style="color:#FF6600">NEXT</b> button to run another epoch.');

        cells[3].style.border = "2px solid green";
        cells[5].style.border = "2px solid green";
        cells[6].innerHTML = 0;
        cells[7].innerHTML = 0;
        cells[8].innerHTML = 0;
        cells[9].innerHTML = w1;
        cells[10].innerHTML = w2;
        cells[11].innerHTML = b;
        weightOne.value = Number(w1);
        weightTwo.value = Number(w2);
        biasInput.value = Number(b);
        graph.disabled = false;
        check.disabled = true;

        analyzeOT.push({
          sno: cells[0].innerHTML,
          x1: cells[1].innerHTML,
          x2: cells[2].innerHTML,
          t: cells[3].innerHTML,
          yin: cells[4].innerHTML || "",
          y: cells[5].innerHTML,
          dw1: cells[6].innerHTML,
          dw2: cells[7].innerHTML,
          db: cells[8].innerHTML,
          nw1: cells[9].innerHTML,
          nw2: cells[10].innerHTML,
          nb: cells[11].innerHTML,
        });

        console.log(analyzeOT, analyzeOT.length);
        if (analyzeOT.length < 4) {
          analyzeOT = [];
        }
        console.log(analyzeOT);
        showAnalyzeTable();
        analyzeCanva();
        console.log(i, "checked fro =");
      }
    }
  }

  check.disabled = true;

}

// update
// update.addEventListener("click", () => { 
//   lrCount = lrCount + 1;
//   checkCount = checkCount + 1;
//   if (lrCount == 1) {
//     Swal.fire({
//       title: "Initialize learning rate",
//       input: "text",
//       allowOutsideClick: false,
//       confirmButtonText: "SUBMIT",
//       inputLabel: "*Hint : It should be in between 0 and 1",
//       customClass: {
//         container: "swal-container",
//         popup: "swal-popup",
//         title: "swal-title",
//         content: "swal-content",
//     },
// showCancelButton: true,
//       inputValidator: (value) => {
//         if (!value) {
//           return "You need to write something!";
//         } else if (value >= 0 && value <= 1) {
//           learningRate[0].innerHTML = Number(value).toFixed(2);
//           learningRate[1].innerHTML = Number(value).toFixed(2);
//           learningRate[2].innerHTML = Number(value).toFixed(2);

// alerts1('info','','Now, enter the required values (from the table and network) in the CALCULATION section and click the <b style="color:#FF6600">SUBMIT</b> button.')
//           learningValue = Number(value).toFixed(2);
//         } else {
//           return "Please fill the float value between 0 and 1";
//         }
//       },
//     });
//   }
//  else{
//   alerts1('info','','Now, enter the required values (from the table and network) in the CALCULATION section and click the <b style="color:#FF6600">SUBMIT</b> button.')
//  }
//   if (putInOne) {
//     table = document.getElementById("myTable");
//     console.log("working");
//     partOfUpdate();
//     console.log("working two");  
//   }
//   if (putInTwo) {
//     table = document.getElementById("myTable2");
//     partOfUpdate();

//   }
// });



update.addEventListener("click", () => {
  lrCount = lrCount + 1;
  checkCount = checkCount + 1;

  if (lrCount == 1) {

    Swal.fire({
      title: "Initialize learning rate",
      input: "text",
      allowOutsideClick: false,
      confirmButtonText: "SUBMIT",
      inputLabel: "*Hint : It should be in between 0 and 1",
      customClass: {
        container: "swal-container",
        popup: "swal-popup",
        title: "swal-title",
        content: "swal-content",
      },

      inputValidator: (value) => {
        if (!value) {
          return "You need to write something!";
        } else if (value >0  && value <= 1) {

          learningRate[0].innerHTML = Number(value).toFixed(2);
          learningRate[1].innerHTML = Number(value).toFixed(2);
          learningRate[2].innerHTML = Number(value).toFixed(2);
          learningValue = Number(value).toFixed(2);

          alerts1(
            "info",
            "",
            "Now, enter the required values (from the table and network) in the CALCULATION section and click the <b style='color:#FF6600'>SUBMIT</b> button."
          );

          // ⭐ NEW ALERT YOU REQUESTED
          alerts1(
            "info",
            "",
            "Now click on <b style='color:#FF6600'>W1(old), W2(old), Bias(old)</b> to auto-fill them."
          );

        } else {
          return "Please fill the float value between 0 and 1";
        }
      },
    });

  } else {

    alerts1(
      "info",
      "",
      "Now, enter the required values in CALCULATION section and click <b style='color:#FF6600'>SUBMIT</b>."
    );

    // ⭐ NEW ALERT YOU REQUESTED
    alerts1(
      "info",
      "",
      "Now enter <b>x1</b>, <b>x2</b>, <b>T</b>, <b>Y</b> values."
    );
  }



  // -------------------------------
  // CALL update operation
  // -------------------------------
  if (putInOne) {
    table = document.getElementById("myTable");
    partOfUpdate();
  }

  if (putInTwo) {
    table = document.getElementById("myTable2");
    partOfUpdate();
  }
});


///////////
///////
////
///

function partOfUpdate() {
  console.log("partOfUpdate called");
  try { update.disabled = true; } catch (e) { }
  var row = table.rows[rowNum];
  var cells = row.cells;
  // Read current row values
  var x1 = Number(cells[1].innerHTML);
  var x2 = Number(cells[2].innerHTML);
  var t = Number(cells[3].innerHTML);
  var yin = Number(cells[4].innerHTML);
  var a = Number(cells[5].innerHTML);
  // Current weights/bias from your inputs/state
  var w1 = Number(weightOneVal);
  var w2 = Number(weightTwoVal);
  var b = Number(biasVal);

  if (t === a) {
    console.log("T === A : skipping update for this row");
    try {
      cells[3].style.border = "2px solid green";
      cells[5].style.border = "2px solid green";
      cells[6].innerHTML = 0;
      cells[7].innerHTML = 0;
      cells[8].innerHTML = 0;
      cells[9].innerHTML = w1.toFixed(2);
      cells[10].innerHTML = w2.toFixed(2);
      cells[11].innerHTML = b.toFixed(2);
    } catch (e) { }
    try { calculationDiv.style.display = "none"; } catch (e) { }
    rowNum++;
    if (rowNum > 4) {
      try { graph.disabled = true; graph.style.cursor = "not-allowed"; } catch (e) { }
      try { analyze.disabled = false; analyze.style.cursor = "pointer"; } catch (e) { }
      try { submit.disabled = true; } catch (e) { }
      alerts1("success", "Training Completed", "All 4 inputs processed.<br>You can now click <b>ANALYZE</b>.");
    } else {
      try { submit.disabled = false; } catch (e) { }
    }
    return;
  }

  // -------------------------------
  // PREPARE CALCULATION PANEL (AUTO-FILL OLD VALUES)
  // -------------------------------
  var submitNewWeight = document.querySelector("#calculate-new-weight");

  var oldWeightOne = document.querySelector("#old-weight-one");
  var targetVal = document.querySelector("#target-one");
  var inputOne = document.querySelector("#input-one");
  var actualValInput = document.querySelector("#actual-one");

  var oldWeightTwo = document.querySelector("#old-weight-two");
  var targetValTwo = document.querySelector("#target-two");
  var inputTwo = document.querySelector("#input-two");
  var actualValTwo = document.querySelector("#actual-two");

  var oldBiasInput = document.querySelector("#old-bias");
  var targetValThree = document.querySelector("#target-three");
  var actualValThree = document.querySelector("#actual-three");

  var newWeightOneDiv = document.querySelector("#new-weight-one-div");
  var newWeightOneValue = document.querySelector("#new-weight-one-value");
  var newWeightTwoDiv = document.querySelector("#new-weight-two-div");
  var newWeightTwoValue = document.querySelector("#new-weight-two-value");
  var newBiasDiv = document.querySelector("#new-bias-div");
  var newBiasValue = document.querySelector("#new-bias-value");

  try { calculationDiv.style.display = "block"; } catch (e) { }

  // --- AUTO-FILL AND SET READONLY ---
  try {
    // old weights/bias
    oldWeightOne.value = w1; oldWeightOne.readOnly = true;
    oldWeightTwo.value = w2; oldWeightTwo.readOnly = true;
    oldBiasInput.value = b; oldBiasInput.readOnly = true;

    // target values
    targetVal.value = t; targetVal.readOnly = true;
    targetValTwo.value = t; targetValTwo.readOnly = true;
    targetValThree.value = t; targetValThree.readOnly = true;

    // actual outputs
    if (actualValInput) { actualValInput.value = a; actualValInput.readOnly = true; }
    if (actualValTwo) { actualValTwo.value = a; actualValTwo.readOnly = true; }
    if (actualValThree) { actualValThree.value = a; actualValThree.readOnly = true; }

    // inputs
    inputOne.value = x1; inputOne.readOnly = true;
    inputTwo.value = x2; inputTwo.readOnly = true;

    // Reset new-value displays
    if (newWeightOneDiv) newWeightOneDiv.style.display = "block";
    if (newWeightTwoDiv) newWeightTwoDiv.style.display = "block";
    if (newBiasDiv) newBiasDiv.style.display = "block";

    newWeightOneValue.innerText = "—";
    newWeightTwoValue.innerText = "—";
    newBiasValue.innerText = "—";
  } catch (e) { console.warn("auto-fill failed:", e); }

  var step = 1;
  var updatedW1 = w1, updatedW2 = w2, updatedB = b;

  if (submitNewWeight) {
    submitNewWeight.onclick = function handleCalc() {
      if (step === 1) {
        var deltaW1 = learningValue * (t - a) * x1;
        updatedW1 = Number((w1 + deltaW1).toFixed(6));
        try { cells[6].innerHTML = deltaW1.toFixed(2); cells[9].innerHTML = updatedW1.toFixed(2); } catch (e) { }
        try { newWeightOneValue.innerText = updatedW1.toFixed(2); newWeightOneDiv.classList.add("step-done"); } catch (e) { }
        step = 2; alerts1('info', '', 'W₁ updated. Now update W₂ by clicking SUBMIT again.'); return;
      }
      if (step === 2) {
        var deltaW2 = learningValue * (t - a) * x2;
        updatedW2 = Number((w2 + deltaW2).toFixed(6));
        try { cells[7].innerHTML = deltaW2.toFixed(2); cells[10].innerHTML = updatedW2.toFixed(2); } catch (e) { }
        try { newWeightTwoValue.innerText = updatedW2.toFixed(2); newWeightTwoDiv.classList.add("step-done"); } catch (e) { }
        step = 3; alerts1('info', '', 'W₂ updated. Now update bias by clicking SUBMIT again.'); return;
      }
      if (step === 3) {
        var deltaB = learningValue * (t - a);
        updatedB = Number((b + deltaB).toFixed(6));
        try { cells[8].innerHTML = deltaB.toFixed(2); cells[11].innerHTML = updatedB.toFixed(2); } catch (e) { }
        try { newBiasValue.innerText = updatedB.toFixed(2); newBiasDiv.classList.add("step-done"); } catch (e) { }

        var newYin = Number((x1 * updatedW1 + x2 * updatedW2 + updatedB).toFixed(6));
        var newA = newYin >= 0 ? 1 : -1;
        try { cells[4].innerHTML = newYin.toFixed(2); cells[5].innerHTML = newA; } catch (e) { }
        try { calculationDiv.style.display = "none"; } catch (e) { }

        try {
          weightOne.value = updatedW1.toFixed(2);
          weightTwo.value = updatedW2.toFixed(2);
          biasInput.value = updatedB.toFixed(2);
          weightOneVal = updatedW1.toFixed(2);
          weightTwoVal = updatedW2.toFixed(2);
          biasVal = updatedB.toFixed(2);
        } catch (e) { }

        if (rowNum == 4) {
          try { graph.disabled = true; graph.style.cursor = "not-allowed"; } catch (e) { }
          try { analyze.disabled = false; analyze.style.cursor = "pointer"; } catch (e) { }
          try { submit.disabled = true; } catch (e) { }
          alerts1('success', 'Training Complete', 'All 4 steps completed.<br>You can now click <b>ANALYZE</b>.');
        } else {
          alerts1('info', '', 'Step complete. Select next input pair and click SUBMIT to proceed.');
          try { submit.disabled = false; } catch (e) { }
        }

        rowNum++; step = 1;
        return;
      }
    };
  }

  try {
    var headerText = "For " + (rowNum === 1 ? "1<sup>st</sup>" :
      rowNum === 2 ? "2<sup>nd</sup>" :
        rowNum === 3 ? "3<sup>rd</sup>" : "4<sup>th</sup>");
    document.querySelector(".calculation-header").innerHTML = headerText;
  } catch (e) { }

  try { check.disabled = true; activationBtn.disabled = true; } catch (e) { }
}




//end//
///////


//next
graph.addEventListener("click", () => {
  if (putInOne) {
    for (let i = 0; i < sNo; i++) {
      table = document.getElementById("myTable");
      deleteLastRow();
    }
  }
  tableNumber = tableNumber + 1;
  epochNum.innerText = tableNumber;
  weightOneVal = "";
  weightTwoVal = "";
  biasVal = "";
  putInOne = true;

  activationBtn.disabled = true;
  check.disabled = true;
  update.disabled = true;
  checkedOne = false;
  checkedTwo = false;
  checkedThree = false;
  checkedFour = false;
  // var checkedOneEqual, checkedTwoEqual, checkedThreeEqual, checkedFourEqual;
  checkedOneEqual = false;
  checkedTwoEqual = false;
  checkedThreeEqual = false;
  checkedFourEqual = false;
  submit.disabled = false;


  updateOne = false;
  updateTwo = false;
  updateThree = false;
  updateFour = false;
  checkedOneEqual = false;
  checkedTwoEqual = false;
  checkedThreeEqual = false;
  checkedFourEqual = false;
  checkedOne = false;
  checkedTwo = false;
  checkedThree = false;
  checkedFour = false;
  activationRowOne = true;
  activationRowTwo = false;
  activationRowThree = false;
  activationRowFour = false;
  sNo = 0;
  rowNum = 1;

  graph.disabled = true;

});
// Predefined values (you can edit these)
const predefinedWeights_AND = [
  { w1: 0.38, w2: 0.65, b: 0.57 },//0.15
  { w1: 0.86, w2: 0.57, b: 0.3 },//0.1
  { w1: 0.6, w2: 0.7, b: 0.27 },//0.1
  { w1: 0.03, w2: 0.01, b: 0.05 },//0.1
  { w1: 0.38, w2: 0.65, b: 0.57 },//0.5
];
const predefinedWeights_OR = [
  { w1: 0.79, w2: 0.7, b: 0.09 },//0.15
  //{ w1: 0.37, w2: 0.08, b: 0.33 },//0.1
  //{ w1: 0.28, w2: 0.56, b: 0.45 },//0.1
  //{ w1: 0.35, w2: 0.71, b: 0.92 },//0.1
  //{ w1: 0.2, w2: 0.15, b: 0.09 },//0.5
];
//generate
generateWeight.addEventListener("click", () => {

  if (controlInp.value == "and") {
    // pick a random set from predefined table
    const randomIndex = Math.floor(Math.random() * predefinedWeights_AND.length);
    const selected = predefinedWeights_AND[randomIndex];

    // assign selected weight & bias values
    weightOne.value = selected.w1;
    weightTwo.value = selected.w2;
    biasInput.value = selected.b;
  }
  else {
    // pick a random set from predefined table
    const randomIndex = Math.floor(Math.random() * predefinedWeights_OR.length);
    const selected = predefinedWeights_OR[randomIndex];

    // assign selected weight & bias values
    weightOne.value = selected.w1;
    weightTwo.value = selected.w2;
    biasInput.value = selected.b;

  }

    weightOne.disabled = true;
    weightTwo.disabled = true;
    biasInput.disabled = true;
    generateWeight.disabled = true;

});
//activation
var activeOne, activeTwo, activeThree, activeFour;
(activeOne = false),
  (activeTwo = false),
  (activeThree = false),
  (activeFour = false);
activationBtn.addEventListener("click", () => {
  if (putInOne) {
    table = document.getElementById("myTable");
    partOfActivation();
  }

});
var activationRowOne, activationRowTwo, activationRowThree, activationRowFour;
activationRowOne = true;
activationRowTwo = false;
activationRowThree = false;
activationRowFour = false;

function partOfActivation() {
  check.disabled = false;

  var rowCount = table.rows.length;
  console.log(rowCount);

  for (var i = 1; i < rowCount; i++) {
    if (i == 1) {
      if (activationRowOne) {
        var row = table.rows[i];
        var cells = row.cells;
        var x1 = parseInt(cells[1].innerHTML);
        var x2 = parseInt(cells[2].innerHTML);
        var b = Number(cells[5].innerHTML);
        var w1 = Number(weightOneVal);
        var w2 = Number(weightTwoVal);
        var b = Number(biasVal);
        var sum = x1 * w1 + x2 * w2 + b;
        console.log(x1, x2, w1, w2, b, sum);

        var threshold = 0;
        if (sum < threshold) {
          Swal.fire({
            title: "Here, the threshold value is set to 0 for the step activation function.",
            confirmButtonText: "OK",
            allowOutsideClick: false,
            html: `<img src="images/activationformulae.png"> <br><br> Now, click on <b style="color:#FF6600">CHECK</b> button.`,
            showCancelButton: false,
            customClass: {
              container: "swal-container",
              popup: "swal-popup",
              title: "swal-title",
              content: "swal-content",
            },
          });
          cells[5].innerHTML = -1;
        }
        if (sum > threshold) {
          Swal.fire({
            title: "Here, the threshold value is set to 0 for the step activation function.",
            confirmButtonText: "OK",
            allowOutsideClick: false,
            //imageUrl: 'activation.png',
            html: `<img src="images/activationformulae.png"> <br><br> Now, click on <b style="color:#FF6600">CHECK</b> button.`,
            showCancelButton: false,
            customClass: {
              container: "swal-container",
              popup: "swal-popup",
              title: "swal-title",
              content: "swal-content",
            },
          });
          cells[5].innerHTML = 1;
        }
        if (sum == 0) {
          Swal.fire({
            title: "Here, the threshold value is set to 0 for the step activation function.",
            confirmButtonText: "OK",
            allowOutsideClick: false,
            html: `<img src="images/activationformulae.png"> <br><br> Now, click on <b style="color:#FF6600">CHECK</b> button.`,
            showCancelButton: false,
            customClass: {
              container: "swal-container",
              popup: "swal-popup",
              title: "swal-title",
              content: "swal-content",
            },
          });
          cells[5].innerHTML = 0;
        }
        activationRowOne = false;
        activationRowTwo = true;
      }
    }
    if (i == 2) {
      if (activationRowTwo) {
        var row = table.rows[i];
        var cells = row.cells;
        var x1 = parseInt(cells[1].innerHTML);
        var x2 = parseInt(cells[2].innerHTML);
        var b = Number(cells[5].innerHTML);
        var w1 = Number(weightOneVal);
        var w2 = Number(weightTwoVal);
        var b = Number(biasVal);
        var sum = x1 * w1 + x2 * w2 + b;
        console.log(x1, x2, w1, w2, b, sum);

        var threshold = 0;
        if (sum < threshold) {
          Swal.fire({
            title: "Here, the threshold value is set to 0 for the step activation function.",
            confirmButtonText: "OK",
            allowOutsideClick: false,
            html: `<img src="images/activationformulae.png"> <br><br> Now, click on <b style="color:#FF6600">CHECK</b> button.`,
            showCancelButton: false,
            customClass: {
              container: "swal-container",
              popup: "swal-popup",
              title: "swal-title",
              content: "swal-content",
            },
          });
          cells[5].innerHTML = -1;
        }
        if (sum > threshold) {
          Swal.fire({
            title: "Here, the threshold value is set to 0 for the step activation function.",
            confirmButtonText: "OK",
            allowOutsideClick: false,
            html: `<img src="images/activationformulae.png"> <br><br> Now, click on <b style="color:#FF6600">CHECK</b> button.`,
            showCancelButton: false,
            customClass: {
              container: "swal-container",
              popup: "swal-popup",
              title: "swal-title",
              content: "swal-content",
            },
          });
          cells[5].innerHTML = 1;
        }
        if (sum == 0) {
          Swal.fire({
            title: "Here, the threshold value is set to 0 for the step activation function.",
            confirmButtonText: "OK",
            allowOutsideClick: false,
            html: `<img src="images/activationformulae.png"> <br><br> Now, click on <b style="color:#FF6600">CHECK</b> button.`,
            showCancelButton: false,
            customClass: {
              container: "swal-container",
              popup: "swal-popup",
              title: "swal-title",
              content: "swal-content",
            },
          });
          cells[5].innerHTML = 0;
        }
        activationRowTwo = false;
        activationRowThree = true;
      }
    }
    if (i == 3) {
      if (activationRowThree) {
        var row = table.rows[i];
        var cells = row.cells;
        var x1 = parseInt(cells[1].innerHTML);
        var x2 = parseInt(cells[2].innerHTML);
        var b = Number(cells[5].innerHTML);
        var w1 = Number(weightOneVal);
        var w2 = Number(weightTwoVal);
        var b = Number(biasVal);
        var sum = x1 * w1 + x2 * w2 + b;
        console.log(x1, x2, w1, w2, b, sum);

        var threshold = 0;
        if (sum < threshold) {
          Swal.fire({
            title: "Here, the threshold value is set to 0 for the step activation function.",
            confirmButtonText: "OK",
            allowOutsideClick: false,
            html: `<img src="images/activationformulae.png"> <br><br> Now, click on <b style="color:#FF6600">CHECK</b> button.`,
            showCancelButton: false,
            customClass: {
              container: "swal-container",
              popup: "swal-popup",
              title: "swal-title",
              content: "swal-content",
            },
          });
          cells[5].innerHTML = -1;
        }
        if (sum > threshold) {
          Swal.fire({
            title: "Here, the threshold value is set to 0 for the step activation function.",
            confirmButtonText: "OK",
            allowOutsideClick: false,
            html: `<img src="images/activationformulae.png"> <br><br> Now, click on <b style="color:#FF6600">CHECK</b> button.`,
            showCancelButton: false,
            customClass: {
              container: "swal-container",
              popup: "swal-popup",
              title: "swal-title",
              content: "swal-content",
            },
          });
          cells[5].innerHTML = 1;
        }
        if (sum == 0) {
          Swal.fire({
            title: "Here, the threshold value is set to 0 for the step activation function.",
            confirmButtonText: "OK",
            allowOutsideClick: false,
            html: `<img src="images/activationformulae.png"> <br><br> Now, click on <b style="color:#FF6600">CHECK</b> button.`,
            showCancelButton: false,
            customClass: {
              container: "swal-container",
              popup: "swal-popup",
              title: "swal-title",
              content: "swal-content",
            },
          });
          cells[5].innerHTML = 0;
        }
        activationRowThree = false;
        activationRowFour = true;
      }
    }
    if (i == 4) {
      if (activationRowFour) {
        var row = table.rows[i];
        var cells = row.cells;
        var x1 = parseInt(cells[1].innerHTML);
        var x2 = parseInt(cells[2].innerHTML);
        var b = Number(cells[5].innerHTML);
        var w1 = Number(weightOneVal);
        var w2 = Number(weightTwoVal);
        var b = Number(biasVal);
        var sum = x1 * w1 + x2 * w2 + b;
        console.log(x1, x2, w1, w2, b, sum);

        var threshold = 0;
        if (sum < threshold) {
          Swal.fire({
            title: "Here, the threshold value is set to 0 for the step activation function.",
            confirmButtonText: "OK",
            allowOutsideClick: false,
            html: `<img src="images/activationformulae.png"> <br><br> Now, click on <b style="color:#FF6600">CHECK</b> button.`,
            showCancelButton: false,
            customClass: {
              container: "swal-container",
              popup: "swal-popup",
              title: "swal-title",
              content: "swal-content",
            },
          });
          cells[5].innerHTML = -1;
        }
        if (sum > threshold) {
          Swal.fire({
            title: "Here, the threshold value is set to 0 for the step activation function.",
            confirmButtonText: "OK",
            allowOutsideClick: false,
            html: `<img src="images/activationformulae.png"> <br><br> Now, click on <b style="color:#FF6600">CHECK</b> button.`,
            showCancelButton: false,
            customClass: {
              container: "swal-container",
              popup: "swal-popup",
              title: "swal-title",
              content: "swal-content",
            },
          });
          cells[5].innerHTML = 1;
        }
        if (sum == 0) {
          Swal.fire({
            title: "Here, the threshold value is set to 0 for the step activation function.",
            confirmButtonText: "OK",
            allowOutsideClick: false,
            html: `<img src="images/activationformulae.png"> <br><br> Now, click on <b style="color:#FF6600">CHECK</b> button.`,
            showCancelButton: false,
            customClass: {
              container: "swal-container",
              popup: "swal-popup",
              title: "swal-title",
              content: "swal-content",
            },
          });
          cells[5].innerHTML = 0;
        }
      }
    }
  }
  activationBtn.disabled = true;

}
function clearInputs() {
  // (weightZero.value = ""),
  (weightOne.value = ""),
    (weightTwo.value = ""),
    (variableOne.value = ""),
    (variableTwo.value = ""),
    (biasInput.value = "");
}
function addRow() {
  if (putInOne) {
    table = document.getElementById("myTable");
    partOfAddRow();
  }
  if (putInTwo) {
    table = document.getElementById("myTable2");
    partOfAddRow();
  }
}
function partOfAddRow() {
  var x1 = document.getElementById("variable-one").value;
  var x2 = document.getElementById("variable-two").value;
  var w1 = document.getElementById("weight-one").value;
  var w2 = document.getElementById("weight-two").value;

  var b = document.getElementById("bias").value;
  var rowC = table.rows.length;


  for (var i = 1; i < rowC; i++) {
    var row = table.rows[i];
    var cells = row.cells;
    var existingX1 = cells[1].innerHTML;
    var existingX2 = cells[2].innerHTML;


    cells[3].style.border = "1px solid #e0e0e0";
    cells[5].style.border = "1px solid #e0e0e0";
    // var setWeightOneAsPrevious = document.getElementById("weight-one");
    // var setWeightTwoAsPrevious = document.getElementById("weight-two");

    if (x1 === existingX1 && x2 === existingX2) {

      submit.disabled = false;
      activationBtn.disabled = true;
      alerts1('error', 'Ooops....combination already exist.', 'Please select a different combination for <b>X<sub>1</sub></b> and <b>X<sub>2</sub></b>.');


      return;
    }
  }
  clearInputs();
  var row = table.insertRow(-1);
  var cell0 = row.insertCell(0);

  cell0.innerHTML = ++sNo;

  var cell1 = row.insertCell(1);
  cell1.innerHTML = x1;

  var cell2 = row.insertCell(2);
  cell2.innerHTML = x2;

  var cell3 = row.insertCell(3);
  if (controlInp.value == "and") {
    if (x1 == 1 && x2 == 1) {
      cell3.innerHTML = "1";
    }
    if (x1 == -1 && x2 == 1) {
      cell3.innerHTML = "-1";
    }
    if (x1 == 1 && x2 == -1) {
      cell3.innerHTML = "-1";
    }
    if (x1 == -1 && x2 == -1) {
      cell3.innerHTML = "-1";
    }
  }
  if (controlInp.value == "or") {
    if (x1 == 1 && x2 == -1) {
      cell3.innerHTML = "1";
    }
    if (x1 == -1 && x2 == 1) {
      cell3.innerHTML = "1";
    }
    if (x1 == 1 && x2 == 1) {
      cell3.innerHTML = "1";
    }
    if (x1 == -1 && x2 == -1) {
      cell3.innerHTML = "-1";
    }
  }
  // Calcaulated functions 

  //   function yin(a,w1,d,w2,b)
  //   {
  //     Swal.fire({
  //       title: "Please input your calculated value for Y(in).",
  //       input: "text",
  //       confirmButtonText: "SUBMIT",

  //       allowOutsideClick: false,
  //      a:a,
  //      d:d,
  //       html:
  //         "Σ + Bias = " +
  //         "(" +
  //         a +
  //         ")" +
  //         "*" +
  //         "(" +
  //         w1 +
  //         ")" +
  //         " + " +
  //         "(" +
  //         d +
  //         ")" +
  //         "*" +
  //         "(" +
  //         w2 +
  //         ")" +
  //         " + " +
  //         "(" +
  //         b +
  //         ")",


  //       showCancelButton: false,
  //       customClass: {
  //         container: "swal-container",
  //         popup: "swal-popup",
  //         title: "swal-title",
  //         content: "swal-content",
  //     },
  //       inputValidator: (value) => {
  //         if (!value) {
  //           return "Please provide your calculated Y(in) value.";
  //         } else {
  //           guessedValue = value;
  //           actualSum =
  //             Number(cell1.innerHTML) * Number(w1) +
  //             Number(cell2.innerHTML) * Number(w2) +
  //             Number(b);

  //           console.log(actualSum,cell1.innerHTML,w1,cell2.innerHTML,w2,b);
  //           var xx = actualSum.toFixed(2);
  //           if (Number(guessedValue) == Number(xx)) {

  //           alerts1('success','Correct!','Now, click on <b style="color:#FF6600">ACTIVATE</b> button.');
  //             cell4.innerText = xx;
  //             activationBtn.disabled = false;

  //           } else {
  //             return "Please fill the correct value up to two decimal place";
  //           }
  //         }
  //       },
  //     });
  // }

  function yin(a, w1, d, w2, b) {
    // Calculate Y(in) automatically
    let actualSum = (Number(a) * Number(w1)) + (Number(d) * Number(w2)) + Number(b);
    let yinValue = actualSum.toFixed(2);
    // Put the result inside cell4
    cell4.innerText = yinValue;
    // Show success message
    alerts1('success', 'Y(in) Calculated!', 'Automatic calculation done.<br>Now click on <b style="color:#FF6600">ACTIVATE</b>.');
    // Enable ACTIVATE button
    activationBtn.disabled = false;
  }



  // 

  var cell4 = row.insertCell(4);
  var guessedValue, actualSum;
  cell4.classList.add("summantion-input-" + rowC);
  cell4.style.border = "2px solid #FF6600";

  if (rowC == 1) {
    summantionOne = document.querySelector(".summantion-input-1");

    summantionOne.addEventListener("click", () => {
      cell4.style.border = "1px solid #e0e0e0";
      console.log(cell4.innerText);
      if (cell4.innerText == "") {
        yin(cell1.innerHTML, w1, cell2.innerHTML, w2, b);

      }
    });
  }

  if (rowC == 2) {
    summantionTwo = document.querySelector(".summantion-input-2");
    summantionTwo.addEventListener("click", () => {
      cell4.style.border = "1px solid #e0e0e0";
      if (cell4.innerText == "") {
        yin(cell1.innerHTML, w1, cell2.innerHTML, w2, b);

      }
    });
  }
  if (rowC == 3) {
    summantionThree = document.querySelector(".summantion-input-3");
    summantionThree.addEventListener("click", () => {
      cell4.style.border = "1px solid #e0e0e0";
      if (cell4.innerText == "") {
        yin(cell1.innerHTML, w1, cell2.innerHTML, w2, b);

      }
    });
  }
  if (rowC == 4) {
    summantionFour = document.querySelector(".summantion-input-4");
    summantionFour.addEventListener("click", () => {
      cell4.style.border = "1px solid #e0e0e0";
      if (cell4.innerText == "") {
        yin(cell1.innerHTML, w1, cell2.innerHTML, w2, b);

      }
    });
  }
  var cell5 = row.insertCell(5);
  cell5.innerHTML = "";
  var cell6 = row.insertCell(6);
  cell6.innerHTML = "";

  var cell7 = row.insertCell(7);
  cell7.innerHTML = "";
  var cell8 = row.insertCell(8);
  cell8.innerHTML = "";
  var cell9 = row.insertCell(9);
  cell9.innerHTML = "";
  var cell10 = row.insertCell(10);
  cell10.innerHTML = "";
  var cell11 = row.insertCell(11);
  cell11.innerHTML = "";
}
function calculateSum() {
  var table = document.getElementById("myTable");
  var rowCount = table.rows.length;
  for (var i = 1; i < rowCount; i++) {
    var row = table.rows[i];
    var cells = row.cells;
    var x1 = parseInt(cells[1].innerHTML);
    var x2 = parseInt(cells[2].innerHTML);
    var w1 = Number(cells[3].innerHTML);
    var w2 = Number(cells[4].innerHTML);

    var b = parseInt(cells[5].innerHTML);
    var sum = x1 * w1 + x2 * w2 + b;

    return sum;

  }
}
function deleteLastRow() {
  var rowCount = table.rows.length;

  if (rowCount >= 1) {
    table.deleteRow(rowCount - 1);
    rowCount--;
  }
}

// var emptyDiv = document.querySelector("empty-div");
function displays() {

  forTwoInput.style.display = "none";
  selectNumber.style.display = "none";
  networkCanvaOne.style.display = "none";
  networkCanvaTwo.style.display = "none";
  networkCanvaThree.style.display = "none";
  secConSecRow.style.display = "none";
  terminologyDiv.style.display = "none";
  activationBtn.disabled = true;
  check.disabled = true;
  update.disabled = true;
  graph.disabled = true;

}
displays();
function generalDiagram() {
  // canva with initial state
  //first ball of networkCanvaWithTwoBallContext 39
  networkCanvaWithOneBallContext.clearRect(
    0,
    0,
    networkCanvaWithOneBall.width,
    networkCanvaWithOneBall.height
  ); // Clear the canvas

  networkCanvaWithOneBallContext.beginPath();
  networkCanvaWithOneBallContext.arc(40, 38, 18, 0, 2 * Math.PI);

  networkCanvaWithOneBallContext.fillStyle = "#afebf8";
  networkCanvaWithOneBallContext.fill();

  networkCanvaWithOneBallContext.fillStyle = "black";
  networkCanvaWithOneBallContext.font = "18px Arial";
  networkCanvaWithOneBallContext.fillText("X", 32, 45);
  networkCanvaWithOneBallContext.font = "14px Arial";
  networkCanvaWithOneBallContext.fillText("1", 45, 50);

  networkCanvaWithOneBallContext.fillStyle = "#FF6600";
  networkCanvaWithOneBallContext.font = "18px Arial";
  networkCanvaWithOneBallContext.fillText("w", 95, 48);
  networkCanvaWithOneBallContext.font = "12px Arial";
  networkCanvaWithOneBallContext.fillText("1", 107, 52);
  drawArrow(networkCanvaWithOneBallContext, 58, 40, 197, 100, 3, "white");
  // second ball
  networkCanvaWithOneBallContext.beginPath();
  networkCanvaWithOneBallContext.arc(40, 90, 18, 0, 2 * Math.PI);

  networkCanvaWithOneBallContext.fillStyle = "#afebf8";
  networkCanvaWithOneBallContext.fill();

  networkCanvaWithOneBallContext.fillStyle = "black";
  networkCanvaWithOneBallContext.font = "18px Arial";
  networkCanvaWithOneBallContext.fillText("X", 30, 97);

  networkCanvaWithOneBallContext.font = "14px Arial";
  networkCanvaWithOneBallContext.fillText("2", 45, 102);

  networkCanvaWithOneBallContext.fillStyle = "#FF6600";
  networkCanvaWithOneBallContext.font = "18px Arial";
  networkCanvaWithOneBallContext.fillText("w", 95, 87);

  networkCanvaWithOneBallContext.font = "12px Arial";
  networkCanvaWithOneBallContext.fillText("2", 107, 92);

  drawArrow(networkCanvaWithOneBallContext, 60, 90, 197, 115, 3, "white");
  //third
  networkCanvaWithOneBallContext.beginPath();
  networkCanvaWithOneBallContext.arc(40, 140, 18, 0, 2 * Math.PI);

  networkCanvaWithOneBallContext.fillStyle = "#afebf8";
  networkCanvaWithOneBallContext.fill();

  networkCanvaWithOneBallContext.fillStyle = "black";
  networkCanvaWithOneBallContext.font = "16px Arial";
  networkCanvaWithOneBallContext.fillText("X", 32, 146);

  networkCanvaWithOneBallContext.font = "14px Arial";
  networkCanvaWithOneBallContext.fillText("3", 45, 150);

  networkCanvaWithOneBallContext.fillStyle = "#FF6600";
  networkCanvaWithOneBallContext.font = "18px Arial";
  networkCanvaWithOneBallContext.fillText("w", 95, 128);

  networkCanvaWithOneBallContext.font = "12px Arial";
  networkCanvaWithOneBallContext.fillText("3", 107, 131);

  drawArrow(networkCanvaWithOneBallContext, 60, 140, 197, 130, 3, "white");

  //dots
  networkCanvaWithOneBallContext.beginPath();
  networkCanvaWithOneBallContext.arc(40, 168, 3, 0, 2 * Math.PI);

  networkCanvaWithOneBallContext.fillStyle = "#afebf8";
  networkCanvaWithOneBallContext.fill();
  networkCanvaWithOneBallContext.arc(40, 178, 3, 0, 2 * Math.PI);

  networkCanvaWithOneBallContext.fillStyle = "#afebf8";
  networkCanvaWithOneBallContext.fill();
  networkCanvaWithOneBallContext.arc(40, 188, 3, 0, 2 * Math.PI);

  networkCanvaWithOneBallContext.fillStyle = "#afebf8";
  networkCanvaWithOneBallContext.fill();

  // four ball of networkCanvaWithTwoBallContext
  networkCanvaWithOneBallContext.beginPath();
  networkCanvaWithOneBallContext.arc(40, 215, 18, 0, 2 * Math.PI);

  networkCanvaWithOneBallContext.fillStyle = "#afebf8";
  networkCanvaWithOneBallContext.fill();

  networkCanvaWithOneBallContext.fillStyle = "black";
  networkCanvaWithOneBallContext.font = "16px Arial";
  networkCanvaWithOneBallContext.fillText("X", 32, 220);

  networkCanvaWithOneBallContext.font = "14px Arial";
  networkCanvaWithOneBallContext.fillText("n", 45, 225);

  networkCanvaWithOneBallContext.fillStyle = "#FF6600";
  networkCanvaWithOneBallContext.font = "18px Arial";
  networkCanvaWithOneBallContext.fillText("w", 95, 182);

  networkCanvaWithOneBallContext.font = "12px Arial";
  networkCanvaWithOneBallContext.fillText("n", 107, 187);

  drawArrow(networkCanvaWithOneBallContext, 60, 215, 200, 145, 3, "white");
  //Summation circle of networkCanvaWithTwoBallContext
  networkCanvaWithOneBallContext.beginPath();
  networkCanvaWithOneBallContext.arc(235, 120, 28, 0, 2 * Math.PI);

  networkCanvaWithOneBallContext.fillStyle = "#f4e1f4";
  networkCanvaWithOneBallContext.fill();

  networkCanvaWithOneBallContext.fillStyle = "black";
  networkCanvaWithOneBallContext.font = "24px Arial";
  networkCanvaWithOneBallContext.fillText("Σ", 225, 128);
  // Bias circle networkCanvaWithTwoBallContext
  networkCanvaWithOneBallContext.beginPath();
  networkCanvaWithOneBallContext.arc(235, 40, 28, 0, 2 * Math.PI);

  networkCanvaWithOneBallContext.fillStyle = "#afebf8";
  networkCanvaWithOneBallContext.fill();

  networkCanvaWithOneBallContext.fillStyle = "black";
  networkCanvaWithOneBallContext.font = "20px Arial";
  networkCanvaWithOneBallContext.fillText("B", 225, 48);


  drawArrow(networkCanvaWithOneBallContext, 235, 67, 235, 90, 3, "white");

  networkCanvaWithOneBallContext.beginPath();
  networkCanvaWithOneBallContext.arc(345, 120, 28, 0, 2 * Math.PI);

  networkCanvaWithOneBallContext.fillStyle = "#fdefbe";
  networkCanvaWithOneBallContext.fill();

  networkCanvaWithOneBallContext.fillStyle = "black";
  networkCanvaWithOneBallContext.font = "24px Arial";
  networkCanvaWithOneBallContext.fillText("A", 337, 127);

  drawArrow(networkCanvaWithOneBallContext, 265, 120, 313, 120, 3, "white");
  // output

  drawArrow(networkCanvaWithOneBallContext, 375, 120, 443, 120, 3, "white");
  networkCanvaWithOneBallContext.fillStyle = "#FF6600";
  networkCanvaWithOneBallContext.font = "24px Arial";
  networkCanvaWithOneBallContext.fillText("Y", 455, 127);
}
generalDiagram();

function reDrawCanva() {
  //first ball of networkCanvaWithTwoBallContext
  networkCanvaWithTwoBallContext.clearRect(
    0,
    0,
    networkCanvaWithTwoBall.width,
    networkCanvaWithTwoBall.height
  ); // Clear the canvas

  networkCanvaWithTwoBallContext.beginPath();
  networkCanvaWithTwoBallContext.arc(40, 45, 28, 0, 2 * Math.PI);

  networkCanvaWithTwoBallContext.fillStyle = "#afebf8";
  networkCanvaWithTwoBallContext.fill();

  networkCanvaWithTwoBallContext.fillStyle = "black";
  networkCanvaWithTwoBallContext.font = "24px Arial";
  if (x1 == "X") {
    networkCanvaWithTwoBallContext.fillText(x1, 25, 55);
  } else {
    networkCanvaWithTwoBallContext.fillText(x1, 32, 55);
  }

  networkCanvaWithTwoBallContext.font = "16px Arial";
  networkCanvaWithTwoBallContext.fillText(one, 43, 60);

  networkCanvaWithTwoBallContext.fillStyle = "#FF6600";
  networkCanvaWithTwoBallContext.font = "18px Arial";
  networkCanvaWithTwoBallContext.fillText(w1, 125, 63);
  networkCanvaWithTwoBallContext.font = "14px Arial";
  networkCanvaWithTwoBallContext.fillText(one, 138, 70);

  drawArrow(networkCanvaWithTwoBallContext, 70, 50, 205, 105, 3, "white");
  // second ball of networkCanvaWithTwoBallContext
  networkCanvaWithTwoBallContext.beginPath();
  networkCanvaWithTwoBallContext.arc(40, 205, 28, 0, 2 * Math.PI);

  networkCanvaWithTwoBallContext.fillStyle = "#afebf8";
  networkCanvaWithTwoBallContext.fill();

  networkCanvaWithTwoBallContext.fillStyle = "black";
  networkCanvaWithTwoBallContext.font = "24px Arial";
  if (x2 == "X") {
    networkCanvaWithTwoBallContext.fillText(x2, 25, 215);
  } else {
    networkCanvaWithTwoBallContext.fillText(x2, 32, 215);
  }
  networkCanvaWithTwoBallContext.font = "16px Arial";
  networkCanvaWithTwoBallContext.fillText(two, 45, 220);

  networkCanvaWithTwoBallContext.fillStyle = "#FF6600";
  networkCanvaWithTwoBallContext.font = "18px Arial";
  networkCanvaWithTwoBallContext.fillText(w2, 120, 160);
  networkCanvaWithTwoBallContext.font = "14px Arial";
  networkCanvaWithTwoBallContext.fillText(two, 133, 166);

  drawArrow(networkCanvaWithTwoBallContext, 70, 205, 205, 135, 3, "white");
  //Summation circle of networkCanvaWithTwoBallContext
  networkCanvaWithTwoBallContext.beginPath();
  networkCanvaWithTwoBallContext.arc(235, 120, 28, 0, 2 * Math.PI);

  networkCanvaWithTwoBallContext.fillStyle = "#f4e1f4";
  networkCanvaWithTwoBallContext.fill();

  networkCanvaWithTwoBallContext.fillStyle = "black";
  networkCanvaWithTwoBallContext.font = "24px Arial";
  networkCanvaWithTwoBallContext.fillText(summantion, 225, 128);
  // Bias circle networkCanvaWithTwoBallContext
  networkCanvaWithTwoBallContext.beginPath();
  networkCanvaWithTwoBallContext.arc(235, 40, 28, 0, 2 * Math.PI);

  networkCanvaWithTwoBallContext.fillStyle = "#afebf8";
  networkCanvaWithTwoBallContext.fill();

  networkCanvaWithTwoBallContext.fillStyle = "black";
  networkCanvaWithTwoBallContext.font = "20px Arial";
  if (biasCenter) {
    networkCanvaWithTwoBallContext.fillText(bias, 225, 48);
  } else {
    networkCanvaWithTwoBallContext.fillText(bias, 215, 48);
  }


  drawArrow(networkCanvaWithTwoBallContext, 235, 67, 235, 90, 3, "white");

  networkCanvaWithTwoBallContext.beginPath();
  networkCanvaWithTwoBallContext.arc(345, 120, 28, 0, 2 * Math.PI);

  networkCanvaWithTwoBallContext.fillStyle = "#fdefbe";
  networkCanvaWithTwoBallContext.fill();

  networkCanvaWithTwoBallContext.fillStyle = "black";
  networkCanvaWithTwoBallContext.font = "24px Arial";
  networkCanvaWithTwoBallContext.fillText(activation, 337, 127);

  drawArrow(networkCanvaWithTwoBallContext, 265, 120, 313, 120, 3, "white");
  // output

  drawArrow(networkCanvaWithTwoBallContext, 375, 120, 443, 120, 3, "white");
  networkCanvaWithTwoBallContext.fillStyle = "#FF6600";
  networkCanvaWithTwoBallContext.font = "24px Arial";
  networkCanvaWithTwoBallContext.fillText("Y", 455, 127);
}
reDrawCanva();
function analyzeCanva() {
  //first ball of networkCanvaWithTwoBallAnalyzeContext
  networkCanvaWithTwoBallAnalyzeContext.clearRect(
    0,
    0,
    networkCanvaWithTwoBall.width,
    networkCanvaWithTwoBall.height
  ); // Clear the canvas

  networkCanvaWithTwoBallAnalyzeContext.beginPath();
  networkCanvaWithTwoBallAnalyzeContext.arc(40, 45, 28, 0, 2 * Math.PI);

  networkCanvaWithTwoBallAnalyzeContext.fillStyle = "#afebf8";
  networkCanvaWithTwoBallAnalyzeContext.fill();

  networkCanvaWithTwoBallAnalyzeContext.fillStyle = "black";
  networkCanvaWithTwoBallAnalyzeContext.font = "24px Arial";

  networkCanvaWithTwoBallAnalyzeContext.fillText("X", 25, 55);
  networkCanvaWithTwoBallAnalyzeContext.font = "16px Arial";
  networkCanvaWithTwoBallAnalyzeContext.fillText("1", 43, 60);

  networkCanvaWithTwoBallAnalyzeContext.fillStyle = "#FF6600";
  networkCanvaWithTwoBallAnalyzeContext.font = "18px Arial";
  networkCanvaWithTwoBallAnalyzeContext.fillText(w1, 125, 63);
  networkCanvaWithTwoBallAnalyzeContext.font = "14px Arial";
  networkCanvaWithTwoBallAnalyzeContext.fillText(one, 138, 70);

  drawArrow(
    networkCanvaWithTwoBallAnalyzeContext,
    70,
    50,
    205,
    105,
    3,
    "white"
  );
  // second ball of networkCanvaWithTwoBallAnalyzeContext
  networkCanvaWithTwoBallAnalyzeContext.beginPath();
  networkCanvaWithTwoBallAnalyzeContext.arc(40, 205, 28, 0, 2 * Math.PI);

  networkCanvaWithTwoBallAnalyzeContext.fillStyle = "#afebf8";
  networkCanvaWithTwoBallAnalyzeContext.fill();

  networkCanvaWithTwoBallAnalyzeContext.fillStyle = "black";
  networkCanvaWithTwoBallAnalyzeContext.font = "24px Arial";

  networkCanvaWithTwoBallAnalyzeContext.fillText("X", 25, 215);
  networkCanvaWithTwoBallAnalyzeContext.font = "16px Arial";
  networkCanvaWithTwoBallAnalyzeContext.fillText("2", 45, 220);
  networkCanvaWithTwoBallAnalyzeContext.font = "18px Arial";

  networkCanvaWithTwoBallAnalyzeContext.fillStyle = "#FF6600";
  networkCanvaWithTwoBallAnalyzeContext.fillText(w2, 120, 160);
  networkCanvaWithTwoBallAnalyzeContext.font = "14px Arial";
  networkCanvaWithTwoBallAnalyzeContext.fillText(two, 133, 166);

  drawArrow(
    networkCanvaWithTwoBallAnalyzeContext,
    70,
    205,
    205,
    135,
    3,
    "white"
  );
  //Summation circle of networkCanvaWithTwoBallAnalyzeContext
  networkCanvaWithTwoBallAnalyzeContext.beginPath();
  networkCanvaWithTwoBallAnalyzeContext.arc(235, 120, 28, 0, 2 * Math.PI);

  networkCanvaWithTwoBallAnalyzeContext.fillStyle = "#f4e1f4";
  networkCanvaWithTwoBallAnalyzeContext.fill();

  networkCanvaWithTwoBallAnalyzeContext.fillStyle = "black";
  networkCanvaWithTwoBallAnalyzeContext.font = "24px Arial";
  networkCanvaWithTwoBallAnalyzeContext.fillText(summantion, 225, 128);
  // Bias circle networkCanvaWithTwoBallAnalyzeContext
  networkCanvaWithTwoBallAnalyzeContext.beginPath();
  networkCanvaWithTwoBallAnalyzeContext.arc(235, 40, 28, 0, 2 * Math.PI);

  networkCanvaWithTwoBallAnalyzeContext.fillStyle = "#afebf8";
  networkCanvaWithTwoBallAnalyzeContext.fill();

  networkCanvaWithTwoBallAnalyzeContext.fillStyle = "black";
  networkCanvaWithTwoBallAnalyzeContext.font = "20px Arial";
  if (biasCenter) {
    networkCanvaWithTwoBallAnalyzeContext.fillText(bias, 225, 48);
    console.log(analyzeOT[analyzeOT.length - 1].nb);
    console.log(analyzeOT[analyzeOT.length - 1].nw1);
    console.log(analyzeOT[analyzeOT.length - 1].nw2);
  } else {
    networkCanvaWithTwoBallAnalyzeContext.fillText(bias, 215, 48);
    console.log(analyzeOT[analyzeOT.length - 1].nb);
    console.log(analyzeOT[analyzeOT.length - 1].nw1);
    console.log(analyzeOT[analyzeOT.length - 1].nw2);
  }


  drawArrow(
    networkCanvaWithTwoBallAnalyzeContext,
    235,
    67,
    235,
    90,
    3,
    "white"
  );

  //Activation Circle of networkCanvaWithTwoBallAnalyzeContext
  networkCanvaWithTwoBallAnalyzeContext.beginPath();
  networkCanvaWithTwoBallAnalyzeContext.arc(345, 120, 28, 0, 2 * Math.PI);

  networkCanvaWithTwoBallAnalyzeContext.fillStyle = "#fdefbe";
  networkCanvaWithTwoBallAnalyzeContext.fill();

  networkCanvaWithTwoBallAnalyzeContext.fillStyle = "black";
  networkCanvaWithTwoBallAnalyzeContext.font = "24px Arial";
  networkCanvaWithTwoBallAnalyzeContext.fillText(activation, 337, 127);

  drawArrow(
    networkCanvaWithTwoBallAnalyzeContext,
    265,
    120,
    313,
    120,
    3,
    "white"
  );
  // output

  drawArrow(
    networkCanvaWithTwoBallAnalyzeContext,
    375,
    120,
    443,
    120,
    3,
    "white"
  );
  networkCanvaWithTwoBallAnalyzeContext.fillStyle = "#FF6600";
  networkCanvaWithTwoBallAnalyzeContext.font = "24px Arial";
  networkCanvaWithTwoBallAnalyzeContext.fillText("Y", 455, 127);
}
// analyzeCanva();
function drawArrow(ctx, fromx, fromy, tox, toy, arrowWidth, color) {
  //variables to be used when creating the arrow
  var headlen = 10;
  var angle = Math.atan2(toy - fromy, tox - fromx);

  ctx.save();
  ctx.strokeStyle = color;

  //starting path of the arrow from the start square to the end square
  //and drawing the stroke
  ctx.beginPath();
  ctx.moveTo(fromx, fromy);
  ctx.lineTo(tox, toy);
  ctx.lineWidth = arrowWidth;
  ctx.stroke();

  //starting a new path from the head of the arrow to one of the sides of
  //the point
  ctx.beginPath();
  ctx.moveTo(tox, toy);
  ctx.lineTo(
    tox - headlen * Math.cos(angle - Math.PI / 7),
    toy - headlen * Math.sin(angle - Math.PI / 7)
  );

  //path from the side point of the arrow, to the other side point
  ctx.lineTo(
    tox - headlen * Math.cos(angle + Math.PI / 7),
    toy - headlen * Math.sin(angle + Math.PI / 7)
  );

  //path from the side point back to the tip of the arrow, and then
  //again to the opposite side point
  ctx.lineTo(tox, toy);
  ctx.lineTo(
    tox - headlen * Math.cos(angle - Math.PI / 7),
    toy - headlen * Math.sin(angle - Math.PI / 7)
  );

  //draws the paths created above
  ctx.stroke();
  ctx.restore();
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var modalBtn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var closeBtn = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
modalBtn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
function showAnalyzeTable() {
  const data = [...analyzeOT];

  // Function to generate the table HTML with inline CSS
  function generateTable(data) {
    let tableHTML =
      '<table id="myTable" style="width: 80%; margin-top: 16px; ">';
    tableHTML += "<tr>";
    tableHTML +=
      '<th style="width: 7%; border: 1px solid #e0e0e0;  background-color: #e0e0e0;color:black;">S. No.</th>';
    tableHTML +=
      '<th style="width: 10%; border: 1px solid #e0e0e0;  background-color: #e0e0e0;color:black;">X₁</th>';
    tableHTML +=
      '<th style="width: 10%; border: 1px solid #e0e0e0;  background-color: #e0e0e0;color:black;">X₂</th>';
    tableHTML +=
      '<th style="width: 10%; border: 1px solid #e0e0e0;  background-color: #e0e0e0;color:black;">Y</th>';

    data.forEach((item) => {
      tableHTML += `<tr>`;
      tableHTML += `<td style="border: 1px solid #e0e0e0; height: 30px; text-align: center;">${item.sno}</td>`;
      tableHTML += `<td style="border: 1px solid #e0e0e0; height: 30px; text-align: center;">${item.x1}</td>`;
      tableHTML += `<td style="border: 1px solid #e0e0e0; height: 30px; text-align: center;">${item.x2}</td>`;
      tableHTML += `<td style="border: 1px solid #e0e0e0; height: 30px; text-align: center;">${item.t}</td>`;
      tableHTML += `</tr>`;
    });

    tableHTML += "</table>";
    return tableHTML;
  }

  // Display the generated table
  const tableContainer = document.getElementById("table-container");
  tableContainer.innerHTML = generateTable(data);
}




function toggleFormulaRow(rowNum) {
  const formula = document.getElementById(`formula-row-${rowNum}`);
  formula.style.display = (formula.style.display === "none") ? "block" : "none";
}