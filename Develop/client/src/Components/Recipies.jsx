import React from "react";
import { GET_RECIPIES, STRIPE_SESSION } from "../gql";
import { useLazyQuery } from "@apollo/client";
import { Typography } from 'antd';
import { List, Avatar, Space } from 'antd';
import { Input } from 'antd';
import { Select } from 'antd';

const { Option } = Select;

function Recipies() {

    const [countryFilter, setCountryFilter] = React.useState("")
    const [getRecipies, { data, loading, error }] = useLazyQuery(GET_RECIPIES);
    const [getStripeToken, { data: stripeData, loading: stripeLoading, error: StripeErr }] = useLazyQuery(STRIPE_SESSION);

    React.useEffect(

        () => {
            console.log("Recipies", data);
            if (error) {
                console.log("ERROR", error);
            }
        },

        [loading, error]
    );

    React.useEffect(

        () => {
            getRecipies(
                {
                    variables: {
                        country: countryFilter
                    }
                }

            )
        },

        [countryFilter]


    )
    React.useEffect(() => {

        if (stripeLoading)
            return;
        console.log(
            "error",
            StripeErr,
        )
        if (stripeData?.stripeSession?.id) {


            const stripe = window.Stripe('pk_test_swNqPiBxZhZMRbTa13BNPB3500XgQp9Qn4'); // replace by public key. 
            stripe?.redirectToCheckout({
                sessionId: stripeData.stripeSession.id,
            }).then(function (result) {
                console.log(result);
            });
        }
    }, [stripeLoading]);

    return (
        <>
            <Typography.Title>
                Recipies
            </Typography.Title>
            <div>

                <Input placeholder="Search by country" onChange={(e) => setCountryFilter(e.target.value)} />


                <Select
                    placeholder="Select a counry"
                    optionFilterProp="children"
                    onChange={(e) => setCountryFilter(e)}


                >
                    <Option value="US"> UNITED STATES </Option>
                    <Option value="MA">Morocco</Option>
                    <Option value="IN">india</Option>
                    <Option value="ET">Ethiopean</Option>
                    <Option value="MX">mexican</Option>
                    <Option value="pk">Pakistan</Option>
                    <Option value="MY">Malaysia</Option>
                    <Option value="LB">Lebanon</Option>
                    <Option value="LV">latvia</Option>
                </Select>,

            </div>
            <List
                itemLayout=""
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


                                <a onClick={() => {
                                    window.alert(1)
                                    getStripeToken()
                                }}>
                                    <span>
                                        Donate
                                    </span>
                                </a>,










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