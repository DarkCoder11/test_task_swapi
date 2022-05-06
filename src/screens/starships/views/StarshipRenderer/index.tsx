import React, { useMemo } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Flex, ImageFallback, Typography, Button, RenderStat } from 'src/components';
import { getNumFromStr, getStarshipImageUrl } from 'src/utils';
import { FALLBACK_IMAGE_URI, SOUND_SPEED } from 'src/constants/constants';
import { ScreenRoutes } from 'src/navigation/routes';
import { StarshipScreenScreenNavigatorStack } from 'src/navigation/navigators/starships-screen-navigator/types';

import { styles, StarshipCard } from './styles';

import { StarshipsParams } from '../../types';

const modelAndNameMatch = (name: string, model: string) => {
    if (name.match(model)) {
        return (
            <Typography type="h1-small" fontFamily="semiBold">
                {name}
            </Typography>
        );
    }
    return (
        <Flex>
            <Typography type="h1-small" fontFamily="semiBold">
                {name}
            </Typography>
            <Typography type="bodyLarge">{model}</Typography>
        </Flex>
    );
};

export const StarshipRenderer = (starship: StarshipsParams) => {
    const navigation = useNavigation<StarshipScreenScreenNavigatorStack>();

    const id = getNumFromStr(starship.url);
    const uri = getStarshipImageUrl(id);

    const navigateStarship = () => {
        navigation.navigate(ScreenRoutes.Starship, { id, uri });
    };

    const dataList = useMemo(() => {
        return [
            {
                title: 'Crew',
                stat: starship?.crew,
            },
            {
                title: 'Class',
                stat: starship?.starship_class,
            },
            {
                title: 'Max speed',
                stat: starship?.max_atmosphering_speed,
                symbol: 'C',
            },
        ];
    }, [starship?.crew, starship?.max_atmosphering_speed, starship?.starship_class]);

    const dataListRenderer = dataList.map(
        (item) =>
            item.stat && (
                <View key={item.title}>
                    <RenderStat textType="h3" stat={item.stat} title={item.title} symbol={item.symbol && item.symbol} />
                </View>
            ),
    );
    return (
        <View>
            <StarshipCard>
                <Button onPress={navigateStarship}>
                    <Flex paddingString="10px 0 10px 0">{modelAndNameMatch(starship.name, starship.model)}</Flex>
                </Button>
                <Button onPress={navigateStarship}>
                    <ImageFallback
                        imageUri={uri}
                        style={styles.img}
                        resizeMode="cover"
                        fallbackStyles={styles.fallbackImg}
                        fallbackUri={FALLBACK_IMAGE_URI}
                    />
                </Button>
                {dataListRenderer}
            </StarshipCard>
        </View>
    );
};
