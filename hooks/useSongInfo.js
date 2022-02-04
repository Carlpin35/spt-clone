import React from 'react';
import useSpotify from '../hooks/useSpotify';
import { currenTrackIdState, isPlayingState } from '../atoms/SongAtom';
import { useRecoilState } from 'recoil';
import { useState, useEffect } from 'react';

export default function useSongInfo() {
     const spotifyApi = useSpotify();
     const [currentTrackId, setCurrentTrackId] = useRecoilState(currenTrackIdState);
     const [songInfo, setSongInfo] = useState(null);

    useEffect(() => {
      const fetchSongInfo = async () => {
      	if (currentTrackId) {
      		const trackInfo = await fetch(
                `https://api.spotify.com/v1/tracks/${currentTrackId}`,
                {
                   headers: {
                      Authorization: `Bearer ${spotifyApi.getAccessToken()}`,
                 }
              }
      	   ).then(res => res.json());

      		setSongInfo(trackInfo);
      	 }
      }  	

  }, [currentTrackId, spotifyApi])



	return songInfo;
}