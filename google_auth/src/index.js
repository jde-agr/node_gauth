import React, {useState} from "react";
import ReactDOM from "react-dom";
import GoogleLogin from "react-google-login";

import "./styles.css";

function App() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [url, setURL] = useState("");

    const responseGoogle = response => {
        console.log(response);
        setName(response.profileObj.name);
        setEmail(response.profileObj.email);
        setURL(response.profileObj.imageUrl);
    };

    return (
        <div className="App">
        <h1>Login with Google</h1>
        <h2>Welcome: {name}</h2>
        <h2>Email: {email}</h2>
        <img src={url} alt={name}/>
        <GoogleLogin
            clientId="416213802506-o6pvumegvaq0839g1e8br0r21i862q9r.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
        />
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
