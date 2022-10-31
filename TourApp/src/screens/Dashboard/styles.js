import {StyleSheet} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const styles = StyleSheet.create({
  container: tw`flex-1 bg-white`,
  scrollView: tw`flex-1`,
  headingContainer: tw`w-full h-20 justify-center items-center`,
  heading: tw`text-base text-gray-500 border-b-2 border-gray-100 w-11/12 text-center pb-1`,
  card: tw`w-11/12 flex-1 min-h-0 border-2 border-gray-100 self-center flex-row rounded-br-md rounded-tr-md`,
  imageFile: tw`w-5/12 h-32 rounded-tl-md rounded-bl-md rounded-br-md rounded-tr-md`,
  contentContainer: tw`ml-3 mt-2`,
  title: tw`mt-2 text-sm text-gray-500`,
  onlyOneLine: {minWidth: '60%', maxWidth: '75%'},
  iconContainer: tw`flex-row justify-end`,
  marginLeft: tw`ml-4`,
  buttonAndIcons: tw`flex-row mt-4`,
  button: tw`w-full p-1 pl-3 pr-3 rounded-xl items-center`,
});

export default styles;
