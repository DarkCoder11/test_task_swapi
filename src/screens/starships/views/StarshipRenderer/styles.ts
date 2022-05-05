import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const StarshipCard = styled.View`
  margin: 0 10px 10px 10px;
  border-width: 5px;
  border-radius: 8px;
  padding: 0 10px 0 10px;
  border-color: ${({ theme }) => theme.colors.grey};
`;

export const styles = StyleSheet.create({
    fallbackImg: {
        width: '100%',
        height: 400,
        borderRadius: 8,
    },
});
