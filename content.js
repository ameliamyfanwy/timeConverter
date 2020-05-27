var theButton = document.getElementById("b");
theButton.onclick = gatherInput;

function gatherInput() {
    var secondsInput = (document.getElementById("seconds").value);
    console.log("Seconds input" + secondsInput)
    var result = timeConverter(secondsInput);
    var displayResult = document.getElementById("result");
    displayResult.innerHTML = result
}
