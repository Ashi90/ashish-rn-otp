# rn-custom-otp

custom otp view for react native

## Installation

```sh
npm install rn-custom-otp
```

OR

```sh
yarn add rn-custom-otp
```

![Example](https://github.com/Ashi90/ashish-rn-otp/blob/master/otpinput.png)| ![Example](https://github.com/Ashi90/ashish-rn-otp/blob/master/otp.gif)

## Usage

```js
import { OtpInputs } from 'rn-custom-otp';

// ...

return (
    <View>
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
            inputStyles={} // Pass textinput style if applicable
            inputContainerStyles={}//Pass you style
      />
    </View>
  );
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

```

```
