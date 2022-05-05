import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

import { CardColors } from 'src/hooks/useImageColors/types';
import { IS_IOS } from 'src/constants/constants';

export const StarshipCard = styled.View<{ colors: CardColors; picLoading: boolean }>`
  margin: 15px 10px 15px 10px;
  border-width: 2px;
  border-radius: 8px;
  padding: 0 10px 0 10px;
  border-color: ${({ theme, colors, picLoading }) =>
      !picLoading ? (IS_IOS ? colors.secondary : colors.primary) : theme.colors['crawl-yellow']};
`;

export const styles = StyleSheet.create({
    img: {
        width: '100%',
        height: 320,
        borderRadius: 8,
    },
    fallbackImg: {
        width: '100%',
        height: 110,
        borderRadius: 8,
    },
});
