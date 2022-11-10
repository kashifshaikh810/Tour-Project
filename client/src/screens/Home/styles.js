import {StyleSheet} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const styles = StyleSheet.create({
  container: tw`flex-1 bg-white`,
  tagContainer: tw`items-center pl-2 pr-3 flex-wrap`,
  tagItem: tw`bg-gray-100 p-2 pl-4 pr-4 m-2 ml-1.5 text-gray-400 text-base`,
  tourHeadingContainer: tw`w-full h-16 mb-2 items-center mt-4 pt-4`,
  tourHeading: tw`text-2xl border-b-2 border-gray-300 w-5/12 text-center pb-2`,
  card: tw`border-2 border-gray-100 w-11/12 h-96 self-center pb-2 mt-5 mb-5`,
  tourImage: tw`w-full h-40`,
  nameContainer: tw`ml-2 mt-2`,
  name: tw`text-base text-gray-400 capitalize`,
  tagsContainer: tw`flex-row mt-2`,
  tagText: tw`text-base text-blue-600 pl-2`,
  likeContainer: tw`flex-row items-center ml-3 mb-2 mt-5`,
  like: tw`ml-2 text-base text-blue-600`,
  titleAndDescriptionContainer: tw`pl-2`,
  title: tw`text-xl mt-2`,
  description: tw`text-sm w-8/12 mt-2 mb-2 text-base`,
  flexRow: tw`flex-row items-center`,
  readMore: tw`text-blue-600 pt-6 text-base`,
});

export default styles;
