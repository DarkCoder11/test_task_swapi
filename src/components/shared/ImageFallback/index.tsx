import React, { useEffect, useState } from 'react';
import { Image } from 'react-native';

import { ImageFallbackProps } from './types';

const ImageFallback: React.FC<ImageFallbackProps> = ({ imageUri, fallbackUri, resizeMode, fallbackStyles, style }) => {
    const [loading, setLoading] = useState<boolean>(true);
    const [isValid, setIsValid] = useState<boolean | null>(null);

    useEffect(() => {
        fetch(imageUri).then((res) => {
            setIsValid(res.status === 200);
            setLoading(false);
        });
    }, [imageUri]);

    if (loading || !isValid) {
        return fallbackUri ? <Image style={fallbackStyles} source={{ uri: fallbackUri }} /> : null;
    }
    return <Image resizeMode={resizeMode} style={style} source={{ uri: imageUri }} />;
};

export default ImageFallback;
