import {StyleSheet} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const styles = StyleSheet.create({
  container: tw`flex-1 bg-white`,
  scrollView: tw`flex-1`,
  card: tw`w-11/12 h-4/6 mt-4 pt-5 m-1 self-center mt-5 mb-5`,
  headingAndIconContainer: tw`items-center pt-2`,
  headingText: tw`text-xl text-gray-600 mt-4`,
  textInput: tw`w-11/12 border-2 border-gray-300 rounded self-center pl-4 pr-4 mt-10 text-gray-600`,
  button: tw`self-center mt-10 mb-5`,
  borderRedColor: tw`border-red-500`,
  errorText: tw`text-red-500 pl-5 pt-2`,
  divider: tw`w-11/12 h-0.5 bg-gray-200 mt-2 self-center`,
  already: tw`flex-row h-24 justify-center items-center`,
  alreadyText: tw`text-xl pr-2 text-blue-600`,
  signIn: tw`text-xl text-blue-600`,
});

export default styles;
