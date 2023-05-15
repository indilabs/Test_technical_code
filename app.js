const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const port = 3000
const app = express()

app.use(express.static('public'))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

function isNumber(num) {
  if (isNaN(num)) return false;
  return true
}

app.post("/segitiga", function (req, res) {
  const num = req.body.num
  if (!isNumber(num)) res.send("Please enter numbers only")
  let s = ""
  let val = (num).toString()
  for (let i = 0; i < val.length; i++) {
    s += val[i]
    for (let j = 0; j <= i; j++) s += '0'
    s += "</br>"
  }
  res.send(s)
})

app.post("/ganjil", function (req, res) {
  const num = req.body.num
  if (!isNumber(num)) res.send("Please enter numbers only")
  let s = []
  for (let i = 0; i < num; i++) {
    if (i % 2 == 1) s.push(i)
  }
  res.send(s.toString())
})

function isPrime(num) {
  if (num < 2) return false
  for (let i = 2; i < num; i++) {
    if (num % i == 0) return false
  }
  return true
}

app.post("/prima", function (req, res) {
  const num = req.body.num
  if (!isNumber(num)) res.send("Please enter numbers only")
  let s = []
  for (let i = 0; i < num; i++) {
    if (isPrime(i)) s.push(i)
  }
  res.send(s.toString())
})

app.listen(port, function () {
  console.log(`App listening on post ${port}`);
})