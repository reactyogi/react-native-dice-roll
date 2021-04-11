import React, {useState} from 'react';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from 'react-native';

import DiceOne from './Assets/dice1.png';
import DiceTwo from './Assets/dice2.png';
import DiceThree from './Assets/dice3.png';
import DiceFour from './Assets/dice4.png';
import DiceFive from './Assets/dice5.png';
import DiceSix from './Assets/dice6.png';

const App = () => {
  const [uri, setUri] = useState(DiceOne);
  const [uriTwo, setUriTwo] = useState(DiceThree);

  const playBtnTapped = () => {
    let randomNrOne = Math.floor(Math.random() * 6) + 1;
    let randomNrTwo = Math.floor(Math.random() * 6) + 1;

    switch (randomNrOne) {
      case 1:
        setUri(DiceOne);

        break;

      case 2:
        setUri(DiceTwo);

        break;

      case 3:
        setUri(DiceThree);

        break;

      case 4:
        setUri(DiceFour);

        break;

      case 5:
        setUri(DiceFive);

        break;

      case 6:
        setUri(DiceSix);

        break;

      default:
        setUri(DiceOne);

        break;
    }

    switch (randomNrTwo) {
      case 1:
        setUriTwo(DiceOne);

        break;

      case 2:
        setUriTwo(DiceTwo);

        break;

      case 3:
        setUriTwo(DiceThree);

        break;

      case 4:
        setUriTwo(DiceFour);

        break;

      case 5:
        setUriTwo(DiceFive);

        break;

      case 6:
        setUriTwo(DiceSix);

        break;

      default:
        setUriTwo(DiceOne);

        break;
    }
  };

  return (
    <>
      <View style={styles.container}>
        <Image style={styles.image} source={uri} />
        <Image style={styles.image} source={uriTwo} />
        <Pressable onPress={playBtnTapped}>
          <Text style={styles.gamePlayBtn}>Play Game</Text>
        </Pressable>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222831',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },

  gamePlayBtn: {
    fontSize: 20,
    marginTop: 30,
    color: '#F2A365',
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderColor: '#30475E',
    borderRadius: 5,
    borderWidth: 3,
    fontWeight: 'bold',
  },
});

export default App;
