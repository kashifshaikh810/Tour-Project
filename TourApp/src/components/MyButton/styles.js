import {StyleSheet} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const styles = StyleSheet.create({
  pressable: tw`w-11/12 h-11 bg-green-200 justify-center items-center rounded`,
  textContainer: tw`flex-row`,
  activityIndicator: tw`pr-2`,
});

export default styles;
