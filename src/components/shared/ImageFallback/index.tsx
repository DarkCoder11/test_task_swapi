import React, { useEffect, useState } from 'react';
import { Image } from 'react-native';

import { ImageFallbackProps } from './types';

const ImageFallback: React.FC<ImageFallbackProps> = ({ imageUri, fallbackUri, style }) => {
    const [loading, setLoading] = useState<boolean>(true);
    const [isValid, setIsValid] = useState<boolean | null>(null);

    useEffect(() => {
        fetch(imageUri).then((res) => {
            setIsValid(res.status === 200);
            setLoading(false);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (loading || !isValid) {
        return <Image style={style} source={{ uri: fallbackUri }} />;
    }
    return <Image style={style} source={{ uri: imageUri }} />;
};

export default ImageFallback;
