import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image,
} from 'react-native';

interface Item {
  id: string;
  name: string;
  imageUrl: string;
}

const App = () => {
  const items: Item[] = Array.from({length: 5}, (_, i) => ({
    id: i.toString(),
    name: `Item ${i + 1}`,
    imageUrl: 'https://via.placeholder.com/50',
  }));

  const [likes, setLikes] = useState<Record<string, number>>(
    items.reduce((acc: any, item) => {
      acc[item.id] = 0;
      return acc;
    }, {}),
  );

  const handleLike = (id: string) => {
    setLikes({...likes, [id]: likes[id] + 1});
  };

  const handleDislike = (id: string) => {
    setLikes({...likes, [id]: likes[id] - 1});
  };

  const handleLikeAll = () => {
    const newLikes = {...likes};
    Object.keys(newLikes).forEach(key => newLikes[key]++);
    setLikes(newLikes);
  };

  const handleResetAll = () => {
    const newLikes = {...likes};
    Object.keys(newLikes).forEach(key => (newLikes[key] = 0));
    setLikes(newLikes);
  };

  const handleDislikeAll = () => {
    const newLikes = {...likes};
    Object.keys(newLikes).forEach(key => newLikes[key]--);
    setLikes(newLikes);
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonLike} onPress={handleLikeAll}>
          <Text style={{color: '#ffffff', textAlign: 'center', marginTop: 5}}>
            Like All
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonReset} onPress={handleResetAll}>
          <Text style={{textAlign: 'center', marginTop: 5}}>Reset All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonDisLike}
          onPress={handleDislikeAll}>
          <Text style={{color: '#ffffff', textAlign: 'center', marginTop: 5}}>
            Dislike All
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={items}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View>
            <Image source={{uri: item.imageUrl}} style={styles.image} />
            <View style={styles.listItem}>
              <Text style={styles.like}>{likes[item.id]} Like</Text>
              <View style={styles.listItem}>
                <TouchableOpacity
                  style={styles.buttonLike}
                  onPress={() => handleLike(item.id)}>
                  <Text
                    style={{
                      color: '#ffffff',
                      textAlign: 'center',
                      marginTop: 5,
                    }}>
                    Like
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.buttonDisLike}
                  onPress={() => handleDislike(item.id)}>
                  <Text
                    style={{
                      color: '#ffffff',
                      textAlign: 'center',
                      marginTop: 5,
                    }}>
                    Dislike
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  buttonReset: {
    borderRadius: 8,
    backgroundColor:'#fff',
    height: 30,
    width: 100,
    elevation: 20,
    shadowColor: '#52006A',
  },
  buttonDisLike: {
    marginRight: 10,
    backgroundColor: 'red',
    height: 30,
    color: '#fff',
    borderRadius: 5,
    width: 100,
  },
  buttonLike: {
    marginRight: 10,
    backgroundColor: '#4e3ad2',
    height: 30,
    color: '#fff',
    borderRadius: 5,
    width: 60,
  },
  like: {
    borderColor: '#c1bddb',
    textAlign: 'center',
    borderWidth: 2,
    padding: 5,
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginTop: 20,
  },
  image: {
    height: 200,
  },
});

export default App;
