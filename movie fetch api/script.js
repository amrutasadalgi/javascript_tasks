document.getElementById("search").addEventListener("click", async () => {
document.getElementById("movie1").innerHTML = "";

  let inputValue = document.getElementById("speechToText").value;

  let data = await fetch(
    `https://www.omdbapi.com/?s=${inputValue}&apikey=7880183f`
  ).then(res => res.json());
  console.log(data);
  let movieList = data.Search;
  console.log(movieList);
  movieList.map(movie => {
    let div = document.createElement("div");
    div.innerHTML = ` <div>
                    <h1>${movie.Title}</h1>
                    <img src=${movie.Poster} alt="">
                </div>`;
    document.getElementById("movie1").appendChild(div);
  });
});

//! Speech recognization

 function record() {
   var recognition = new webkitSpeechRecognition();
   recognition.lang = "en-GB";

   recognition.onresult = function (event) {
     document.getElementById("speechToText").value =
       event.results[0][0].transcript;
   };
   recognition.start();
 }


