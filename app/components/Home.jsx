import { StyleSheet, Text, View, TouchableOpacity,TextInput,ScrollView, Image,Dimensions } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import { useState, useRef } from 'react';

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
const screenWidth = Dimensions.get('window').width;

export default function Home() {
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollRef = useRef(null);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.menu}>
          <Icon name="menu" size={36} color="#9A7200" />
        </TouchableOpacity>
        <Text style={styles.title}>Sri Chandra jewell Craft</Text>
        <View style={styles.icons}>
          <View style={styles.iconWrapper}>
            <TouchableOpacity style={styles.heartIcon}>
              <Feather name="heart" size={20} color="#9A7200" />
            </TouchableOpacity>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>2</Text>
            </View>
          </View>

          <View style={styles.iconWrapper}>
            <TouchableOpacity style={styles.bagIcon}>
              <Feather name="shopping-bag" size={20} color="#9A7200" />
            </TouchableOpacity>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>3</Text>
            </View>
          </View>

          <View style={styles.iconWrapper}>
            <TouchableOpacity style={styles.bellIcon}>
              <Feather name="bell" size={22} color="#9A7200" />
            </TouchableOpacity>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>1</Text>
            </View>
          </View>
        </View>
      </View>

       {/* Search Bar */}
       <View style={styles.searchContainer}>
        <Feather name="search" size={20} color="#9A7200" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search for jewellery"
          placeholderTextColor="#9A7200"
        />
      </View>

     {/* Scrollable Body */}
     <ScrollView
            contentContainerStyle={{ paddingBottom: 100 }}
            showsVerticalScrollIndicator={false}
          >

      {/* categories horizontal scroll image Bar */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false} 
        style={styles.scrollContainer}
        >
      {categories.map((item, index) => (
     <TouchableOpacity key={index} style={styles.categoryBox}>
      <Image source={item.image} style={styles.categoryImage} />
      <Text style={styles.categoryText}>{item.name}</Text>
     </TouchableOpacity>
    ))}
   </ScrollView>

     {/* banner */}
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
        style={[
          styles.dot,
          { backgroundColor: activeIndex === idx ? '#9A7200' : '#ccc' },
        ]}
      />
    ))}
  </View>

  {/* Discover Categories Heading */}
<View style={{ marginTop: 25 }}>
  <Text style={styles.discoverHeading}>Discover Our Categories</Text>
  <Text style={styles.discoverSubheading}>Our top categories, just now</Text>
</View>

{/* Category Tags Scroll */}
<ScrollView
  horizontal
  showsHorizontalScrollIndicator={false}
  style={{ marginTop: 10 }}
>
  {['All', 'Necklace', 'Rings', 'Earrings', 'Bangles', 'Jhumkas', 'Bracelets'].map((item, index) => (
    <TouchableOpacity key={index} style={styles.categoryTag}>
      <Text style={styles.categoryTagText}>{item}</Text>
    </TouchableOpacity>
    ))}
</ScrollView>

  </ScrollView>

  {/* Footer Navigation */}
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
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 50,
      paddingHorizontal: 16,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 30,
    },
    title: {
      flex: 1,
      textAlign: 'center',
      fontSize: 15,
      fontWeight: 'bold',
      color: '#9A7200',
    },
    icons: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    iconWrapper: {
      position: 'relative',
      paddingHorizontal: 10,  
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
    heartIcon: {},
    bagIcon: {},
    bellIcon: {},
    menu: {
      width: 30,
      alignItems: 'center',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: '#f4f4f4',
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 10,
        borderColor: '#9A7200',
        borderWidth: 1,
        bottom:1
      },
      searchInput: {
        flex: 1,
        marginLeft: 10,
        color: '#333',
        height:23,
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
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#9A7200',
        borderWidth: 0.1,
        padding: 5,
      
        // iOS shadow
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
      
      categoryImage: {
        width: 80,
        height: 82,
        borderRadius:10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
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
        height: 180,
      },
      
      bannerImage: {
        width: 355,
        height: 130,
        // resizeMode: 'cover',
        marginRight: 10,
        borderRadius:10
      },
      
      dotContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 1,
        bottom:30
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
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        height:80
      },
      navItem: {
        alignItems: 'center',
        marginBottom:15
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
        textAlign:"center"
      },
      
      discoverSubheading: {
        fontSize: 10,
        color: '#666',
        marginTop: 2,
        textAlign:"center"
      },
      
      categoryTag: {
        paddingHorizontal: 16,
        paddingVertical: 6,
        borderRadius: 10,
        marginRight: 12,
        borderWidth: 1,
        borderColor: '#9A7200',
        width:80,
        height:30,
        alignItems:"center"
       
        
      },
      
      categoryTagText: {
        color: '#9A7200',
        fontSize: 10,
        fontWeight: '500',
        textAlign:"center"
      },
      
    
  })
  


