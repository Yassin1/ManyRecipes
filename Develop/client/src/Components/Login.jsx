import React from "react";
import { Card, Input, Button } from "antd";
import { LOGIN } from "../gql";
import {useMutation} from "@apollo/client";
import Cookies from "js-cookie";

function Login() {
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");

    const [login, { error, data, loading }] = useMutation(LOGIN);

    React.useEffect(() => {
        if (loading) {
            return;
        }
        
        if (data?.login?.err) {
            return window.alert("ERROR: " + data?.login?.err);
        }

        if (data?.login?.token) {
            Cookies.set("token", data?.login?.token);
            window.location.reload();
        }

    }, [loading]);

	return (
        <div className="login-container">
		<Card title="Login" className="login-form">
			<Input
				placeholder="Email"
				className="app-input"
				onChange={(e) => setEmail(e.target.value)}
			/>
			<Input
				placeholder="Password"
				type="password"
				className="app-input"
				onChange={(e) => setPassword(e.target.value)}
			/>

			<Button
				type="primary"
				shape="round"
				size={26}
				className="login-button"
				onClick={() => {
					login({
                        variables: {
                            email: email,
                            password: password,
                        }
                    })
				}}
			>
				Log In
			</Button>
		</Card>
        </div>
	);
}

export default Login;
