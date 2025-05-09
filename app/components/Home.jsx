import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import React, { useState, useRef } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import { useRouter } from 'expo-router';

// Assets
import rings from '../../assets/images/rings.jpg';
import earrings from '../../assets/images/earrings.webp';
import bangles from '../../assets/images/bangles.jpg';
import necklaces from '../../assets/images/rings.jpg';
import pendants from '../../assets/images/rings.jpg';
import bracelets from '../../assets/images/earrings.webp';
import watch from '../../assets/images/bangles.jpg';
import chains from '../../assets/images/rings.jpg';
import mudhurbanner1 from '../../assets/images/muhur_banner_1.jpg';
import mudhurbanner2 from '../../assets/images/muhur_banner_1.jpg';
import mudhurbanner3 from '../../assets/images/muhur_banner_1.jpg';
import mudhurbanner4 from '../../assets/images/muhur_banner_1.jpg';
import categorie1 from '../../assets/images/ring1.png';
import categorie2 from '../../assets/images/ring2.png';
import categorie3 from '../../assets/images/ring3.png';
import categorie4 from '../../assets/images/ring1.png';
import categorie5 from '../../assets/images/ring2.png';
import categorie6 from '../../assets/images/ring3.png';

const categories = [
  { name: 'Rings', image: rings },
  { name: 'Earrings', image: earrings },
  { name: 'Bangles', image: bangles },
  { name: 'Necklaces', image: necklaces },
  { name: 'Pendants', image: pendants },
  { name: 'Bracelets', image: bracelets },
  { name: 'Watch', image: watch },
  { name: 'Chains', image: chains },
];

const bannerImages = [
  mudhurbanner1,
  mudhurbanner2,
  mudhurbanner3,
  mudhurbanner4,
];

const popularItems = [
  { name: 'Gracefull overlap gold', image: categorie1, price: '₹12,000' },
  { name: 'Gracefull overlap gold', image: categorie2, price: '₹35,000' },
  { name: 'Gracefull overlap gold', image: categorie2, price: '₹35,000' },
  { name: 'Gracefull overlap gold', image: categorie3, price: '₹18,500' },
  { name: 'Gracefull overlap gold', image: categorie4, price: '₹22,000' },
  { name: 'Gracefull overlap gold', image: categorie5, price: '₹28,000' },
  { name: 'Gracefull overlap gold', image: categorie6, price: '₹40,000' },
];

