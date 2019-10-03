import { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

export default (shouldTrack, callback) => {
    const [err, setErr] = useState(null);
     

    useEffect(() => {
        let subscriber;
        const startWatching = async () => {
            try {
                 await Permissions.askAsync(Permissions.LOCATION);
                 subscriber =  await Location.watchPositionAsync({
                     accuracy: Location.Accuracy.BestForNavigation,
                     timeInterval: 1000,
                     distanceInterval: 10
                 }, 
                 callback
                 );
            } catch (e) {
                    setErr(e);    
            }
        };

        if (shouldTrack) {
            startWatching();
        } else {
         //stop watching
         if (subscriber) {
            subscriber.remove();
         } 
         subscriber = null;
        }
        return () => {
            if(subscriber){
                subscriber.remove();
            }
        }
        
    }, [shouldTrack, callback]);

    return [err];
};