import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useQuery } from 'react-query';

import { ImageFallback, Button, RenderStat } from 'src/components';
import { getStarshipImageUrl } from 'src/utils';
import { FALLBACK_IMAGE_URI } from 'src/constants/constants';
import { ScreenRoutes } from 'src/navigation/routes';
import { StarshipScreenScreenNavigatorStack } from 'src/navigation/navigators/starships-screen-navigator/types';
import { getStarshipById } from 'src/services/api/starships';

import { styles, StarshipCard } from './styles';

export const StarshipRenderer = ({ id }: { id: string }) => {
    const navigation = useNavigation<StarshipScreenScreenNavigatorStack>();

    const { data: starship, isLoading } = useQuery([id, 'starship'], getStarshipById);

    const uri = getStarshipImageUrl(id);

    const navigateStarship = () => {
        navigation.navigate(ScreenRoutes.Starship, { id, uri });
    };

    const dataList = [
        {
            title: 'name',
            stat: starship?.name,
        },
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
            {!isLoading && (
                <StarshipCard>
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
            )}
        </View>
    );
};
