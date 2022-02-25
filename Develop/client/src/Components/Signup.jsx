import React from "react";
import { Card, Input, Button, Space } from "antd";
import { SIGNUP } from "../gql";
import {useMutation} from "@apollo/client";
import Cookies from "js-cookie";

function Signup() {
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [country, setCountry] = React.useState("");
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");

    const [signup, { error, data, loading }] = useMutation(SIGNUP);

    React.useEffect(() => {
        if (loading) {
            return;
        }
        if (error) {
            window.alert("ERROR");
        }
        if (data) {
            window.location.href = "./login";
        }
    }, [loading]);

	return (
        <div className="login-container">
		<Card title="Signup" className="login-form">
            <Space direction="vertical">
			<Input
				placeholder="First Name"
				className="app-input"
				onChange={(e) => setFirstName(e.target.value)}
			/>
			<Input
				placeholder="Last Name"
				className="app-input"
				onChange={(e) => setLastName(e.target.value)}
			/>
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
            <Input
				placeholder="Country"
				className="app-input"
				onChange={(e) => setCountry(e.target.value)}
			/>
			<Button
				type="primary"
				shape="round"
				size={26}
				className="login-button"
				onClick={() => {
					signup({
                        variables: {
                            firstName,
                            lastName,
                            country,
                            email,
                            password,
                        }
                    })
				}}
			>
				Sign Up
			</Button>
            </Space>
		</Card>
        </div>
	);
}

export default Signup;
