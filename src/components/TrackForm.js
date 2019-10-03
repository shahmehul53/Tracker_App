import React, { useContext } from 'react';
import { Input, Button } from 'react-native-elements';
import Spacer from './Spacer'
import { View } from 'react-native';
import { Context as LocationContext } from '../context/LocationContext';


const TrackForm = () => {
    const { state: { name, recording, locations }, 
        startRecording, 
        stopRecording, 
        changeName 
    } = useContext(LocationContext);


    return (
        <>
            <Spacer>
            <Input placeholder="Enter name" value={name} onChangeText={changeName} />
            </Spacer>
            <Spacer>
            {recording 
            ? (<Button title="Stop Recording" onPress={stopRecording} />)
            : (<Button style = {{}}title = "Start Recording" onPress={startRecording} />
            )}
            </Spacer>
            <Spacer>
            {
                !recording && locations.length
                ? <Button title="Save Recording" />
                : null
            }
            </Spacer>
        </>
    );
};

export default TrackForm;