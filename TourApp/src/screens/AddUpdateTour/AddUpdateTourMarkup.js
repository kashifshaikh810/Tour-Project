import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import Header from '../../components/Header/Header';
import AutoCompleteTags from 'react-native-autocomplete-tags';
import CloseIcon from 'react-native-vector-icons/Ionicons';
import MyButton from '../../components/MyButton/MyButton';

const AddUpdateTourMarkup = props => {
  return (
    <View style={styles.container}>
      <Header {...props} />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <View style={styles.contentContainer}>
          <Text style={styles.addTour}>Add Tour</Text>

          <View>
            <TextInput
              placeholder="Enter title"
              keyboardType="default"
              style={[
                styles.textInput,
                props?.titleError !== '' && styles.borderRedColor,
              ]}
              placeholderTextColor={
                props?.titleError?.length > 1 ? 'red' : 'gray'
              }
              value={props.title}
              onChangeText={text => props.titleOnChange(text)}
            />
            {props?.titleError && (
              <Text style={styles.errorText}>{props?.titleError}</Text>
            )}
          </View>

          <View>
            <TextInput
              placeholder="Enter Description"
              keyboardType="default"
              returnKeyType="go"
              multiline
              style={[
                styles.descriptionTextInput,
                props.descriptionError !== '' && styles.borderRedColor,
              ]}
              placeholderTextColor={
                props.descriptionError.length > 1 ? 'red' : 'gray'
              }
              value={props.description}
              onChangeText={text => props.descriptionOnChange(text)}
            />
            {props.descriptionError && (
              <Text style={styles.errorText}>{props.descriptionError}</Text>
            )}
          </View>

          <View>
            {props?.tags.length === 0 && (
              <Text
                style={[
                  styles.enterTagPlaceholder,
                  props.tagsError.length > 1
                    ? styles.textRed
                    : styles.lightGrayText,
                ]}>
                Enter tag
              </Text>
            )}
            <AutoCompleteTags
              tags={props.tags}
              suggestions={props.suggestions}
              onChangeTags={tags => {
                if (props?.tags.length <= 4) {
                  props?.tagsOnChange(tags);
                }
              }}
              labelExtractor={props.labelExtractor}
              containerStyle={[
                styles.tagTextInput,
                props.tagsError !== '' && styles.borderRedColor,
              ]}
              renderTag={(tag, i, aa) => (
                <View style={styles.tagsContainer}>
                  <Text style={styles.tag}>{tag}</Text>

                  <TouchableOpacity onPress={() => props?.removeTag(tag)}>
                    <CloseIcon
                      name="close-circle-sharp"
                      size={30}
                      style={styles.closeIcon}
                    />
                  </TouchableOpacity>
                </View>
              )}
            />
            {props?.tagsError && (
              <Text style={styles.errorText}>{props?.tagsError}</Text>
            )}
          </View>

          <View>
            <View style={styles.noFileContainer}>
              <Text
                style={[
                  styles.noFile,
                  props?.showChosenImage && styles.lightGrayText,
                ]}>
                {props?.showChosenImage
                  ? props?.showChosenImage
                  : 'No file Chosen'}
              </Text>
              {props?.showChosenImage && (
                <TouchableOpacity onPress={() => props?.removeImageFile()}>
                  <CloseIcon
                    name="close-circle-sharp"
                    size={25}
                    style={styles.closeIcon}
                  />
                </TouchableOpacity>
              )}
            </View>
            <MyButton
              {...props}
              title="Choose file"
              textColor={props.imageError.length > 1 ? '#F93154' : 'gray'}
              afterPressColor={
                props?.imageError.length > 1 ? '#F93154' : '#fff'
              }
              android_ripple={
                props?.imageError.length > 1 ? '#F93154' : '#b3b3b3'
              }
              style={[
                styles.chooseFileButton,
                !props?.imageError && styles.marginBottom,
                props?.imageError !== ''
                  ? styles.borderRedColor
                  : styles.borderGrayColor,
              ]}
              isCustomize={true}
              onPress={() => props?.chooseFile()}
              loading={false}
            />
            {props?.imageError && (
              <Text
                style={[
                  styles.errorText,
                  props?.tagsError && styles.marginBottom,
                ]}>
                {props?.imageError}
              </Text>
            )}
          </View>

          <View>
            <MyButton
              {...props}
              title="SUBMIT"
              bgColor="#1266F1"
              textColor="#fff"
              afterPressColor="#b3b3b3"
              android_ripple="#f3f3f3"
              style={styles.button}
              onPress={() => props?.submitOnPressHandler()}
              loading={props?.loading}
            />
          </View>

          <View>
            <MyButton
              {...props}
              title="CLEAR"
              bgColor="#F93154"
              textColor="#fff"
              afterPressColor="#b3b3b3"
              android_ripple="#f3f3f3"
              style={styles.button}
              onPress={() => props?.clearOnPressHandler()}
              loading={false}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default AddUpdateTourMarkup;
