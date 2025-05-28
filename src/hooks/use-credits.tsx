import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import { useLocalStorage } from 'usehooks-ts';

const useCredits = () => {
    const [credits, setCredits] = useLocalStorage<number>('credits', 0);
       const { data } = useQuery({
        queryKey: ['get-credits'],
        queryFn: async () => {
          const res = await axios.get('api/credits')
          setCredits(res.data);
          return res.data;
        },
      });
    
    
      return { credits: data?.credit ?? 0, setCredits };
}

export default useCredits