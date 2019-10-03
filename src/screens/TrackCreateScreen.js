import '../_mockLocation';
import React, { useContext, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import * as Permissions from 'expo-permissions';
import Map from '../components/Map';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/TrackForm';


const TrackCreateScreen = ({ isFocused }) => {
    const { state: { recording }, addLocation } = useContext(LocationContext);
    const callback = useCallback(location => {
        addLocation(location, recording);
    }, [recording]);
    
    const [err] = useLocation(isFocused || recording, callback );
    // const [err, setErr] = useState(null);

    // const startWatching = async () => {
    //     try {
    //          await Permissions.askAsync(Permissions.LOCATION);
    //          await Location.watchPositionAsync({
    //              accuracy: Location.Accuracy.BestForNavigation,
    //              timeInterval: 1000,
    //              distanceInterval: 10
    //          }, (location) => {
    //              addLocation(location);
    //          });
    //     } catch (e) {
    //             setErr(e);    
    //     }
    // };

    // useEffect(() => {
    //     startWatching();
    // }, []);
    
    return(
       <SafeAreaView forceInset={{ top: 'always'}}>
           <Text h2>Create a Track</Text>
           <Map />
           {err ? <Text>Please enable location services</Text> : null}
           <TrackForm />
       </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);
