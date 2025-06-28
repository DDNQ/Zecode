import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  StatusBar,

} from 'react-native';

export default function Mypage() {
  const favoriteBooks = [
    {
      id: 1,
      title: "Atomic Habits",
      author: "James Clear",
      cover: require("../../assets/images/atomic-habits.jpeg"),
    },
    {
      id: 2,
      title: "The Alchemist",
      author: "Paulo Coelho",
      cover: require("../../assets/images/theAlchemist.jpg"),
    },
    {
      id: 3,
      title: "Rich Dad Poor Dad",
      author: "Robert T. Kiyosaki",
      cover: require("../../assets/images/RD.jpg"),
    },
    {
      id: 4,
      title: "Can't Hurt Me",
      author: "David Goggins",
      cover: require("../../assets/images/Can't.jpg"),
    },
    {
      id: 5,
      title: "Deep Work",
      author: "Cal Newport",
      cover: require("../../assets/images/Deep.jpg"),
    },
  ];

  const FavoriteBook = ({ book }) => {

    const { cover, title, author } = book

    return (
      <TouchableOpacity >
        <View style={styles.favoriteBook}>
          <Image source={cover} style={styles.favoriteBookImage} />
          <View style={{ padding: 12 }}>
            <Text>{title}</Text>
            <Text>{author}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const FavoriteBookList = ({ data }) => (
    <View>

      <FlatList
        data={data}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <FavoriteBook book={item} />}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.header}>
        <Text style={styles.headerTitle}>Favorite Books</Text>
      </View>

      <View>
        <FlatList
          contentContainerStyle={{ paddingBottom: 24 }}
          ListHeaderComponent={
            <>


              <FavoriteBookList data={favoriteBooks} />
              <FavoriteBookList data={favoriteBooks} />
              <FavoriteBookList data={favoriteBooks} />
              <FavoriteBookList data={favoriteBooks} />


            </>
          }
        />
      </View>

    </SafeAreaView>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'

  },
  header: {
    alignItems: 'center',
    paddingVertical: 16,
    // paddingTop: 10,
    marginBottom: 10

  },
  headerTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  favoriteBook: {
    width: 145,
    margin: 8,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#f5f5f5',
  },
  favoriteBookImage: {
    width: '100%',
    height: 200
  }
})






