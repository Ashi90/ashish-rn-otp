import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { OtpInputs } from 'rn-custom-otp';


export default function App() {
  const [result, setResult] = React.useState<number | undefined>();

 

  return (
    <View style={styles.container}>
      <OtpInputs 
       numberOfInputs = {6} // pass any number as per requirements
       focusedBorderColor={'blue'}
       unFocusedBorderColor={'black'}
       clearTextOnFocus={true}
       errorMessage={"Invalid OTP"} // pass error message if applicable
       inputTextErrorColor={'black'}
       errorMessageTextStyles={{color: 'red'}} // Error message text style
       handleChange={code => {
        Console.log("you code ==>", code)
        // Do your code
       }}
       keyboardType={'number-pad'}
       secureTextEntry={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
