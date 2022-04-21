var skip = document.getElementById("skip")
console.log(skip);
var score = document.getElementById("score");
var totalscore = document.getElementById("totalscore");
var countdown = document.getElementById("countdown");
var count = 0;
var scorecount = 0;
var duration = 0;
var qaset = document.querySelectorAll(".qa_set");
var qaAnsrow = document.querySelectorAll(".qa_set .qa_ans_row input");

skip.addEventListener("click", function ()
{
    step();
})

qaAnsrow.forEach(function (qaans) {
    qaans.addEventListener("click", function () {
        setTimeout(function () {
            step();
            duration=10
        }, 500)
        var valid = this.getAttribute("valid");
        if (valid == "valid")
            scorecount += 1;
        score.innerHTML = scorecount;
        totalscore.innerHTML = scorecount;
    })
    console.log("value");
    console.log(scorecount);
})


function step()
{
    count += 1;
    for (var i = 0; i < qaset.length; i++){
        qaset[i].className = "qa_set";
    }
    qaset[count].className = "qa_set active"
    if (count == 10) {
        skip.style.display = "none"
        clearInterval(durationtime)
        countdown.innerHTML = 0;
        var data = [
          {
            values: [scorecount * 10, 100 - scorecount * 10],
                labels: ["correct", "wrong"],
                // backgroundColor: ["green", "red"],
                type: "pie",
                marker: {
                   colors:["green","red"]
               }
          },
        ];
        var layout = {
            height: 400,
            width: 500,
        };
        Plotly.newPlot("myDiv", data, layout);
    }
}
var durationtime = setInterval(function () {
    if (duration == 10) {
        duration = 0;
    }
    duration += 1;
    countdown.innerHTML = duration;
    if (countdown.innerHTML == "10") {
        step()
    }
},1000)








