import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, ViewStyle, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

interface CardProps {
  content: React.ReactNode,
  onPress: () => void;
  title: string;

  style?: ViewStyle;
}

const Card: React.FC<CardProps> = props => {
  const {content, onPress, style, title} = props;
  return (
    <View style={[styles.container, {backgroundColor: 'white'}, style]}>
      <View style={[styles.backgroundContainer, {backgroundColor: '#F8F8F8'}]}>
        <View style={styles.titleContainer}>
          <Text style={[styles.title]}>{title}</Text>
        </View>
        <View style={styles.content} pointerEvents={'none'}>
          {content}
        </View>
      </View>
      <TouchableOpacity style={styles.titleContainer} onPress={onPress}>
        <Text style={{color: 'orange'}}>more</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: (width - 50) / 2,
    height: 150,
    borderRadius: 8,
  },
  backgroundContainer: {
    flex: 1,
    marginHorizontal: 2,
    marginTop: 2,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  titleContainer: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    padding: 5,
    overflow: 'hidden',
  }
});

export default Card;
