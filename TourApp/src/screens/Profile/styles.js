import {StyleSheet} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const styles = StyleSheet.create({
  container: tw`flex-1 bg-white`,
  scrollView: tw`flex-1`,
  updateProfileHeading: tw`w-11/12 items-center mt-5`,
  updateProfile: tw`text-xl text-gray-500 border-b-2 border-gray-200 w-6/12 text-center pb-2`,
  profileImage: tw`w-7/12 h-36 self-center mt-7 relative left-10 right-0 bottom-0 top-0`,
  updatedAtContainer: tw`w-11/12 items-end mt-5 mb-2`,
  updatedAt: tw`text-base text-gray-400`,
  imageStyle: tw`rounded-full`,
  profileEditIconContainer: tw`w-6/12 h-32 mt-1 justify-end items-end`,
  EditProfileIcon: tw`p-2 rounded-full`,
  textInput: tw`w-11/12 border-2 border-gray-300 rounded self-center pl-4 pr-4 mt-10 text-gray-600`,
  errorText: tw`text-red-500 pl-5 pt-2`,
  borderRedColor: tw`border-red-500`,
  button: tw`w-11/12 h-11 bg-green-200 justify-center items-center rounded self-center mt-10 mb-5`,
});

export default styles;
