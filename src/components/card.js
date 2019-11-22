import React, {Component} from 'react';
import {View, Text, Image, Dimensions, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {styles} from '../assets/styles/index';

const {width, height} = Dimensions.get('window');

export class Card extends Component {
         constructor(props) {
           super(props);
           this.state = {
             data: props.data,
             initialLikes: 0,
           };
         }

         doIncrement = () => {
           this.setState({
             initialLikes: this.state.initialLikes + 1,
           });
         };

         doDecrement = () => {
           this.setState({
             initialLikes: this.state.initialLikes - 1,
           });
         };

         render() {
           return (
             <View
               style={{
                 marginHorizontal: 10,
                 marginBottom: 10,
                 borderColor: 'grey',
                 borderWidth: 0.5,
                 borderRadius: 10,
               }}>
               <Image
                 source={{uri: this.state.data['image']}}
                 style={{
                   height: height / 4,
                   resizeMode: 'cover',
                   borderTopLeftRadius: 10,
                   borderTopRightRadius: 10,
                   backgroundColor: styles.color.body_secondary,
                 }}
               />
               <View
                 style={{
                   flexDirection: 'row',
                   justifyContent: 'space-between',
                   padding: 10,
                 }}>
                 <View>
                   <TouchableOpacity
                     style={{
                       backgroundColor: styles.color.white,
                       borderWidth: 0.5,
                       borderColor: 'grey',
                       padding: 8,
                       width: 80,
                       borderRadius: 5,
                     }}>
                     <Text
                       style={{
                         textAlign: 'center',
                         fontSize: 14,
                         color: 'grey',
                       }}>
                       {this.state.initialLikes + this.props.like}
                       <Text> Like</Text>
                     </Text>
                   </TouchableOpacity>
                 </View>
                 <View
                   style={{
                     flexDirection: 'row',
                     justifyContent: 'space-between',
                   }}>
                   <TouchableOpacity
                     onPress={this.doIncrement}
                     style={{
                       backgroundColor: styles.color.blue,
                       width: 80,
                       padding: 8,
                       borderRadius: 5,
                     }}>
                     <Text
                       style={{
                         textAlign: 'center',
                         color: styles.color.white,
                         fontSize: 14,
                       }}>
                       Like
                     </Text>
                   </TouchableOpacity>
                   <TouchableOpacity
                     onPress={this.doDecrement}
                     style={{
                       backgroundColor: styles.color.red,
                       padding: 8,
                       width: 80,
                       marginLeft: 10,
                       borderRadius: 5,
                     }}>
                     <Text
                       style={{
                         textAlign: 'center',
                         color: styles.color.white,
                         fontSize: 14,
                       }}>
                       Dislike
                     </Text>
                   </TouchableOpacity>
                 </View>
               </View>
             </View>
           );
         }
       }

function mapStateToProps(state) {
  return {
    like: state.like,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
