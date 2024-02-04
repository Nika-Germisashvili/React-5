import React from "react";

class Button1 extends React.Component {
    render() {
        let name = "";

        return (
            <React.Fragment>
                <input type="text" placeholder="Enter name" id="inp"/>
                <button type="submit"onClick={Myfunction}>Submit</button>
            </React.Fragment>
        )
    }
}

function Myfunction () {
    let inputname = document.getElementById("inp");  
    let name = inputname.value;

    window.alert(name);  
}

export default Button1;