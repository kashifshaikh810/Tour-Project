import {StyleSheet} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const styles = StyleSheet.create({
  container: tw`bg-white w-full h-20 shadow-2xl flex-row items-center pl-2 pr-2`,
  lastContent: tw`flex-1 flex-row justify-end items-center`,
  textStyle: tw`text-base pl-1 pr-1 text-gray-400`,
  tourTextStyle: tw`text-2xl pl-2`,
  input: tw`w-4/12 p-0.5 pl-3 border-2 border-gray-300 rounded pr-3`,
});

export default styles;
