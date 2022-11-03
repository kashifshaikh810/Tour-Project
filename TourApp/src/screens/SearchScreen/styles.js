import {StyleSheet} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const styles = StyleSheet.create({
  container: tw`flex-1 bg-white`,
  searchHeading: tw`w-full h-20 justify-center items-center`,
  search: tw`text-xl text-gray-500 border-b-2 border-gray-200 w-10/12 text-center pb-2`,
});

export default styles;
