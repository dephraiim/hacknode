import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const BlogCard = ({ title, authorImage, authorName, totalReactions }) => {
    return (
        <View style={styles.topView}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.btnAlignment}>
                <View style={styles.rowCenter}>
                    <Image
                        source={{
                            uri: authorImage,
                        }}
                        style={styles.profileImage}
                    />
                    <Text style={styles.authorName}>{authorName}</Text>
                </View>
                <View style={styles.rowCenter}>
                    <Feather name='thumbs-up' size={20} />
                    <Text style={{ paddingLeft: 6, fontSize: 17 }}>{totalReactions}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    topView: {
        padding: 15,
        borderRadius: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#EBA8B1',
    },
    marginBtn: {
        marginBottom: 5,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#2962ff',
        opacity: 90,
        margin: 5,
    },
    btnAlignment: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    rowCenter: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 50,
    },
    authorName: { paddingLeft: 10, fontSize: 17 },
    reactionCount: { paddingLeft: 6, fontSize: 17 },
});

export default BlogCard;
