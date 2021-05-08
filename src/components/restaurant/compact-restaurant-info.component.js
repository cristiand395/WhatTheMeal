import React from "react";
import styled from "styled-components/native";
import WebView from "react-native-webview";
import { Platform } from "react-native";

import { Text } from "../typography/text.component";

const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
  margin-bottom: 5px;
`;

const CompactWebview = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
  margin-bottom: 5px;
`;

const Item = styled.View`
  border-radius: 15px;
  padding-bottom: 5px;
  width: 120px;
  align-items: center;
`;

const RestaurantName = styled.Text`
  margin-top: 5px;
`

const isAndroid = Platform.OS === "android";

export const CompactRestaurantInfo = ({ restaurant, isMap }) => {
  const Image = isAndroid && isMap ? CompactWebview : CompactImage;

  return (
    <Item>
      <Image source={{ uri: restaurant.photos[0] }} />
      <RestaurantName center variant="caption" numberOfLines={3}>
        {restaurant.name}
      </RestaurantName>
    </Item>
  );
};
