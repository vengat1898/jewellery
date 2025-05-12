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
    <View>
      <View style={styles.header}>
        <View style={styles.headerTopRow}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={20} color="#9A7200" />
          </TouchableOpacity>
          <Text style={styles.heading}>checkout</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {categories.map((category, index) => (
          <TouchableOpacity  key={index} style={styles.box}  onPress={() => router.push({ pathname: '/components/Categories'})}>
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
    paddingHorizontal: 12,
    paddingTop: 70,
    paddingBottom: 10,
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
    fontSize: 16,
    fontWeight: 'bold',
    color: '#9A7200',
    marginLeft: 15,
    textTransform: 'uppercase',
  },
  scrollContainer: {
    paddingTop: 130, // reduced space for smaller header
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
  },
  box: {
    width: '48%',
    marginBottom: 12,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 6,
    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  image: {
    width: '100%',
    height: 100, // reduced from 150
    borderRadius: 8,
  },
  title: {
    marginTop: 6,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
});


