const cardData = [
{
    title: "Octavius Kraken",
    subtitle: "Escape Artist",
    content: "Super powers: can shape-shift, instantly change color, communicate using light displays generated on his skin, taste things by touching them, squirt ink and use tools",
    imgsrc: "https://images.unsplash.com/photo-1564261331932-ea97c182f705?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
    },
{
    title: "Leonardo ",
    subtitle: "Surfer / Pizza lover",
    content: " Decelerated Aging, Dermal Armor/Shell Formation, Enhanced Bite, Enhanced Durability., Enhanced Endurance, Retractable Head, Night Vision, Speed Swimming.",
    imgsrc: "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
},
{
    title: "Captain Nemo",
    subtitle: "Comedian",
    content: "Live in a sea anenome away from predators. Has a slimy mucus covering his body that protects him from the sea anemone. Tells good Dad jokes",
    imgsrc: "https://images.unsplash.com/photo-1536168032936-9ce3b4b3165c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
},
]
/*
you can place removed html here for a template
*/

function createCard(title, subtitle, content, imgsrc){

    // create elements
    const card = document.createElement('div');
    const cardTitle = document.createElement('h2');
    const cardSubtitle = document.createElement('h3');
    const cardDesc = document.createElement('div');
    const cardImg = document.createElement('img');

    // setup the structure of the elements
    card.append(cardTitle);
    card.append(cardSubtitle);
    card.append(cardDesc);
    card.append(cardImg);

    // add classes to elements
    card.classList.add('card');
    cardSubtitle.classList.add('subtitle');
    cardDesc.classList.add('desc');
    cardImg.classList.add('img');

    // set content
    cardTitle.textContent = title;
    cardSubtitle.textContent = subtitle;
    cardDesc.textContent = content;
    cardImg.src = imgsrc;


    return card
}

const container = document.querySelector('.container');
console.log(container);

cardData.forEach(data => {
    container.append(createCard(data.title, data.subtitle, data.content, data.imgsrc))
})
