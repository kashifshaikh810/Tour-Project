import {StyleSheet} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const styles = StyleSheet.create({
  container: tw`flex-1 bg-white`,
  tourHeadingContainer: tw`w-full mb-2 items-center mt-4 pt-4`,
  tourHeading: tw`text-2xl border-b-2 border-gray-100 w-11/12 pb-2 text-center`,
  card: tw`w-11/12 h-28 border-2 border-gray-100 self-center mt-4`,
  image: tw`w-5/12 h-28`,
  cardContent: tw`flex-row`,
  title: tw`text-sm w-9/12`,
  marginTop: tw`mt-2 ml-2`,
  button: tw`w-5/12 p-1 ml-2 mt-2 rounded-xl pl-4`,
});

export default styles;
