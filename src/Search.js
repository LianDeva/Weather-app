import React from "react";

const SearchBox = (props) =>{
    return(
        <input type="search"
            className= "Search"
            placeholder={props.placeholder}
            onChange={props.handleChange}
            onKeyDown={props.onKeyDown}/>
    )
}
export default SearchBox;