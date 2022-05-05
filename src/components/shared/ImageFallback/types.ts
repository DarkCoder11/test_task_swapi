import { ImageResizeMode, ImageStyle, StyleProp } from 'react-native';

export type ImageFallbackProps = {
    imageUri: string;
    fallbackUri: string | null;
    style: StyleProp<ImageStyle>;
    fallbackStyles: StyleProp<ImageStyle>;
    resizeMode: ImageResizeMode;
};
