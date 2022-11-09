import {StyleSheet} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const styles = StyleSheet.create({
  container: tw`flex-1 bg-white`,
  scrollView: tw`flex-1`,
  card: tw`w-11/12 flex-1 min-h-0 border-2 border-gray-100 self-center mt-4 mb-4`,
  image: tw`w-full h-52`,
  iconAndTitleContainer: tw`flex-row items-center mt-4`,
  icon: tw`pl-1`,
  titleContainer: tw`flex-1 items-center`,
  title: tw`text-xl text-gray-500`,
  createdByContainer: tw`ml-3 mt-3`,
  createdBy: tw`text-base text-gray-500`,
  tagsContainer: tw`flex-row pl-1`,
  tags: tw`pl-1 text-gray-400 mt-1`,
  calenderContainer: tw`flex-row pl-1 pt-2 items-center`,
  day: tw`text-gray-500 text-base`,
  descriptionContainer: tw`p-3`,
  description: tw`text-base text-gray-500`,
});

export default styles;
