import React, {useState} from 'react';
import AddUpdateTourMarkup from './AddUpdateTourMarkup';
import DocumentPicker from 'react-native-document-picker';
import ImgToBase64 from 'react-native-image-base64';

const AddUpdateTour = props => {
  const [title, setTitle] = useState('');
  const [titleError, setTitleError] = useState('');
  const [description, setDescription] = useState('');
  const [descriptionError, setDescriptionError] = useState('');
  const [showChosenImage, setShowChosenImage] = useState('');
  const [tags, setTags] = useState([]);
  const [tagsError, setTagsError] = useState('');
  const [imageFile, setImageFile] = useState('');
  const [imageError, setImageError] = useState('');

  const suggestions = ['apple', 'orange', 'banana', 'kiwi'];

  const labelExtractor = tag => {};

  const titleOnChange = text => {
    setTitle(text);
    setTitleError('');
  };

  const descriptionOnChange = text => {
    setDescription(text);
    setDescriptionError('');
  };

  const tagsOnChange = tags => {
    setTags(tags);
    setTagsError('');
  };

  const removeTag = tagName => {
    const arr = [...tags];
    arr.splice(arr.indexOf(tagName), 1);
    setTags(arr);
  };

  const chooseFile = async () => {
    try {
      const results = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.images],
      });
      setImageError('');
      console.log(
        // results.uri,
        // results.type, // mime type
        results.name,
        // results.size,
      );
      ImgToBase64.getBase64String(results?.uri)
        .then(async base64String => {
          setShowChosenImage(results?.name);
          await setImageFile(
            'data:' + results.type + ';base64,' + base64String,
          );
        })
        .catch(err => console.log(err));
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
        console.log(err, 'pick cancel');
      } else {
        throw err;
      }
    }
  };

  const removeImageFile = () => {
    setShowChosenImage('');
    setImageFile('');
  };

  const submitOnPressHandler = () => {
    if (!title) {
      setTitleError('Please provide your tour title');
    }

    if (!description) {
      setDescriptionError('Please provide your tour description');
    }

    if (tags.length === 0) {
      setTagsError('Please provide your tour tags');
    }

    if (!imageFile) {
      setImageError('Please provide your tour image');
    }

    if (title && description && tags.length >= 1 && imageFile) {
      console.log(title, description);
    }
  };

  return (
    <AddUpdateTourMarkup
      {...props}
      titleOnChange={titleOnChange}
      title={title}
      setTitle={setTitle}
      titleError={titleError}
      setTitleError={setTitleError}
      tags={tags}
      setTags={setTags}
      suggestions={suggestions}
      labelExtractor={labelExtractor}
      removeTag={removeTag}
      chooseFile={chooseFile}
      showChosenImage={showChosenImage}
      submitOnPressHandler={submitOnPressHandler}
      description={description}
      setDescription={setDescription}
      descriptionError={descriptionError}
      setDescriptionError={setDescriptionError}
      descriptionOnChange={descriptionOnChange}
      tagsError={tagsError}
      setTagsError={setTagsError}
      tagsOnChange={tagsOnChange}
      imageError={imageError}
      removeImageFile={removeImageFile}
    />
  );
};

export default AddUpdateTour;
