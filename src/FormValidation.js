import React from "react";
import ReactDOM from "react-dom";
import { useFormin } from "formin";

import "./styles.css";

function Form() {
    const { getFormProps, getInputProps, errors, values, touched } = useFormin();

    return (
        <React.Fragment>
            <form {...getFormProps()}>
                <input
                    type="email"
                    placeholder="email"
                    required
                    {...getInputProps({ name: "email" })}
                />
                <input
                    type="password"
                    placeholder="password"
                    required
                    {...getInputProps({ name: "password" })}
                />
                <div>
                    <button>Submit</button>
                </div>
            </form>
            <pre>
                {"state = " + JSON.stringify({ errors, values, touched }, null, 2)}
            </pre>
        </React.Fragment>
    );
}

function App() {
    return (
        <div className="App">
            <h1>Basic form example</h1>
            <Form />
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
