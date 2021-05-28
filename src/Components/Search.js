import React, { useState } from 'react';


const Search = ({city,setCity}) => {
    const [term,setTerm] = useState("");
    
    
    return <div className="ui segment">
            <form className="ui form" onSubmit={e => e.preventDefault()}>
                <div className="field">
                    <label>Enter the City..</label>
                    <input type="text" value={term} onChange={e => setTerm(e.target.value)} className="input" placeholder="Search by City" />
                </div>
                <button onClick={() => setCity(term)} >Ara</button>
            </form>
            </div>;
}

export default Search;