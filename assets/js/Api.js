var logOutBtn = document.getElementById('logOutBtn');
var Items;
var infoB = window.localStorage.getItem('infoData');
var infoC = JSON.parse(infoB);
console.log(infoC)
document.getElementById('login').innerHTML= `Hi ${infoC[0].name}`


function deleteInfo(){
  window.localStorage.clear()
}

async function getApi(){
var Res =await fetch (`https://api.themoviedb.org/3/trending/movie/day?api_key=983db79b092d668156eb94989a7a44d3`,{
    method:'GET'
})
var finalRes =await Res.json()
console.log(finalRes.results);

Items = finalRes.results
display()
}
getApi()
function display(){
    var cartoona =``;
    for(var i=0 ; i<Items.length;i++){
        Items[i].poster_path !==null && Items[i].vote_average !==null?
        cartoona+= `<div class="col-md-3">
        <div class="movie position-relative shadow-lg rounded">
          <div class="rate position-absolute end-0 top-0">
            <span>${Items[i].vote_average}</span>
          </div>
          <img class="card-img-top w-100" src="https://image.tmdb.org/t/p/w500/${Items[i].poster_path}">
        </div>
        </div>`:''
    }

    document.getElementById('showData').innerHTML = cartoona
}