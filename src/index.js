import React, { PureComponent } from 'react';
import { Keyboard, Text, View } from 'react-native';
import defaultStyles from './defaultStyles';
import OtpInput from './OtpInput';
export default class OtpInputs extends PureComponent {
  constructor() {
    super(...arguments);
    this.state = {
      inputsArray: [],
      loading: false,
      otpCode: [],
    };
    this.maxIndex = this.props.numberOfInputs - 1;
    this.minIndex = 0;
    this.inputs = [];
    this._updateText = (text, index) => {
      if (text) {
        const otpCode = this.state.otpCode;
        otpCode[index] = text;

        this.props.handleChange && this.props.handleChange(otpCode.join(''));
        this.setState({ otpCode });
        if (index === this.maxIndex) {
          return Keyboard.dismiss();
        }
        if (index >= this.minIndex && index < this.maxIndex) {
          this._focusInput(index + 1);
        }
      }
    };
    this._handleBackspace = ({ nativeEvent }, index) => {
      if (nativeEvent.key === 'Backspace') {
        const otpCode = this.state.otpCode;
        otpCode[index] = '';
        this.props.handleChange && this.props.handleChange(otpCode.join(''));
        this.setState({ otpCode });
        if (index > this.minIndex && index <= this.maxIndex) {
          this._focusInput(index - 1);
        }
      }
    };

    this._resetInput = () => {
      this.setState({ otpCode: [] }, () => {
        this._focusInput(0);
      });
    };

    this._focusInput = (index) => {
      this.inputs[index].input.focus();
    };
    this._renderInputs = () => {
      const {
        clearTextOnFocus,
        errorMessage,
        focusedBorderColor,
        inputContainerStyles,
        inputStyles,
        inputTextErrorColor,
        keyboardType,
        numberOfInputs,
        selectTextOnFocus,
        unFocusedBorderColor,
      } = this.props;
      const { otpCode } = this.state;
      let inputArray = [];
      for (let index = 0; index < numberOfInputs; index++) {
        inputArray[index] = (
          <OtpInput
            clearTextOnFocus={clearTextOnFocus}
            containerStyles={inputContainerStyles}
            error={!!errorMessage}
            focusedBorderColor={focusedBorderColor}
            handleBackspace={(event) => this._handleBackspace(event, index)}
            inputStyles={inputStyles}
            key={index}
            keyboardType={keyboardType}
            ref={(input) => (this.inputs[index] = input)}
            selectTextOnFocus={selectTextOnFocus}
            textErrorColor={inputTextErrorColor}
            unFocusedBorderColor={unFocusedBorderColor}
            updateText={(text) => this._updateText(text, index)}
            value={otpCode[index]}
          />
        );
      }
      return inputArray.map((input) => input);
    };
  }
  componentDidMount() {
    this._renderInputs();
    if (this.props.isReset === true) {
      this._resetInput();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isReset !== this.props.isReset) {
      if (nextProps.isReset === true) {
        this._resetInput();
      }
    }
  }

  render() {
    const {
      containerStyles,
      errorMessage,
      errorMessageContainerStyles,
      errorMessageTextStyles,
    } = this.props;
    return (
      <View style={[defaultStyles.container, containerStyles]}>
        <View style={defaultStyles.inputsContainer}>
          {this._renderInputs()}
        </View>
        <View style={defaultStyles.errorMessage(errorMessage)} />
        {errorMessage && (
          <View
            style={[
              defaultStyles.errorMessageContainer,
              errorMessageContainerStyles,
            ]}
          >
            <Text testID="errorText" style={errorMessageTextStyles}>
              {errorMessage}
            </Text>
          </View>
        )}
      </View>
    );
  }
}
OtpInputs.defaultProps = {
  clearTextOnFocus: false,
  focusedBorderColor: '#083a81',
  handleChange: console.log,
  inputTextErrorColor: '#ff0000',
  keyboardType: 'phone-pad',
  numberOfInputs: 4,
  selectTextOnFocus: true,
  isReset: true,
  unFocusedBorderColor: '#d7dbe0',
};
