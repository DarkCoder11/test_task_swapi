import { ImageStyle, StyleProp } from 'react-native';

export type ImageFallbackProps = {
    imageUri: string;
    fallbackUri: string;
    style: StyleProp<ImageStyle>;
};
