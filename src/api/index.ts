import { QueryClient } from 'react-query';

export { getList } from './getList';
export { getEvent } from './getEvent';

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: 3,
            staleTime: 1000 * 60 * 1000, // rather big number for caching after mount/unmount
        },
    },
});
