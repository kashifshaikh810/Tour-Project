import React, {useState} from 'react';
import AddUpdateTourMarkup from './AddUpdateTourMarkup';
import DocumentPicker from 'react-native-document-picker';
import ImgToBase64 from 'react-native-image-base64';

const AddUpdateTour = props => {
  const [title, setTitle] = useState('');
  const [titleError, setTitleError] = useState('');
  const [tags, setTags] = useState([]);

  const suggestions = ['apple', 'orange', 'banana', 'kiwi'];

  const labelExtractor = tag => {};

  const titleOnChange = text => {
    setTitle(text);
    setTitleError('');
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
      console.log(
        results.uri,
        results.type, // mime type
        results.name,
        results.size,
      );
      ImgToBase64.getBase64String(results?.uri)
        .then(base64String => console.log(base64String))
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
    />
  );
};

export default AddUpdateTour;