const screenWidth = Dimensions.get('window').width;

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Header with title and search */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.menu}>
          <Icon name="menu" size={36} color="#9A7200" />
        </TouchableOpacity>

        <View style={{ flex: 1, marginLeft: 10 }}>
          <Text style={styles.title}>Sri Chandra jewell Craft</Text>
          <View style={styles.searchContainer}>
            <Feather name="search" size={20} color="#9A7200" />
            <TextInput
              style={styles.searchInput}
              placeholder="Search for jewellery"
              placeholderTextColor="#9A7200"
            />
          </View>
        </View>

        <View style={styles.icons}>
          <View style={styles.iconWrapper}>
            <TouchableOpacity>
              <Feather name="heart" size={20} color="#9A7200" />
            </TouchableOpacity>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>2</Text>
            </View>
          </View>

          <View style={styles.iconWrapper}>
            <TouchableOpacity>
              <Feather name="shopping-bag" size={20} color="#9A7200" />
            </TouchableOpacity>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>3</Text>
            </View>
          </View>

          <View style={styles.iconWrapper}>
            <TouchableOpacity>
              <Feather name="bell" size={22} color="#9A7200" />
            </TouchableOpacity>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>1</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Scrollable body */}
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }} showsVerticalScrollIndicator={false}>
        {/* Horizontal categories */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollContainer}>
          {categories.map((item, index) => (
            <TouchableOpacity
            key={index}
            style={styles.categoryBox}
            onPress={() => router.push({ pathname: '/components/Categories', params: { category: item.name } })}
          >
            <Image source={item.image} style={styles.categoryImage} />
            <Text style={styles.categoryText}>{item.name}</Text>
          </TouchableOpacity>
          
          ))}
        </ScrollView>

        {/* Banner */}
        <View style={styles.bannerWrapper}>
          <ScrollView
            ref={scrollRef}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={(e) => {
              const slide = Math.round(e.nativeEvent.contentOffset.x / screenWidth);
              setActiveIndex(slide);
            }}
            scrollEventThrottle={16}
          >
            {bannerImages.map((img, idx) => (
              <TouchableOpacity key={idx} activeOpacity={0.8}>
                <Image source={img} style={styles.bannerImage} />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Dots */}
        <View style={styles.dotContainer}>
          {bannerImages.map((_, idx) => (
            <View
              key={idx}
              style={[styles.dot, { backgroundColor: activeIndex === idx ? '#9A7200' : '#ccc' }]}
            />
          ))}
        </View>

        {/* Discover */}
        <View style={{ marginTop: 25 }}>
          <Text style={styles.discoverHeading}>Discover Our Categories</Text>
          <Text style={styles.discoverSubheading}>Our top categories, just now</Text>
        </View>

        {/* Category tags */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {['All', 'Necklace', 'Rings', 'Earrings', 'Bangles', 'Jhumkas', 'Bracelets'].map((item, index) => {
            const isSelected = selectedCategory === item;
            return (
              <TouchableOpacity
                key={index}
                style={[styles.categoryTag, { backgroundColor: isSelected ? '#9A7200' : 'transparent' }]}
                onPress={() => setSelectedCategory(item)}
              >
                <Text style={[styles.categoryTagText, { color: isSelected ? '#fff' : '#9A7200' }]}>
                  {item}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        {/* Popular Picks */}
        <View style={{ marginTop: 30 }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 10 }}>
            {popularItems.map((item, index) => (
              <TouchableOpacity key={index} style={styles.popularItemBox}>
                <Image source={item.image} style={styles.popularItemImage} />
                <Text style={styles.popularItemName}>{item.name}</Text>
                <Text style={styles.popularItemPrice}>{item.price}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </ScrollView>

      {/* Footer */}
      <View style={styles.footerNav}>
        <TouchableOpacity style={styles.navItem}>
          <Feather name="home" size={20} color="#fff" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Feather name="grid" size={20} color="#fff" />
          <Text style={styles.navText}>Categories</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Feather name="shopping-bag" size={20} color="#fff" />
          <Text style={styles.navText}>Others</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Feather name="user" size={20} color="#fff" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginTop: 30,
    height:100
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#9A7200',
    marginTop:10,
    left:5
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    borderColor: '#9A7200',
    borderWidth: 1,
    marginTop:20,
    width:350,
    right:35
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    color: '#333',
    height: 30,
    fontSize: 12,
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrapper: {
    position: 'relative',
    paddingHorizontal: 10,
    top:8
  },
  badge: {
    position: 'absolute',
    top: -5,
    right: 0,
    backgroundColor: 'red',
    borderRadius: 10,
    paddingHorizontal: 5,
    minWidth: 12,
    height: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 8,
    fontWeight: 'bold',
  },
  menu: {
    width: 30,
    alignItems: 'center',
  },
  scrollContainer: {
    marginTop: 20,
    maxHeight: 100,
    
  },
  categoryBox: {
    width: 80,
    height: 100,
    marginRight: 12,
    backgroundColor: '#fff',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#9A7200',
    borderWidth: 0.2,
    padding: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
   
  },
  categoryImage: {
    width: 80,
    height: 82,
    borderRadius: 5,
    bottom:2
  },
  categoryText: {
    marginTop: 3,
    fontSize: 10,
    color: '#9A7200',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  bannerWrapper: {
    marginTop: 20,
    height: 160,
  },
  bannerImage: {
    width: 355,
    height: 130,
    marginRight: 10,
    borderRadius: 10,
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 1,
    bottom: 20,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  footerNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#9A7200',
    paddingVertical: 12,
    position: 'absolute',
    bottom: 1,
    left: 0,
    right: 0,
    height: 80,
  },
  navItem: {
    alignItems: 'center',
    marginBottom: 15,
  },
  navText: {
    color: '#fff',
    fontSize: 12,
    marginTop: 2,
  },
  discoverHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#9A7200',
    textAlign: 'center',
    bottom: 20,
  },
  discoverSubheading: {
    fontSize: 10,
    color: '#666',
    marginTop: 12,
    textAlign: 'center',
    bottom: 20,
  },
  categoryTag: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 5,
    marginRight: 12,
    borderWidth: 1,
    borderColor: '#9A7200',
    width: 80,
    height: 30,
    alignItems: 'center',
  },
  categoryTagText: {
    color: '#9A7200',
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center',
  },
  popularItemBox: {
    width: 112,
    height: 150,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderWidth: 0.2,
    borderColor: '#9A7200',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  popularItemImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginBottom: 8,
  },
  popularItemName: {
    fontSize: 12,
    color: '#333',
    textAlign: 'left',
    marginBottom: 4,
  },
  popularItemPrice: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#9A7200',
    right: 21,
    marginTop: 4,
  },
});

  


