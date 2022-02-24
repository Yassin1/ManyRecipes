import React from "react";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import { Space } from "antd";

function TopBar () {

    const [isLoggedIn] = React.useState(Cookies.get("token"));

    return (
        <div>
            <span style={{ float: "right" }}>
                <Space size={30}>
                    <Link to="/">
                        Home
                    </Link>
                    {
                        isLoggedIn ?
                        <Link to="/add-recipie">
                            Add Recipie
                        </Link> : 
                        <>
                            <Link to="/login">
                                Login
                            </Link>
                            <Link to="/signup">
                                Sign Up
                            </Link>
                        </>
                    }
                </Space>
            </span>
        </div>
    )

}

export default TopBar;