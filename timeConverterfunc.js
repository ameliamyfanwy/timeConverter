function timeConverter(seconds) {

    let hours = Math.floor(seconds/3600)
    let secondsRemaining = seconds%3600
    let minutes = secondsRemaining/60

    if (hours === 1) {
        str = " hour "
    }
    else {
        str = " hours "
    }
    
    if (minutes%5) {
        minutes = (minutes + (5-(minutes%5)))
    }

    return hours + str + minutes + " minutes"
};

module.exports = timeConverter