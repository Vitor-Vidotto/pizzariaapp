import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function Header() {

    return (
        <View style={StyleSheet.header}>
            <Image source={require('../iconpizza.png')} style={styles.Image}/>
        </View>
    );
}

const styles = StyleSheet.create ({

    header : {
        height : 125,
        paddingTop: 10,
        paddingRight: 25,
        paddingBottom: 8,
        paddingLeft: 25,
        backgroundColor: '#96C75A',
        borderBottomColor: '#fff',
        justifyContent: 'center',
    },

    Image: {
        
        height: 60,
        width: 100,
        alignSelf: 'center',
        marginTop: 5,
        
    }

});



