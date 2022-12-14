import {StyleSheet} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const styles = StyleSheet.create({
  container: tw`flex-1 bg-white`,
  scrollView: tw`flex-1`,
  profileImage: tw`w-7/12 h-36 self-center mt-7 relative left-10 right-0 bottom-0 top-0`,
  passwordButton: tw`w-11/12 h-11 bg-green-200 justify-center items-center rounded self-center mb-1`,
  imageStyle: tw`rounded-full`,
  profileEditIconContainer: tw`w-6/12 h-32 mt-1 justify-end items-end`,
  EditProfileIcon: tw`p-2 rounded-full`,
  headingContainer: tw`w-full h-14 justify-center items-center`,
  heading: tw`text-base text-gray-500`,
  card: tw`w-11/12 h-36 border-2 border-gray-100 self-center flex-row rounded-tl-md rounded-bl-md rounded-br-md rounded-tr-md mt-3`,
  imageFile: tw`w-5/12 h-36 rounded-tl-md rounded-bl-md rounded-br-md rounded-tr-md`,
  contentContainer: tw`ml-3 mt-2`,
  title: tw`mt-2 text-sm text-gray-500`,
  onlyOneLine: {minWidth: '60%', maxWidth: '75%'},
  iconContainer: tw`flex-row justify-end`,
  marginLeft: tw`ml-4`,
  buttonAndIcons: tw`flex-row mt-4`,
  button: tw`w-full p-1 pl-3 pr-3 rounded-xl items-center`,
  divider: tw`w-11/12 h-0.5 bg-gray-200 mt-3 mb-2 self-center`,
});

export default styles;
