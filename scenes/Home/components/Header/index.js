import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Icon, SearchBar} from 'react-native-elements';

class index extends React.Component {
  constructor(props) {
    super(props);
    //setting default state
    this.state = {isLoading: true, search: ''};
    this.arrayholder = [];
  }
  componentDidMount() {
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson,
          },
          function() {
            this.arrayholder = responseJson;
          },
        );
      })
      .catch(error => {
        console.error(error);
      });
  }

  search = text => {
    console.log(text);
  };
  clear = () => {
    this.search.clear();
  };

  SearchFilterFunction(text) {
    //passing the inserted text in textinput
    const newData = this.arrayholder.filter(function(item) {
      //applying filter for the inserted text in search bar
      const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      //setting the filtered newData on datasource
      //After setting the data it will automatically re-render the view
      dataSource: newData,
      search: text,
    });
  }

  render() {
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
  }
}

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
