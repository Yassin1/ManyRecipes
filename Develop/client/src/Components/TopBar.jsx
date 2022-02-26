import React from "react";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import { Space } from "antd";
import './Topbar.scss';
function TopBar () {

    const [isLoggedIn] = React.useState(Cookies.get("token"));

    return (
        <div >
            <span id="yup" style={{ float: "right" }}>
                <Space size={30}>
                    <Link to="/">
                        Home
                    </Link>
                    {
                        isLoggedIn ?
                        <> 
                        <Link to="/add-recipie">
                            Add Recipie
                    
                        </Link> 
                        
                        <a
                        
                        onClick={
                            () => {
                                Cookies.remove("token")
                                window.location.reload()
                            }
                        }> Logout</a>
                        </>
                            :

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