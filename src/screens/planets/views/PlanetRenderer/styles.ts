import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const PlanetWrapper = styled.View`
  margin: 15px 10px 15px 10px;
  border-width: 2px;
  border-radius: 8px;
  border-color: ${({ theme }) => theme.colors.white};
  flex-direction: row;
`;

export const styles = StyleSheet.create({
    img: {
        height: 150,
        width: 150,
        borderTopLeftRadius: 7,
        borderBottomLeftRadius: 7,
    },
});
