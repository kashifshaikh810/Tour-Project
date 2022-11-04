import {StyleSheet} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const styles = StyleSheet.create({
  container: tw`flex-1 bg-white`,
  searchHeading: tw`w-full h-20 justify-center items-center`,
  search: tw`text-xl text-gray-500 border-b-2 border-gray-200 w-11/12 text-center pb-2`,
  textInput: tw`w-10/12 border-2 border-gray-300 rounded self-center pl-4 pr-4 mt-1 text-gray-600`,
  button: tw`w-11/12 h-11 bg-green-200 justify-center items-center rounded self-center mt-10 mb-5`,
  borderRedColor: tw`border-red-500`,
  inputAndIconContainer: tw`flex-row justify-center items-center mb-2`,
  icon: tw`ml-2`,
  errorText: tw`text-red-500 pl-5 pt-2`,
  card: tw`border-2 border-gray-100 w-11/12 h-96 self-center pb-2 mt-5 mb-5`,
  tourImage: tw`w-full h-40`,
  tagsContainer: tw`flex-row mt-5`,
  tagText: tw`text-base text-blue-600 pl-2`,
  likeContainer: tw`flex-row flex-1 items-center ml-3 mb-5 mt-5`,
  like: tw`ml-2 text-base text-blue-600`,
  titleAndDescriptionContainer: tw`pl-2`,
  title: tw`text-xl mt-2`,
  description: tw`text-sm w-8/12 mt-2 mb-2 text-base`,
  flexRow: tw`flex-row items-center`,
  readMore: tw`text-blue-600 pt-6 text-base`,
  loader: tw`mt-5`,
});

export default styles;
