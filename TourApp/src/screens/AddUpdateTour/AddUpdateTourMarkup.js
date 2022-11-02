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
                props.titleError !== '' && styles.borderRedColor,
              ]}
              placeholderTextColor={
                props.titleError.length > 1 ? 'red' : 'gray'
              }
              value={props.title}
              onChangeText={text => props.titleOnChange(text)}
            />
            {props.titleError && (
              <Text style={styles.errorText}>{props.titleError}</Text>
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
                props.titleError !== '' && styles.borderRedColor,
              ]}
              placeholderTextColor={
                props.titleError.length > 1 ? 'red' : 'gray'
              }
              value={props.title}
              onChangeText={text => props.titleOnChange(text)}
            />
            {props.titleError && (
              <Text style={styles.errorText}>{props.titleError}</Text>
            )}
          </View>

          <View>
            <AutoCompleteTags
              tags={props.tags}
              suggestions={props.suggestions}
              onChangeTags={props.setTags}
              labelExtractor={props.labelExtractor}
              containerStyle={styles.tagTextInput}
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
          </View>

          <View>
            <View style={styles.noFileContainer}>
              <Text style={styles.noFile}>No file Chosen</Text>
            </View>
            <MyButton
              {...props}
              title="Choose file"
              textColor="gray"
              afterPressColor="#fff"
              android_ripple="#b3b3b3"
              style={styles.chooseFileButton}
              onPress={() => props?.chooseFile()}
            />
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
              onPress={() => {}}
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
              onPress={() => {}}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default AddUpdateTourMarkup;
