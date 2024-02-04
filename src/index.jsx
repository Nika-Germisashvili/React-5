import React from "react";
import ReactDOM from "react-dom/client";
import Button1 from "./button";

class App extends React.Component {
    render() {
        return (
            <Button1></Button1>
        )

        
    }
}

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App></App>);

