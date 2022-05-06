import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const StarshipCard = styled.View`
  margin: 15px 10px 15px 10px;
  border-width: 2px;
  border-radius: 8px;
  padding: 0 10px 0 10px;
  border-color: ${({ theme }) => theme.colors.white};
`;

export const styles = StyleSheet.create({
    img: {
        marginTop: 10,
        width: '100%',
        height: 320,
        borderRadius: 8,
    },
    fallbackImg: {
        marginTop: 10,
        width: '100%',
        height: 110,
        borderRadius: 8,
    },
});
