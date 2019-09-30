import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationEvents } from 'react-navigation'
import NavLink from '../components/NavLink';
import { Context  } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';


const SigninScreen = () => {
    const { state, signin, clearErrorMessage } = useContext(Context);

    return(
        <View style={styles.container}>
            <NavigationEvents
            onWillBlur={clearErrorMessage} />
            <AuthForm
            headerText="Sign In to Your Account"
            errorMessage={state.errorMessage}
            onSubmit={signin}
            submitButtonText="Sign In"
            />
            <NavLink
            text="Dont have an account? Sign up instead"
            routeName="Signup"
            />
        </View>
    );
};

SigninScreen.navigationOptions = {
    header: null
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250
    }
});
export default SigninScreen;
