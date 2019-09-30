import React from 'react';
import { StyleSheet, View, TouchableOpacity,Text } from 'react-native';
import Spacer from './Spacer';
import { withNavigation } from 'react-navigation';

const NaviLink = ({ navigation, text, routeName }) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
               <Spacer>
               <Text style={styles.link}>{text}</Text>
               </Spacer>
           </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    link: {
        color: 'blue'
    }
});

export default withNavigation(NaviLink);

