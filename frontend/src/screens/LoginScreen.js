import React from 'react';
import LoginForm from '../components/LoginForm';
import { Box } from '../theme/primatives';
import { Authenticator } from 'aws-amplify-react-native';

const map = message => {
  if (/incorrect.*username.*password/i.test(message)) {
    return 'Incorrect username or password';
  }

  return message;
};

export default function LoginScreen({ navigation }) {
  return (
    <Authenticator
      // Optionally hard-code an initial state
      authState="signIn"
      // Pass in an already authenticated CognitoUser or FederatedUser object
      authData={'username'}
      // Fired when Authentication State changes
      onStateChange={authState => console.log(authState)}
      // An object referencing federation and/or social providers
      // The federation here means federation with the Cognito Identity Pool Service
      // *** Only supported on React/Web (Not React Native) ***
      // For React Native use the API Auth.federatedSignIn()
      // federated={myFederatedConfig}
      // A theme object to override the UI / styling
      // theme={myCustomTheme}
      // Hide specific components within the Authenticator
      // *** Only supported on React/Web (Not React Native)  ***
      // hide={
      //     [
      //         Greetings,
      //         SignIn,
      //         ConfirmSignIn,
      //         RequireNewPassword,
      //         SignUp,
      //         ConfirmSignUp,
      //         VerifyContact,
      //         ForgotPassword,
      //         TOTPSetup,
      //         Loading
      //     ]
      // }
      // or hide all the default components
      hideDefault={true}
      // Pass in an aws-exports configuration
      // amplifyConfig={myAWSExports}
      // Pass in a message map for error strings
      // errorMessage={myMessageMap}
      // Default components can be customized/passed in as child components. // Define them here if
      you used hideDefault={true}
    >
    </Authenticator>
  );
}

// <Greetings/>
// <SignIn federated={myFederatedConfig}/>
// <ConfirmSignIn/>
// <RequireNewPassword/>
// <SignUp/>
// <ConfirmSignUp/>
// <VerifyContact/>
// <ForgotPassword/>
// <TOTPSetup/>
// <Loading/>

LoginScreen.navigationOptions = {
  // header: null
  title: 'Login',
};
