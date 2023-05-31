   
    const getPokemon = async (task)=>{
        const url = `https://pokeapi.co/api/v2/pokemon/${task}/`;
        const resp = await fetch(url);
        const data = await resp.json();
        console.log()

       

        return  data       
    }


    export default getPokemon;
    