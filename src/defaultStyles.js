import { StyleSheet } from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  otpContainer: {
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderRadius: 6,
    borderWidth: 2,
    height: 53,
    margin: 30,
  },
  otpInput: {
    color: '#323B49',
    fontSize: 24,
    paddingTop: 10,
    textAlign: 'center',
    height: 53,
    width: 53,
  },
  inputsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  errorMessageContainer: {
    marginHorizontal: 25,
  },
  errorMessage: (errorMessage) => ({
    height: 1,
    bottom: 10,
    backgroundColor: errorMessage ? 'red' : '#5C73FF',
  }),
});
