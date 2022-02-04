import { atom } from 'recoil';


 export const currenTrackIdState = atom({
 	key: "currenTrackIdState", //unique id from other atoms/selectors
 	default: null, // default value (initial value)	
 }); 

 export const isPlayingState = atom({
 	key: "isPlayingState",
 	default: false,
 })