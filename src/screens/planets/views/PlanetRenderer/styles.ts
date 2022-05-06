import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const PlanetWrapper = styled.View`
  margin: 15px 10px 15px 10px;
  flex-direction: row;
`;

export const styles = StyleSheet.create({
    img: {
        width: 160,
        height: 170,
        borderTopLeftRadius: 7,
        borderBottomLeftRadius: 7,
    },
});
