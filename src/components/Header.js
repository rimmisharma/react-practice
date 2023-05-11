import React from "react";

function Header(props){
    console.log(props);
    return <h3>Hello there, {props.name}! The sky is {props.color} today.</h3>
}

export default Header;