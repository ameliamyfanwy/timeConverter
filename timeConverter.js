var theButton = document.getElementById("b");
theButton.onclick = gatherInput;

function gatherInput() {
    var secondsInput = parseInt(document.getElementById("seconds").value);
    var result = timeConverter(secondsInput);
    var place = document.getElementById("result");
    place.innerHTML = result
}
