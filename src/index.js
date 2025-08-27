const cards = document.querySelector(".cards");
for (let i =0; i<data.length; i++){
    const item = document.createElement("li");
    item.setAttribute('class','card');
    const h2 = createInnerHTML("h2", data[i].name);
    h2.setAttribute('class','card--title');
    const img = document.createElement('img');
    img.setAttribute('class','card--img');
    img.setAttribute('width','256');
    const ul = document.createElement('ul');
    ul.setAttribute('class','card--text')
    const ul2 =  document.createElement('ul');
    ul2.setAttribute('class','card--text')

    link = data[i].sprites.other["official-artwork"].front_default;
    img.setAttribute('src',link);

    item.appendChild(h2);
    item.appendChild(img);
    item.appendChild(ul);
    item.appendChild(createInnerHTML("p", "GAMES: "))

    item.appendChild(ul2);


    for (let j = 0; j <6; j++){
        ul.appendChild(createInnerHTML("li", (data[i].stats[j].stat.name).toUpperCase() +": "+data[i].stats[j].base_stat));
    }

    //addgames

    /** */
    for (let j = 0; j < data[i].game_indices.length;j++) 
        ul2.appendChild(createInnerHTML("li",  data[i].game_indices[j].version.name + ": " +data[i].game_indices[j].game_index ))
    
        

    cards.appendChild(item);
}
function createInnerHTML(tag, value){
    const tagg = document.createElement(tag);
    tagg.innerHTML = value;
    return tagg
}
console.log(data[0]);
