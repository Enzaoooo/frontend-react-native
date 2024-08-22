import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

export default function Content() {
    const accounts = [
        {
          id: 1,
          service: "Gmail",
          imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQmvE-UWwkOMDfh58HggMn6XxzXRBXTHoG6zkZOMy75IIv7H0KcsnZgD2IfVUuNCshVNA&usqp=CAU",
          userName: "renancavichi@gmail.com"
        },
        {
          id: 2,
          service: "Instagram",
          imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1200px-Instagram_icon.png",
          userName: "@renancavichi"
        },
        {
          id: 3,
          service: "Github",
          imgUrl: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
          userName: "renancavichi"
        },
        {
          id: 4,
          service: "Github",
          imgUrl: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
          userName: "renancavichi"
        }
    ];

    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <Image source={{ uri: item.imgUrl }} style={styles.image} />
            <Text style={styles.service}>{item.service}</Text>
            <Text style={styles.userName}>{item.userName}</Text>
        </View>
    );

    return (
        <FlatList
            data={accounts}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            numColumns={2}  // Number of columns in the grid
            contentContainerStyle={styles.content}
        />
    );
}

const styles = StyleSheet.create({
    content: {
        padding: 15,
    },
    card: {
        flex: 2,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 3,
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginBottom: 10,
    },
    service: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
    userName: {
        color: 'gray',
    }
});
