import React, { useMemo } from 'react';
import { FlatList } from 'react-native';

import { Flex } from 'src/components';
import { getNumFromStr } from 'src/utils';

import { VehicleRenderer } from '../VehicleRenderer';
import { Vehicle } from '../../types';

export const VehicleView: React.FC<{ vehicles: Vehicle[] }> = ({ vehicles }) => {
    const vehiclesDataList = useMemo(() => {
        return (
            <FlatList
                data={vehicles}
                showsVerticalScrollIndicator={false}
                keyExtractor={(i, index) => String(index)}
                renderItem={({ item }) => {
                    return <VehicleRenderer id={getNumFromStr(item.url)} />;
                }}
            />
        );
    }, [vehicles]);

    return <Flex>{vehiclesDataList}</Flex>;
};
