import React, { useMemo } from 'react';
import { View } from 'react-native';
import { useQuery } from 'react-query';
import { useNavigation } from '@react-navigation/native';

import { getPlanetById } from 'src/services/api/planets';
import { getPlanetImageUrl } from 'src/utils';
import { RenderStat, Wrapper } from 'src/components';

import { PlanetProps } from './types';

const Vehicle: React.FC<PlanetProps> = ({ route }) => {
    const navigation = useNavigation();

    const id = route.params.planetId;

    const { data, isLoading } = useQuery(id, getPlanetById);
    const uri = getPlanetImageUrl(id);

    const navigateBack = () => {
        navigation.goBack();
    };

    const dataList = useMemo(() => {
        return [
            {
                title: 'Diameter',
                stat: '123',
                symbol: 'm',
            },
        ];
    }, []);

    const dataListRendered = dataList.map(
        (item) =>
            item.stat && (
                <View key={item.title}>
                    <RenderStat stat={item.stat} title={item.title} symbol={item.symbol && item.symbol} />
                </View>
            ),
    );

    return (
        <Wrapper>
            {/*<Flex paddingString="15px 0 15px 15px">*/}
            {/*    <Button onPress={navigateBack}>*/}
            {/*        <Flex flexDirection="row" alignItems="center" width="55px" justifyContent="space-between">*/}
            {/*            <ChevronBack width={20} height={20} />*/}
            {/*            <Typography>Back</Typography>*/}
            {/*        </Flex>*/}
            {/*    </Button>*/}
            {/*</Flex>*/}
            {/*{!isLoading && (*/}
            {/*    <Flex marginString="0 15px">*/}
            {/*        <Typography type="h1">{data.name}</Typography>*/}
            {/*        <Flex marginString="15px 0">*/}
            {/*            <ImageFallback*/}
            {/*                imageUri={uri}*/}
            {/*                resizeMode="cover"*/}
            {/*                style={styles.img}*/}
            {/*                fallbackStyles={styles.img}*/}
            {/*                fallbackUri={FALLBACK_IMAGE_URI}*/}
            {/*            />*/}
            {/*            {dataListRendered}*/}
            {/*        </Flex>*/}
            {/*    </Flex>*/}
            {/*)}*/}
        </Wrapper>
    );
};

export default Vehicle;
