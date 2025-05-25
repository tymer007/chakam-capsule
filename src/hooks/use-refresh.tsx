import { queryClient } from '@/components/Providers/queryProvider';


const useRefresh = () => {
  return async () => {
    await queryClient.invalidateQueries({
    //   queryKey: ['get-memes'],
      type:'all'
    });
  };
};
export default useRefresh;