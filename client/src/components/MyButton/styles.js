import {StyleSheet} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const styles = StyleSheet.create({
  textContainer: tw`flex-row`,
  activityIndicator: tw`pr-2`,
  maxWidth: tw`w-10/12`,
  maxHeight: tw`h-12`,
  readMoreMaxWidth: tw`w-6/12`,
  readMoreMaxHeight: tw`h-8`,
});

export default styles;
