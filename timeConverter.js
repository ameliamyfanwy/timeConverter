function timeConverter(seconds) {
    //convert seconds to minutes
    //add minutes string
    let minutes = seconds/60
    if (minutes%5) {
        return minutes + (5-(minutes%5)) + ""
    }
    else {
        return minutes + " minutes"
    }
}

module.exports = timeConverter