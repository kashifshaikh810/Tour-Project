import React, {useEffect, useState} from 'react';
import AddUpdateTourMarkup from './AddUpdateTourMarkup';
import DocumentPicker from 'react-native-document-picker';
import ImgToBase64 from 'react-native-image-base64';
import {useDispatch, useSelector} from 'react-redux';
import {addTour, clearErrors} from '../../redux/Action/tourAction';
import {ToastAndroid} from 'react-native';
import {ADD_NEW_TOUR_RESET} from '../../redux/Constants/tourConstant';

const AddUpdateTour = props => {
  let idParam = props?.route?.params?.id;

  const {
    loading: toursLoading,
    tours,
    error: toursError,
  } = useSelector(state => state.allTours);

  const singleTour =
    idParam && tours && tours.find(tour => tour?._id === idParam);

  const [title, setTitle] = useState(singleTour ? singleTour?.title : '');
  const [titleError, setTitleError] = useState('');
  const [description, setDescription] = useState(
    singleTour ? singleTour?.description : '',
  );
  const [descriptionError, setDescriptionError] = useState('');
  const [showChosenImage, setShowChosenImage] = useState('');
  const [tags, setTags] = useState(singleTour ? singleTour?.tags : []);
  const [tagsError, setTagsError] = useState('');
  const [imageFile, setImageFile] = useState('');
  const [imageError, setImageError] = useState('');

  const suggestions = ['apple', 'orange', 'banana', 'kiwi'];

  const dispatch = useDispatch();
  const {loading, success, error} = useSelector(state => state.addNewTour);

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
      const data = {
        title: title,
        description: description,
        tags: tags,
        imageFile: imageFile,
      };
      dispatch(addTour(data));
    }
  };

  const clearOnPressHandler = () => {
    setTitle('');
    setDescription('');
    setTags([]);
    setImageFile('');
    setShowChosenImage('');
    ToastAndroid.showWithGravityAndOffset(
      'Clear Succeed',
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
  };

  useEffect(() => {
    if (!idParam) {
      setTitle('');
      setTitleError('');
      setDescription('');
      setDescriptionError('');
      setImageError('');
      setShowChosenImage('');
      setImageFile('');
      setTags([]);
      setTagsError('');
    }

    if (error) {
      ToastAndroid.showWithGravityAndOffset(
        error,
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50,
      );
      dispatch(clearErrors());
    }

    if (success) {
      ToastAndroid.showWithGravityAndOffset(
        'Tour Added Succeed',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50,
      );
      setTitle('');
      setDescription('');
      setTags([]);
      setImageFile('');
      setShowChosenImage('');
      props?.navigation.navigate('Dashboard');
      dispatch({type: ADD_NEW_TOUR_RESET});
    }
  }, [dispatch, error, success, idParam]);

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
      loading={loading}
      clearOnPressHandler={clearOnPressHandler}
      id={idParam}
    />
  );
};

export default AddUpdateTour;
