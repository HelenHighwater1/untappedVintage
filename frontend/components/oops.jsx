import React from "react";
import { Link } from "react-router-dom";

class Oops extends React.Component {
    render() {
        return (
            <div className="oops">
             
                <p>Oops - looks like we are missing the page you are looking for.</p>
                <button><Link to="/">Take me home!</Link></button>
            </div>
        )
    }
}

export default Oops;