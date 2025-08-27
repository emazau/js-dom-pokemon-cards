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

    link = data[i].sprites.other["official-artwork"].front_default;
    img.setAttribute('src',link);

    item.appendChild(h2);
    item.appendChild(img);
    item.appendChild(ul);

    for (let j = 0; j <6; j++){
        ul.appendChild(createInnerHTML("li", (data[i].stats[j].stat.name).toUpperCase() +": "+data[i].stats[j].base_stat));
    }

    //addgames
    
    for (let j = 0; j < data[i].game_indices.length;j++){
        let is = 0;
    }

    cards.appendChild(item);
}
function createInnerHTML(tag, value){
    const tagg = document.createElement(tag);
    tagg.innerHTML = value;
    return tagg
}
console.log(data[0]);
