import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Icon, SearchBar} from 'react-native-elements';

const index = () => {
  return (
    <View style={styles.header}>
      <Icon
        name="menu"
        type="entypo"
        color="white"
        size={40}
        containerStyle={styles.headerIcon}
      />
      <SearchBar
        lightTheme
        placeholder="Type here..."
        onChangeText={this.updateSearch}
        inputContainerStyle={styles.searchbar}
        round
        containerStyle={styles.searchcontainer}
      />
      <Icon
        name="bell"
        type="feather"
        color="white"
        size={35}
        containerStyle={styles.headerIcon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: 'red',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerIcon: {
    marginHorizontal: 5,
  },
  searchcontainer: {
    flex: 1,
    padding: 10,
    backgroundColor: 'transparent',
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
    // alignSelf: 'flex-start',
  },
  searchbar: {
    borderRadius: 20,
    height: 40,
    // width: '100%',
    backgroundColor: 'white', //no effect
    borderWidth: 0, //no effect
    shadowColor: 'white', //no effect
  },
});
export default index;
