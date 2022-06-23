// Реализуйте компонент Card из библиотеки Bootstrap

import React from "react";
import { ReactDOM } from "react";

const Header = () => <h4 className="card-title">Card title</h4>;
const Text = () => <p className="card-text">Some quick example text to build on the card</p>;
const Button = () => <button type="button" className="btn btn-primary">Go somewhere</button>;

const Card = () => {
    return (
        <div className="card">
            <div className="card-body">
                <Header />
                <Text />
                <Button />
            </div>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(< Card/>)