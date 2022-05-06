import React from 'react';
import { ScrollView, View } from 'react-native';
import { useQuery } from 'react-query';
import { useNavigation } from '@react-navigation/native';

import { ChevronBack } from 'src/assets/icons';
import { FALLBACK_IMAGE_URI } from 'src/constants/constants';
import { getCharacterImageUrl, getNumFromStr } from 'src/utils';
import { Button, Flex, ImageFallback, RenderStat, Typography, Wrapper } from 'src/components';
import { getCharacterById } from 'src/services/api/characters';
import { getPlanetById } from 'src/services/api/planets';
import { ScreenRoutes } from 'src/navigation/routes';
import { MainScreenNavigatorStack } from 'src/navigation/navigators/main-screen-navigator/types';

import { styles } from './styles';
import { CharacterProps } from './types';
import { VehicleList } from './views/VehicleList';

const Character: React.FC<CharacterProps> = ({ route }) => {
    const navigation = useNavigation<MainScreenNavigatorStack>();

    const id = route.params.characterId;

    const { data, isLoading } = useQuery([id, 'character'], getCharacterById);
    const uri = getCharacterImageUrl(id);

    const navigateBack = () => {
        navigation.goBack();
    };

    const dataList = [
        {
            title: 'Birth Year',
            stat: data.birth_year,
        },
        {
            title: 'Eye Color',
            stat: data.eye_color,
        },
        {
            title: 'Gender',
            stat: data.gender,
        },
        {
            title: 'Hair Color',
            stat: data.hair_color,
        },
        {
            title: 'Height',
            stat: data.height,
            symbol: 'cm',
        },
        {
            title: 'Mass',
            stat: data.mass,
            symbol: 'kg',
        },
        {
            title: 'Skin Color',
            stat: data.skin_color,
        },
    ];

    const dataListRendered = dataList.map(
        (item) =>
            item.stat && (
                <View key={item.title}>
                    <RenderStat stat={item.stat} title={item.title} symbol={item.symbol && item.symbol} />
                </View>
            ),
    );

    const planetId = getNumFromStr(data?.homeworld);

    const { data: planet, isLoading: planetLoading } = useQuery([planetId, 'planet'], getPlanetById);

    const navigateToPlanet = () => {
        navigation.navigate(ScreenRoutes.Planet, { planetId });
    };

    const vehicleRenderer = data?.vehicles.map((uri: string) => (
        <View key={uri}>
            <VehicleList vehicleId={getNumFromStr(uri)} />
        </View>
    ));

    return (
        <Wrapper>
            <Flex paddingString="15px 0 15px 15px">
                <Button onPress={navigateBack}>
                    <Flex flexDirection="row" alignItems="center" width="55px" justifyContent="space-between">
                        <ChevronBack width={20} height={20} />
                        <Typography>Back</Typography>
                    </Flex>
                </Button>
            </Flex>
            {!isLoading && (
                <ScrollView contentContainerStyle={{ paddingBottom: 40 }} showsVerticalScrollIndicator={false}>
                    <Flex marginString="0 15px">
                        <Typography type="h1">{data?.name}</Typography>
                        <Flex marginString="15px 0">
                            <ImageFallback
                                imageUri={uri}
                                resizeMode="cover"
                                style={styles.img}
                                fallbackStyles={styles.img}
                                fallbackUri={FALLBACK_IMAGE_URI}
                            />
                            {dataListRendered}
                            {!planetLoading && (
                                <Button onPress={navigateToPlanet}>
                                    <Flex flexDirection="row" alignItems="center">
                                        <Typography type="bodyLarge" fontFamily="bold" color="empire-blue">
                                            Homeworld:
                                        </Typography>
                                        <Flex marginString="0 8px">
                                            <Typography type="bodyLarge" fontFamily="bold" color="empire-blue">
                                                {planet.name}
                                            </Typography>
                                        </Flex>
                                    </Flex>
                                </Button>
                            )}
                            {data.vehicles.length && vehicleRenderer}
                        </Flex>
                    </Flex>
                </ScrollView>
            )}
        </Wrapper>
    );
};

export default Character;
