import React, {Component} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import json from '../../source/image.json';
import Card from '../../components/card';
import {styles} from '../../assets/styles/index';
import {setIncrement, setDecrescent, resetAll} from '../../actions/index';
import {bindActionCreators} from 'redux';

export class Home extends Component {
  constructor(props) {
    super(props);
  }
  doIncrement = () => {
    this.props.actions.setIncrement();
  };

  doDecrement = () => {
    this.props.actions.setDecrescent();
  };

  reset = () => {
    this.props.actions.resetAll();
  };
  render() {
    return (
      <FlatList
        data={json}
        ListHeaderComponent={
          <View
            style={{
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
              marginHorizontal: 10,
              margin: 10,
            }}>
            <TouchableOpacity
              onPress={this.doIncrement}
              style={{
                backgroundColor: styles.color.blue,
                borderWidth: 0.5,
                borderColor: 'grey',
                padding: 8,
                width: 100,
                borderRadius: 5,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 14,
                  color: styles.color.white,
                }}>
                Like All
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this.reset}
              style={{
                backgroundColor: styles.color.white,
                borderWidth: 0.5,
                borderColor: 'grey',
                padding: 8,
                width: 100,
                marginLeft: 10,
                borderRadius: 5,
              }}>
              <Text style={{textAlign: 'center', fontSize: 14}}>Reset All</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this.doDecrement}
              style={{
                backgroundColor: styles.color.red,
                borderWidth: 0.5,
                borderColor: 'grey',
                padding: 8,
                width: 100,
                marginLeft: 10,
                borderRadius: 5,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 14,
                  color: styles.color.white,
                }}>
                Dislike All
              </Text>
            </TouchableOpacity>
          </View>
        }
        renderItem={({item, key}) => <Card data={item}></Card>}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {setIncrement, setDecrescent, resetAll},
    dispatch,
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
