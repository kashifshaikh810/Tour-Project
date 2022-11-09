import {StyleSheet} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const styles = StyleSheet.create({
  container: tw`flex-1 bg-white`,
  tourHeadingContainer: tw`w-full mb-2 items-center mt-4 pt-4`,
  tourHeading: tw`text-2xl border-b-2 border-gray-100 w-11/12 pb-2 text-center`,
  card: tw`w-11/12 h-28 border-2 border-gray-100 self-center mt-4`,
  image: tw`w-5/12 h-28`,
  cardContent: tw`flex-row`,
  title: {minWidth: '70%', maxWidth: '70%'},
  marginTop: tw`mt-2 ml-2`,
  button: tw`w-5/12 h-7 ml-2 mt-3 rounded-full justify-center items-center`,
});

export default styles;
