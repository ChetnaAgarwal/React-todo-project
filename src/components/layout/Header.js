import React from 'react';

//functional component
function Header(){
    return(
        <header style={headerStyle}>
            <h1>TODO LIST</h1>
        </header>
    )
}

const headerStyle = {
    background:'#333',
    color:'#fff',
    textAlign:'center',
    padding:'10px'
}

export default Header;