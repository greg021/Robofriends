import React from 'react';
import RNFetchBlob from 'rn-fetch-blob';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  PermissionsAndroid,
} from 'react-native';
import Share from 'react-native-share';

/*
 *
 * TODO
 * >> onsearch
 * download image via rn-fetch-blob
 * and convert the image into base64
 * then display the base64 image
 * and onShare share the base64 image
 * and onDownload download the base64 image.
 *
 */

export default function ImageContainer({name}) {
  const URL = `https://robohash.org/${name}.png`;

  const checkPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Storage Permission Required',
          message: 'App needs access to your storage to download Photos',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Storage Permission Granted.');
        downloadImage();
      } else {
        alert('Storage Permission Not Granted');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const convertToBase64 = async () => {
    let imagePath = null;
    let image_url_length = URL.length;

    RNFetchBlob.config({
      fileCache: true,
    })
      .fetch('GET', URL)
      .then((resp) => {
        imagePath = resp.path();
        return resp.readFile('base64');
      })
      .then((base64Data) => {
        if (URL.substring(image_url_length - 3, image_url_length) === 'png')
          base64Data = 'data:image/png;base64,' + base64Data;
        else base64Data = 'data:image/jpg;base64,' + base64Data;

        // here's base64 encoded image
        myCustomShare({
          message: `${name} was shared through robofriends app`,
          url: base64Data,
          email: '',
        });
        // remove the file from storage
        RNFetchBlob.fs.unlink(imagePath);
      });
  };

  const downloadImage = () => {
    let date = new Date();
    let image_URL = URL;

    let ext = getExtention(image_URL);
    ext = '.' + ext[0];

    const {config, fs} = RNFetchBlob;
    let PictureDir = fs.dirs.PictureDir;
    let options = {
      fileCache: true,
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        path:
          PictureDir +
          '/memetok_' +
          Math.floor(date.getTime() + date.getSeconds() / 2) +
          ext,
        description: 'Image',
      },
    };

    config(options)
      .fetch('GET', image_URL)
      .then((res) => {
        // console.log('res -> ', JSON.stringify(res));
        alert('Image Downloaded Successfully.');
      });
  };

  const getExtention = (filename) => {
    return /[.]/.exec(filename) ? /[^.]+$/.exec(filename) : undefined;
  };

  const myCustomShare = async (shareOptions) => {
    try {
      const shareResponse = await Share.open(shareOptions);
      console.log(shareResponse);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View
      style={{
        borderColor: '#0088ff',
        borderRadius: 15,
        borderStyle: 'solid',
        borderWidth: 2,

        overflow: 'hidden',
        position: 'absolute',
        top: 180,
        right: 70,
        left: 70,
      }}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
        }}>
        <Image
          style={{
            width: 200,
            height: 200,
          }}
          source={{
            uri: URL,
          }}
        />
      </View>
      <View style={{}}>
        <Text
          style={{
            color: 'white',
            backgroundColor: '#0088ff',
            fontSize: 16,
            textAlign: 'center',
            padding: 5,
          }}>
          {name}
        </Text>
      </View>
      <View>
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            justifyContent: 'center',
            padding: 5,
            backgroundColor: '#00f288',
          }}
          onPress={convertToBase64}>
          <Text
            style={{
              color: '#002',
              textAlign: 'center',
              fontSize: 16,
            }}>
            Share {name}
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            justifyContent: 'center',
            padding: 5,
            backgroundColor: '#f24553',
          }}
          onPress={checkPermission}>
          <Text
            style={{
              color: '#ffffff',
              textAlign: 'center',
              fontSize: 16,
            }}>
            Download
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
