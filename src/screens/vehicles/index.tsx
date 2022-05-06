import React, { useMemo, useRef } from 'react';
import { useInfiniteQuery } from 'react-query';
import { useScrollToTop } from '@react-navigation/native';
import { ActivityIndicator, FlatList, RefreshControl } from 'react-native';

import { IS_IOS } from 'src/constants/constants';
import { getVehicles } from 'src/services/api/vehicles';
import { Flex, Typography, Wrapper } from 'src/components';

import { VehicleView } from './views';

const Vehicles: React.FC = () => {
    const ref = useRef(null);
    useScrollToTop(ref);

    const { data, fetchNextPage, hasNextPage, isLoading, isRefetching, refetch } = useInfiniteQuery(
        'vehicles',
        getVehicles,
        {
            getNextPageParam: (lastPage) => {
                return lastPage.next;
            },
            getPreviousPageParam: (firstPage) => {
                return firstPage.previous;
            },
        },
    );

    const dataList = useMemo(() => {
        return (
            <FlatList
                ref={ref}
                data={data?.pages}
                maxToRenderPerBatch={10}
                onEndReachedThreshold={0.4}
                removeClippedSubviews={true}
                showsVerticalScrollIndicator={false}
                onEndReached={() => hasNextPage && fetchNextPage()}
                keyExtractor={(i, index) => String(index)}
                renderItem={({ item }) => <VehicleView vehicles={item.results} />}
                refreshControl={<RefreshControl refreshing={isRefetching} onRefresh={() => refetch()} />}
            />
        );
    }, [data?.pages, fetchNextPage, hasNextPage, isRefetching, refetch]);

    return (
        <Wrapper>
            <Flex paddingString="10px">
                <Typography type="h1">Vehicles</Typography>
            </Flex>
            {isLoading ? <ActivityIndicator /> : <Flex marginString={`0 0 ${IS_IOS ? 100 : 120}px 0`}>{dataList}</Flex>}
            {!hasNextPage && !isLoading && (
                <Typography type="label" textAlign="center">
                    You can't load more
                </Typography>
            )}
        </Wrapper>
    );
};

export default Vehicles;
