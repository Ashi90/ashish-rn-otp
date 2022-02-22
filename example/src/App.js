import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { OtpInputs } from 'rn-custom-otp';


export default function App() {
  const [result, setResult] = React.useState<number | undefined>();

 

  return (
    <View style={styles.container}>
      <OtpInputs numberOfInputs = {6}/>
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
