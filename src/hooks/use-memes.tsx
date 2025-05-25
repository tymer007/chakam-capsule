import { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocalStorage } from 'usehooks-ts';
import { DrizzleMeme } from '@/lib/db/schema';
import { useQuery } from '@tanstack/react-query';

export type UseMemesResult = {
  memes: DrizzleMeme[];
  meme: DrizzleMeme | undefined;
  memeId: string;
  setMemeId: (id: string) => void;
};




const useMemes = (): UseMemesResult => {
  const [memeId, setMemeId] = useLocalStorage<string>('memeId', '');

   const { data: memes = [], refetch } = useQuery({
    queryKey: ['get-memes'],
    queryFn: async () => {
      const res = await axios.get('api/chakam');
      return res.data as DrizzleMeme[];
    },
  });

  const meme = memes.find((m) => m.id === memeId);

  return { memes, meme, memeId, setMemeId };
};
export default useMemes;
