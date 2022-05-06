import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useQuery } from 'react-query';

import { ImageFallback, Button, Flex, Typography } from 'src/components';
import { getNumFromStr, getCharacterImageUrl } from 'src/utils';
import { FALLBACK_IMAGE_URI } from 'src/constants/constants';
import { ScreenRoutes } from 'src/navigation/routes';
import { CharacterType } from 'src/screens/main/types';
import { FemaleIcon, MaleIcon } from 'src/assets/icons';
import { getPlanetById } from 'src/services/api/planets';
import { MainScreenNavigatorStack } from 'src/navigation/navigators/main-screen-navigator/types';

import { styles, CharacterWrapper } from './styles';

export const CharacterRenderer = (character: CharacterType) => {
    const navigation = useNavigation<MainScreenNavigatorStack>();

    const id = getNumFromStr(character.url);
    const uri = getCharacterImageUrl(id);

    const planetId = getNumFromStr(character.homeworld);

    const { data: planet, isLoading } = useQuery(planetId, getPlanetById);

    const navigateToPlanet = () => {
        navigation.navigate(ScreenRoutes.Planet, { planetId });
    };

    return (
        <CharacterWrapper>
            <ImageFallback
                imageUri={uri}
                style={styles.img}
                resizeMode="cover"
                fallbackStyles={styles.img}
                fallbackUri={FALLBACK_IMAGE_URI}
            />
            <Flex marginString="10px">
                <Flex flexDirection="row" alignItems="center">
                    {character.gender === 'female' ? (
                        <FemaleIcon width={20} height={20} />
                    ) : (
                        <MaleIcon width={20} height={20} />
                    )}
                    <Flex marginString="0 0 0 5px" width="70%">
                        <Typography type="bodyLarge">{character.name}</Typography>
                    </Flex>
                </Flex>
                <Flex marginString="0 0 0 5px">
                    <Typography type="body">Height: {character.height}cm</Typography>
                    <Typography type="body">Mass: {character.mass}kg</Typography>
                    <Typography type="body" textTransform="capitalize">
                        Hair Color: {character.hair_color}
                    </Typography>
                    <Typography type="body" textTransform="capitalize">
                        Skin Color: {character.skin_color}
                    </Typography>
                    <Button onPress={navigateToPlanet}>
                        <Typography
                            textStyle={{ textDecorationLine: 'underline' }}
                            type="body"
                            textTransform="capitalize"
                        >
                            Home World: {!isLoading && planet?.name}
                        </Typography>
                    </Button>
                </Flex>
            </Flex>
        </CharacterWrapper>
    );
};
