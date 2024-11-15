import React from 'react';
import { View, StyleSheet, Text, Image, FlatList, RefreshControl } from 'react-native';

class MyComponent extends React.Component {
  render() {
    const { imgSrc, header, text } = this.props;
    return (
      <View style={styles.view}>
        <Image
          uri={imgSrc}
          source={imgSrc}
          style={styles.logo}
        />
        <Text style={styles.languageHeader}>{header}</Text>
        <Text style={styles.text}>{text}</Text>
      </View>
    )
  };
};

const DATA = [
  { imgSrc: require('@/assets/images/java.png'), header: 'Java', text: 'Прошёл курс по Java на Хекслет.' },
  { imgSrc: require('@/assets/images/jspng.jpg'), header: 'JavaScript', text: 'Заканчиваю курс по JavaScript на Хекслет.' },
  { imgSrc: require('@/assets/images/pyton.png'), header: 'Python', text: 'Никогда не изучал Вооообще.' },
];

export default () => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  return (
    <FlatList 
      ListHeaderComponent={
        <Text style={styles.header}>Pull down to see RefreshControl indicator.</Text>
      }
      data={DATA}
      renderItem={({item}) => <MyComponent imgSrc={item.imgSrc} header={item.header} text={item.text}/>}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
    </FlatList>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  languageHeader: {
    fontSize: 60,
  },
  text: {
    fontSize: 24,
  },
  logo: {
    height: 360,
    width: 500,
    bottom: 0,
    left: 0,
  },
});