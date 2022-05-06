import React, { useMemo } from 'react';
import { FlatList } from 'react-native';

import { Flex } from 'src/components';

import { VehicleRenderer } from '../VehicleRenderer';
import { Vehicle } from '../../types';

export const VehicleView: React.FC<{ vehicles: Vehicle[] }> = ({ vehicles }) => {
    const dataList = useMemo(() => {
        return (
            <FlatList
                data={vehicles}
                removeClippedSubviews={true}
                showsVerticalScrollIndicator={false}
                keyExtractor={(i, index) => String(index)}
                renderItem={({ item }) => {
                    return <VehicleRenderer {...item} />;
                }}
            />
        );
    }, [vehicles]);

    return <Flex>{dataList}</Flex>;
};
