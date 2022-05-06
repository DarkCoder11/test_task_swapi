import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const PlanetWrapper = styled.View`
  margin: 15px 10px 15px 10px;
  flex-direction: row;
  border-width: 2px;
  border-radius: 8px;
  border-color: ${({ theme }) => theme.colors['jedi-blue']};
  
`;

export const styles = StyleSheet.create({
    img: {
        marginVertical: 8,
        width: 160,
        height: 170,
        marginLeft: 5,
        borderRadius: 10,
    },
});
