import {StyleSheet} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const styles = StyleSheet.create({
  textContainer: tw`flex-row`,
  activityIndicator: tw`pr-2`,
  minWidth: tw`w-11/12`,
  maxWidth: tw`w-10/12`,
  minHeight: tw`h-11`,
  maxHeight: tw`h-12`,
});

export default styles;
