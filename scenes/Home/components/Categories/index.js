import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';

import Separator from '../../../Separator/index';

const CategoriesIcon = props => {
  return (
    <View style={styles.category}>
      <TouchableOpacity>
        <Icon
          raised
          color="white"
          name={props.name}
          type={props.type}
          size={35}
          containerStyle={styles.iconContainer}
          iconStyle={styles.iconStyle}
          onPress={() => console.warn('hello')}
        />
      </TouchableOpacity>
      <Text>{props.description}</Text>
    </View>
  );
};

const index = () => {
  return (
    <View style={styles.categoriesContainer}>
      <Text style={styles.title}>HCMC, Where will you go to day?</Text>
      <Separator />
      <View style={styles.categories}>
        <CategoriesIcon
          name="food"
          type="material-community"
          description="Food"
        />
        <CategoriesIcon name="drink" type="entypo" description="Drink" />
        <CategoriesIcon
          name="store-mall-directory"
          type="metarial"
          description="Grocery Store"
        />
        <CategoriesIcon
          name="movie-filter"
          type="metarial"
          description="Relax"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  categoriesContainer: {
    marginVertical: 20,
  },
  title: {
    fontSize: 25,
  },
  categories: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  category: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {},
  iconStyle: {
    color: 'red',
  },
});

export default index;
