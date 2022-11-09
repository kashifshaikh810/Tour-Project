import {StyleSheet} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const styles = StyleSheet.create({
  container: tw`flex-1 bg-white`,
  scrollView: tw`flex-1`,
  loader: tw`flex-1 justify-center items-center`,
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
  relatedTourHeading: tw`w-11/12 items-center flex-row`,
  relatedTourHeadingText: tw`text-base text-gray-600`,
  leftLine: tw`ml-4 mr-4 w-4/12 h-0.5 bg-gray-400`,
  rightLine: tw`ml-4 mr-2 w-4/12 h-0.5 bg-gray-400`,
  relatedTourCard: tw`border-2 border-gray-100 w-11/12 h-80 mt-5 mb-5 ml-5`,
  tourImage: tw`w-full h-40`,
  relatedTourTagsContainer: tw`flex-row mt-5`,
  tagText: tw`text-base text-blue-600 pl-2`,
  titleAndDescriptionContainer: tw`pl-2`,
  relatedTourTitle: tw`text-xl mt-2`,
  relatedTourDescription: tw`text-sm w-full mt-2 mb-2 text-base`,
});

export default styles;
