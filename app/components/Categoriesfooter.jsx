import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import Ionicons from 'react-native-vector-icons/Ionicons';
import rings from '../../assets/images/rings.jpg';
import earrings from '../../assets/images/earrings.webp';
import bangles from '../../assets/images/bangles.jpg';
import necklaces from '../../assets/images/rings.jpg';
import pendants from '../../assets/images/rings.jpg';
import bracelets from '../../assets/images/earrings.webp';
import watch from '../../assets/images/bangles.jpg';
import chains from '../../assets/images/rings.jpg';

export default function Categoriesfooter() {
  const router = useRouter();

  const categories = [
    { image: rings, title: 'Rings' },
    { image: earrings, title: 'Earrings' },
    { image: bangles, title: 'Bangles' },
    { image: necklaces, title: 'Necklaces' },
    { image: pendants, title: 'Pendants' },
    { image: bracelets, title: 'Bracelets' },
    { image: watch, title: 'Watches' },
    { image: chains, title: 'Chains' },
  ];

  return (
    
    <View >

        <View style={styles.header}>
                <View style={styles.headerTopRow}>
                  <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="arrow-back" size={24} color="#9A7200" />
                  </TouchableOpacity>
                  <Text style={styles.heading}>checkout</Text>
                </View>
        </View>


      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {categories.map((category, index) => (
          <TouchableOpacity key={index} style={styles.box}>
            <Image source={category.image} style={styles.image} />
            <Text style={styles.title}>{category.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingTop: 60,
    paddingBottom: 20,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#9A7200',
    marginLeft: 20,
    textTransform: 'uppercase',
  },
  scrollContainer: {
    paddingTop: 120, // To make space for the header
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  box: {
     width: '48%', // Two items per row
  marginBottom: 16,
  backgroundColor: '#fff',
  borderRadius: 10,
  padding: 10,
  alignItems: 'center',
  justifyContent: 'center',

  // iOS shadow
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  title: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
});

