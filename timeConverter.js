var theButton = document.getElementById("b");
theButton.onclick = gatherInput;

function timeConverter(seconds) {
    //convert minutes to seconds
    let minutes = seconds/60
    //if minutes isn't multiple of 5
    if (minutes%5) {
        return minutes + (5-(minutes%5)) + " minutes"
    }
    //if minutes is multiple of 5
    else {
        return minutes + " minutes"
    }
};

function gatherInput() {
    var secondsInput = parseInt(document.getElementById("seconds").value);
    var result = timeConverter(secondsInput);
    var place = document.getElementById("result");
    place.innerHTML = result
}

module.exports = timeConverter