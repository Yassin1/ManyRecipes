import React from "react";
import { Card, Input, Button, Space } from "antd";
import { ADD_RECIPIE } from "../gql";
import { useMutation } from "@apollo/client";

function AddRecipie() {
    
    const [name, setName] = React.useState("");
    const [process, setProcess] = React.useState("");
    const [ingridients, setIngridients] = React.useState("");
    const [spiceLevel, setSpiceLevel] = React.useState(0);
    const [countryCode, setCountryCode] = React.useState("");

    const [addRecipie, { error, data, loading }] = useMutation(ADD_RECIPIE);

    React.useEffect(() => {
        if (loading) {
            return;
        }
        if (error) {
            window.alert("ERROR");
        }
        if (data) {
        //    window.location.href = "./login";
        }
    }, [loading]);

	return (
        <div className="login-container">
		<Card title="Add Recipie" className="login-form">
            <Space direction="vertical">
			<Input
				placeholder="Name"
				className="app-input"
				onChange={(e) => setName(e.target.value)}
			/>
			<Input
				placeholder="Ingridients (separated by commas)"
				className="app-input"
				onChange={(e) => setIngridients(e.target.value)}
			/>
            <Input
				placeholder="Process"
				className="app-input"
				onChange={(e) => setProcess(e.target.value)}
			/>
			<Input
				placeholder="Country"
				type="password"
				className="app-input"
				onChange={(e) => setCountryCode(e.target.value)}
			/>
            <Input
				placeholder="Spice Level"
				className="app-input"
				onChange={(e) => setSpiceLevel(parseFloat(e.target.value))}
			/>
			<Button
				type="primary"
				shape="round"
				size={26}
				className="login-button"
				onClick={() => {
					addRecipie({
                        variables: {
                            name,
                            process,
                            ingridients: ingridients?.split(",").map(i => i.trim()) || [],
                            countryCode,
                            spiceLevel,
                        }
                    })
				}}
			>
				Add Recipie
			</Button>
            </Space>
		</Card>
        </div>
	);
}

export default AddRecipie;
