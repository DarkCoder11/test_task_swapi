import React, { useMemo, useRef } from 'react';
import { useInfiniteQuery } from 'react-query';
import { useScrollToTop } from '@react-navigation/native';
import { ActivityIndicator, FlatList, RefreshControl } from 'react-native';

import { Typography, Wrapper } from 'src/components';
import { getStarships } from 'src/services/api/starships';

import { StarshipsView } from './views';

const Starships = () => {
    const ref = useRef(null);

    useScrollToTop(ref);
    const { data, fetchNextPage, hasNextPage, isLoading, isRefetching, refetch, isError } = useInfiniteQuery(
        'exampleState',
        getStarships,
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
                onEndReached={() => fetchNextPage()}
                keyExtractor={(i, index) => String(index)}
                renderItem={({ item }) => <StarshipsView starships={item.results} />}
                refreshControl={<RefreshControl refreshing={isRefetching} onRefresh={() => refetch()} />}
            />
        );
    }, [data?.pages, fetchNextPage, isRefetching, refetch]);

    return (
        <Wrapper>
            <Typography>Starships</Typography>
            {isLoading || isError ? <ActivityIndicator /> : dataList}
            {!isLoading && !hasNextPage && <Typography>You can't load more</Typography>}
        </Wrapper>
    );
};

export default Starships;
