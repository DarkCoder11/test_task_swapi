import { StyleSheet } from 'react-native';

import colors from 'src/theme/colors';
import { IS_IOS } from 'src/constants/constants';

export const styles = StyleSheet.create({
    tabBarStyle: {
        height: IS_IOS ? 80 : 60,
        backgroundColor: colors.dark,
        borderTopColor: 'transparent',
    },
});
