//@flow

import React, { Component }from 'react';
import {
  Button,
  View,
  Text,
  AppRegistry
} from 'react-native';

const generateRandomNumber = () => {
  const randomNumber : number = Math.floor(Math.random() * 10);
  console.log(randomNumber);
};

class RandomNumbers extends Component {

  state: {
    randomNumber: null
  };

  return (
    <View>
      <Text>My first app!</Text>
      <Button
        title="Gerar um Número"
        onPress={generateRandomNumber}
      />
    </View>
  );
};

const styles = StyleSheet.create({

});
