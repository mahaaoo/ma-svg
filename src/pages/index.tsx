import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import {navigate} from '../navigate';

import Card from '../components/Card'

interface Example {
  title: string;
  content: React.ReactNode | null;
}

const exampleList: Example[] = [{
  title: 'Svg',
  content: null,
},{
  title: 'Rect',
  content: null,
},{
  title: 'Circle',
  content: null,
}, {
  title: 'Ellipse',
  content: null,
}];

export default function ComponentScreen() {
  return (
    <View style={[styles.container, { backgroundColor: '#F8F8F8' }]}>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={{ flex: 1 }}
        data={exampleList}
        numColumns={2}
        keyExtractor={(item, index) => `example_${index}` }
        renderItem={({item, index}) => {
          return (
            <Card
              title={item.title}
              style={{ margin: 10 }}
              content={
                item.content ? item.content : <Text>{item.title}</Text>
              }
              onPress={() => { navigate(`${item.title}Example`); }}
            />
          )
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: 30,
  },
});
