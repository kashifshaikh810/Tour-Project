import {StyleSheet} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const styles = StyleSheet.create({
  container: tw`flex-1 bg-white`,
  tourHeadingContainer: tw`w-full h-16 mb-2 items-center mt-4 pt-4`,
  tourHeading: tw`text-2xl border-b-2 border-gray-300 w-5/12 text-center pb-2`,
  card: tw`border-2 border-gray-100 w-11/12 flex-1 min-h-0 self-center pb-2 mt-5 mb-5`,
  tourImage: tw`w-full h-64`,
  tagsContainer: tw`flex-row mt-5`,
  tagText: tw`text-base text-blue-600 pl-2`,
  likeContainer: tw`flex-row flex-1 items-center justify-end mr-2`,
  like: tw`ml-2 text-base text-blue-600`,
  titleAndDescriptionContainer: tw`pl-2`,
  title: tw`text-xl mt-2`,
  description: tw`text-sm w-8/12 mt-2 mb-2 text-base`,
  flexRow: tw`flex-row items-center`,
  readMore: tw`text-blue-600 pt-6 text-base`,
});

export default styles;
