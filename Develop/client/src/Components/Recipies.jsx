import React from "react";
import { GET_RECIPIES } from "../gql";
import { useQuery } from "@apollo/client";
import { Typography } from 'antd';
import { List, Avatar, Space } from 'antd';

function Recipies () {

    const { data, loading, error } = useQuery(GET_RECIPIES);

    React.useEffect(
        //first paramater - a function
        () => {
            console.log("Recipies", data);
            if (error) {
                console.log("ERROR", error);
            }
        }, 
        // second param = dependency array
        [loading, error]
    );

    return (
        <>
            <Typography.Title>
                Recipies
            </Typography.Title>
            <List
                itemLayout="vertical"
                loading={loading}
                dataSource={data?.recipie || []}
                renderItem={(_recipie) => {
                    return (
                        <List.Item

                            actions={[
                                <a href={"/recipie/" + _recipie._id}>
                                <span>
                                    View
                                </span>
                                </a>,
                                <span>
                                    Donate
                                </span>
                            ]}
                        >
                            <List.Item.Meta
                              avatar={<Avatar src="https://www.nicepng.com/png/full/186-1866063_dicks-out-for-harambe-sample-avatar.png" />}
                              title={_recipie?.addedBy?.firstName + " " + _recipie?.addedBy?.lastName}
                              description={_recipie?.addedBy?.email}
                            />
                            <p>
                                <b>{_recipie.name}</b>
                                <span>({_recipie?.country?.name || "Unknown Country"})</span>
                            </p>
                            <p>
                                {_recipie.ingridients.join(", ")}
                            </p>
                            <p>
                                <i>Spice Level: {_recipie.spiceLevel}</i>
                            </p>
                        </List.Item>
                    )
                }}
            >
            </List>
        </>
    )
}

export default Recipies;