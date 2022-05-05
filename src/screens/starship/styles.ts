import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  padding: 0 10px 0 10px;
  margin-bottom: 50px;
`;

export const styles = StyleSheet.create({
    img: {
        width: '100%',
        height: 320,
        borderRadius: 8,
    },
});
