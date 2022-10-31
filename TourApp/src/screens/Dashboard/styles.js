import {StyleSheet} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const styles = StyleSheet.create({
  container: tw`flex-1 bg-white`,
  scrollView: tw`flex-1`,
  headingContainer: tw`w-full h-20 justify-center items-center`,
  heading: tw`text-base text-gray-500 border-b-2 border-gray-100 w-11/12 text-center pb-1`,
  card: tw`w-11/12 flex-1 min-h-0 border-2 border-gray-100 self-center flex-row`,
  imageFile: tw`w-5/12 h-32`,
  contentContainer: tw`ml-3 mt-2`,
  title: tw`mt-2 text-sm text-gray-500`,
  iconContainer: tw`flex-row mt-2 w-9/12 justify-end`,
  marginRight: tw`mr-4`,
});

export default styles;
