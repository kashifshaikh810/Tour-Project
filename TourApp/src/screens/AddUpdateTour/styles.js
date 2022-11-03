import {StyleSheet} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const styles = StyleSheet.create({
  container: tw`flex-1 bg-white`,
  contentContainer: tw`border-2 border-gray-200 w-11/12 flex-1 min-h-0 mt-5 self-center pt-3 mb-5`,
  addTour: tw`text-xl text-gray-800 text-center`,
  textInput: tw`w-11/12 border-2 border-gray-200 rounded self-center pl-4 pr-4 mt-5 text-gray-500`,
  tagTextInput: tw`w-11/12 h-48 border-2 border-gray-200 rounded self-center pl-4 pr-4 mt-5 text-gray-500 p-3 pt-5`,
  enterTagPlaceholder: tw`absolute top-9 left-8 right-0 bottom-0 text-gray-500`,
  descriptionTextInput: tw`w-11/12 border-2 border-gray-200 rounded self-center pl-4 pr-4 mt-5 text-gray-500 p-3`,
  chooseFileButton: tw`w-11/12 h-11 border-2 border-gray-200 bg-green-200 justify-center items-center rounded self-center mt-1`,
  button: tw`w-11/12 h-11 justify-center items-center rounded self-center mt-1 mb-5`,
  borderRedColor: tw`border-red-400`,
  borderGrayColor: tw`border-gray-200`,
  errorText: tw`text-red-500 pl-5 pt-2`,
  tagsContainer: tw`p-1 pl-4 pr-1 rounded-full bg-gray-200 mr-4 items-center justify-center flex-row mb-3`,
  tag: tw`text-sm text-gray-500`,
  closeIcon: tw`text-gray-400 pl-2`,
  noFileContainer: tw`h-10 w-11/12 mt-1 pl-4 flex-row items-center`,
  noFile: tw`text-sm text-gray-600`,
  lightGrayText: tw`text-gray-500`,
  textRed: {color: 'red'},
  marginBottom: tw`mb-5`,
});

export default styles;
