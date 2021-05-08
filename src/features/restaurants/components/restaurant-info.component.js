import React from "react";
import { View, Image } from "react-native";
import { Card, Text } from "react-native-paper";
import styled from "styled-components/native";

import {SvgXml} from "react-native-svg";
import Star from "../../../../assets/star";

const RestaurantCard = styled(Card)`
    background: ${(props)=>props.theme.colors.ui.quaternary};
    padding-bottom: ${(props)=>props.theme.space[2]};
    margin-bottom: ${(props)=>props.theme.space[4]};
`
const Info = styled(View)`
    padding: ${(props)=>props.theme.space[2]};
`
const Title = styled(Text)`
    font-family: ${(props)=>props.theme.fonts.body};
    font-size: ${(props)=>props.theme.fontSizes.body}
    color: ${(props)=>props.theme.colors.text.primary};
    padding-left : ${(props)=>props.theme.space[0]}; 
`
const Section = styled(View)`
    flex-direction: row;
`
const Status = styled(View)`
    flex: 1;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-end;
`
const Rating = styled(View)`
    padding-top : ${(props)=>props.theme.space[1]};
    padding-bottom : ${(props)=>props.theme.space[1]}; 
    flex-direction: row;
`
const IsOpen = styled(View)`
    margin-left: 5px;
`
const IsClosedTemporally = styled(View)`
    margin-left: 5px;

`
const IconImg = styled(View)`
    margin-left: 5px;
`
const Address = styled(Text)`
    font-family: ${(props)=>props.theme.fonts.body};
    font-size: ${(props)=>props.theme.fontSizes.caption};
    font-weight: ${(props)=>props.theme.fontWeights.bold}
    color: ${(props)=>props.theme.colors.text.primary};
    padding-left : ${(props)=>props.theme.space[0]}; 
`

export const RestaurantInfo = ({ restaurant = {}}) => {
    const {
        name = 'Some Restaurants',
        icon,
        photos = ["https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg"],
        address = 'Some address',
        isOpenNow = true,
        rating = 4,
        isClosedTemporally = true
    } = restaurant

    const RaitingStars = Array.from(new Array(Math.floor(rating)))

    return (
        <RestaurantCard elevation={7}>
            <Card.Cover source={{ uri: photos[0] }} />
            <Info>
                <Title>{name}</Title>
                <Section>
                    <Rating>
                        {RaitingStars.map(()=>(
                            <SvgXml width={20} height={20} xml={Star}/>
                        ))} 
                    </Rating>
                    <Status>
                        <IsOpen>
                            {isOpenNow ? (
                                <Text>Open</Text>
                            ) : null}
                        </IsOpen>
                        <IsClosedTemporally>
                            {isClosedTemporally ? (
                                <Text style={{ color: 'red' }}>Closed</Text>
                            ) : null}
                        </IsClosedTemporally>
                        <IconImg>
                            <Image width={20} height={20} source={{uri : icon}} />
                        </IconImg>
                    </Status>
                </Section>
                <Address>{address}</Address>
            </Info>
        </RestaurantCard>    
    )
}
