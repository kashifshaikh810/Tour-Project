import {StyleSheet} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const styles = StyleSheet.create({
  container: tw`bg-white w-full h-16 shadow-2xl flex-row items-center pl-2 pr-2`,
  textStyle: tw`text-base pl-1 pr-1 text-gray-400`,
  tourTextStyle: tw`text-base pl-2`,
  logOutContainer: tw`flex-1 justify-end items-end flex-row`,
  search: tw`flex-row`,
});

export default styles;
