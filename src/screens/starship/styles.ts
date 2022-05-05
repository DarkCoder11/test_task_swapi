import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

import { IS_IOS } from 'src/constants/constants';

export const Container = styled.ScrollView`
  padding: 0 10px 0 10px;
  margin-bottom: ${IS_IOS ? 15 : 50}px;
`;

export const styles = StyleSheet.create({
    img: {
        width: '100%',
        height: 320,
        borderRadius: 8,
    },
});
