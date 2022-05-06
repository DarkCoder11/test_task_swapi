import React, { useMemo, useRef } from 'react';
import { useInfiniteQuery } from 'react-query';
import { useScrollToTop } from '@react-navigation/native';
import { ActivityIndicator, FlatList, RefreshControl } from 'react-native';

import { IS_IOS } from 'src/constants/constants';
import { Flex, Typography, Wrapper } from 'src/components';
import { getCharacters } from 'src/services/api/characters';

import { CharacterView } from './views';

const Main = () => {
    const ref = useRef(null);

    useScrollToTop(ref);
    const { data, fetchNextPage, hasNextPage, isLoading, isRefetching, refetch } = useInfiniteQuery(
        'characters',
        getCharacters,
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
                showsVerticalScrollIndicator={false}
                onEndReached={() => hasNextPage && fetchNextPage()}
                keyExtractor={(i, index) => String(index)}
                renderItem={({ item }) => <CharacterView characters={item.results} />}
                refreshControl={<RefreshControl refreshing={isRefetching} onRefresh={() => refetch()} />}
            />
        );
    }, [data?.pages, fetchNextPage, hasNextPage, isRefetching, refetch]);

    return (
        <Wrapper>
            <Flex paddingString="10px">
                <Typography type="h1">Characters</Typography>
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

export default Main;
