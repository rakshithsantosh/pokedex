const poke_container = document.getElementById('poke_container');
const pokemon_count =57;

const fetchPokemon = async()=>{
    for(let i=1;i<pokemon_count;i++){
        await getPokemon(i)
    }
}

const getPokemon = async id =>{
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url);
    const pokemon = await res.json();
    createPokemon(pokemon);
    console.log(pokemon);
}

const createPokemon = (pokemon) =>{
    const pokEle = document.createElement('div');
    pokEle.classList.add('pokemon');
    const {id , name,sprites,types}=pokemon;
    
    
    const type= types[0].type.name;
    const pokeInnerHtml = `
    <div class ="img-container">
        <img src = "${sprites.front_default}" alt ="${name}"/>
    </div>
    <div class ="info">
        <span class ="number">${id}</span>
        <h3 class ="name">${name}</h3>
        <h5 class ="type">${type}</h5>
    </div>        
    `;
    pokEle.innerHTML=pokeInnerHtml;
    poke_container.appendChild(pokEle);
}

fetchPokemon();

