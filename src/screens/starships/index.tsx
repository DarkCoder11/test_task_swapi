import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useInfiniteQuery } from 'react-query';

import { Typography } from 'src/components';
import { getStarships } from 'src/services/api/starships';

const Starships = () => {
    // const ref = React.useRef(null);
    //
    // useScrollToTop(ref);
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

    console.warn(data);

    // const dataList = useMemo(() => {
    //   return (
    //     <FlatList
    //       ref={ref}
    //       data={data?.pages}
    //       maxToRenderPerBatch={5}
    //       onEndReachedThreshold={0.4}
    //       removeClippedSubviews={true}
    //       showsVerticalScrollIndicator={false}
    //       onEndReached={() => fetchNextPage()}
    //       keyExtractor={(i, index) => String(index)}
    //       renderItem={({item}) => <Typography>Text</Typography>}
    //       refreshControl={
    //         <RefreshControl
    //           refreshing={isRefetching}
    //           onRefresh={() => refetch()}
    //         />
    //       }
    //     />
    //   );
    // }, [data?.pages, fetchNextPage, isRefetching, refetch]);
    return (
        <SafeAreaView>
            <Typography>Starships</Typography>
        </SafeAreaView>
    );
};

export default Starships;
