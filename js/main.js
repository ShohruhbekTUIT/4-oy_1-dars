var elList = document.querySelector(".list");

for(var pokemon of pokemons){
  var newItem = document.createElement("li");
  var newHeading = document.createElement("h3");
  var newImg = document.createElement("img");
  var newTime = document.createElement("time");
  var newSublist = document.createElement("ul");
  var newStrong = document.createElement("strong");
  var newStrongs = document.createElement("strong");

    for(var types of pokemon.type){
      var newSubItem = document.createElement("li");
      newSubItem.textContent = types;
      newSublist.appendChild(newSubItem);
    }

newHeading.textContent = pokemon.name;
newTime.textContent ="Spawn time : " + pokemon.spawn_time;
newStrong.textContent ="Height - " + pokemon.height;
newStrongs.textContent ="Weight - " + pokemon.weight;

newHeading.setAttribute("class","text-center")
newImg.setAttribute("src",pokemon.img);
newImg.setAttribute("class","mx-auto d-block w-img");
newItem.setAttribute("class","w-width bg-info p-3");
newStrongs.setAttribute("class","d-block");
newTime.setAttribute("class","text-danger h5");

newItem.appendChild(newImg);
newItem.appendChild(newHeading);
newItem.appendChild(newStrong);
newItem.appendChild(newStrongs);
newItem.appendChild(newSublist);
newItem.appendChild(newTime);

elList.appendChild(newItem);
}