import React from 'react';
import { View, StyleSheet, Text, Image, FlatList, RefreshControl } from 'react-native';

class Mytips extends React.Component {
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
  { imgSrc: require('@/assets/images/jspng.jpg'), header: 'JavaScript', text: 'Заканчиваю курс по JavaScript.' },
  { imgSrc: require('@/assets/images/java.png'), header: 'java', text: 'На середине курса по Java.' },
  { imgSrc: require('@/assets/images/python.png'), header: 'Python', text: 'Никогда не изучал, вообще не изучал.' },
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
      renderItem={({item}) => <Mytips imgSrc={item.imgSrc} header={item.header} text={item.text}/>}
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
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    flex: 1,
  },
  header: {
    fontSize: 20,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  languageHeader: {
    fontSize: 66,
  },
  text: {
    fontSize: 24,
  },
  logo: {
    height: 350,
    width: 350,
    bottom: 0,
    left: 0,
  },
});