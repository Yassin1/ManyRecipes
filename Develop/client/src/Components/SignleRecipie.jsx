import React from "react";
import { Card, List, Avatar, Divider, Button, Tooltip } from "antd";

function SingleRecipie () {

    return (
        <Card
            title={
                <>
                    <h3>Tea</h3>
                    <p>View recipie of Tea</p>
                </>
            }
        >
            
            <div>
                <Button
                    onClick={() => window.history.back()}
                >
                    Back
                </Button>
            </div>
            <Divider />
            <div>
                <h3>Ingridients</h3>
                Tea, Milk, Sugar
            </div>
            <Divider />
            <div>
                <h3>Spice Level</h3>
                <p>0</p>
            </div>
            <Divider />
            <div>
                <h3>Country</h3>
                <p>United States(US)</p>
            </div>
            <Divider />
            <div>
                <h3>Added By</h3>
                <p>Yassin Sheikh (yassin@gmail.com)</p>
            </div>
            <Divider />
            <div>
                <h3>Process</h3>
                <p>1. Mix all the ingridients</p>
                <p>2. Put on Fire</p>
                <p>3. After it starts boiling, take it off from the fire</p>
            </div>
        </Card>
    )

}

export default SingleRecipie;