

const api1= async function (req, res) {
    res.send("First API Hit")
}

const api2 = async function (req, res) {
    res.send("Second API Hit")
}

const api3 = async function (req, res) {
    res.send("Third API Hit")
}

const api4 = async function (req, res) {
    res.send("Fourth API Hit")
}

const api5 = async function (req, res) {
    res.send("Fifth API Hit")
}



module.exports.api1 = api1
module.exports.api2 = api2
module.exports.api3 = api3
module.exports.api4 = api4
module.exports.api5 = api5
