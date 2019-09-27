import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Icon, SearchBar} from 'react-native-elements';

class index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
    };
  }

  updateSearch = value => {
    this.props.onChangeText(value);
    this.setState({searchValue: value});
  };

  render() {
    return (
      <View style={styles.header}>
        <Icon
          name="menu"
          type="entypo"
          color="white"
          size={35}
          containerStyle={styles.headerIcon}
        />
        <SearchBar
          lightTheme
          round
          placeholder="Type here..."
          onChangeText={text => this.updateSearch(text)}
          inputContainerStyle={styles.searchbar}
          containerStyle={styles.searchcontainer}
          value={this.state.searchValue}
        />
        <Icon
          name="filter"
          type="feather"
          color="white"
          size={30}
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
