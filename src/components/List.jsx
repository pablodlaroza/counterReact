import { useState, useEffect } from "react";
import getPokemon from "../helpers/getPokemon";

const List= ({task}) => {
    const [id, setId] = useState("");
    const [image, setImage] = useState("");

    const fetchData = async () => {
        const pokemonData = await getPokemon(task);
        setId(pokemonData.id);
        setImage(pokemonData.sprites.front_default);
        console.log(pokemonData)
    };

    useEffect(() => {
        fetchData();
    }, [task]);

    return (
        <>
            <li>{task}</li>
            <div> ID: {id}</div>
            <img src={image} />
        </>
    );
};

export default List;
