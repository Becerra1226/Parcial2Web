import React from "react";  

const Search = () =>{
    return(
        <form className="d-flex justify-content-center gap-4 mb-5">
            
            <input placeholder="Buscar personaje" type="text" className="" />
            <button className="btn btn-primary">Buscar</button>

        </form>
    )
}

export default Search