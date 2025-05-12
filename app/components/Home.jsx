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
import productbanner from '../../assets/images/product-banner.jpg';
import sparklebanner from '../../assets/images/sparklebanner.jpg';
import sparkle1 from '../../assets/images/sparkle1.jpg';
import sparkle2 from '../../assets/images/sparkle2.jpg';
import sparkle3 from '../../assets/images/sparkle3.jpg';

import craftspecial1 from '../../assets/images/craftspecial1.jpg';
import craftspecial2 from '../../assets/images/craftspecial2.webp';
import craftspecial3 from '../../assets/images/craftspecial3.webp';

import children from '../../assets/images/children.jpg';
import women from '../../assets/images/women.webp';
import man from '../../assets/images/man.jpg';



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
                // onPress={() => setSelectedCategory(item)}
                 onPress={() => router.push({ pathname: '/components/Categories', params: { category: item.name } })}
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
              <TouchableOpacity key={index} style={styles.popularItemBox}
               onPress={() => router.push({ pathname: '/components/Categories'})}>
                <Image source={item.image} style={styles.popularItemImage} />
                <Text style={styles.popularItemName}>{item.name}</Text>
                <Text style={styles.popularItemPrice}>{item.price}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>


        <View style={styles.sparkleSection}>
           <Text style={styles.sparkleHeading}>Sparkle Every Day</Text>
           <Text style={styles.sparkleSubheading}>
           Discover timeless pieces that elevate your style
           </Text>
           <Image source={sparklebanner} style={styles.sparkleImage} />
         </View>
         
         <View style={styles.sparkleImageRow}>
  {[sparkle1, sparkle2, sparkle3].map((img, index) => (
    <TouchableOpacity key={index} style={styles.sparkleImageBox} activeOpacity={0.8}>
      <Image source={img} style={styles.sparkleImageItem} />
    </TouchableOpacity>
  ))}
</View>




        {/* Sparkle Every Day Section */}

        <Text style={styles.sparkleHeading1}>Gifting</Text>
  <Text style={styles.sparkleSubheading1}>
    Find the perfect Gift
  </Text>
<View style={styles.sparkleBox1}>
  {/* <Text style={styles.sparkleHeading1}>Gifting</Text>
  <Text style={styles.sparkleSubheading1}>
    Find the perfect Gift
  </Text> */}

  <TouchableOpacity activeOpacity={0.8} style={styles.bannerTouchable}>
    <Image source={productbanner} style={styles.productBanner} />
    <View style={styles.bannerRow}>
  <Text style={styles.bannerLeftText}>Surprise for you</Text>
  <TouchableOpacity style={styles.bannerExploreBtn}>
    <Text style={styles.bannerExploreText}>Explore</Text>
    <Feather name="chevron-right" size={16} color="#9A7200" />
  </TouchableOpacity>
</View>

  </TouchableOpacity>
</View>


<View style={styles.craftSection}>
  <Text style={styles.craftHeading}>Sri Chandra Jewell Craft</Text>
  <Text style={styles.craftSubheading}>Our top picks just for you</Text>

<View style={styles.craftBox}>
  {[craftspecial1, craftspecial2, craftspecial3].map((img, index) => (
    <TouchableOpacity key={index} style={styles.craftItem}>
      <Image source={img} style={styles.craftImage} />
      <Text style={styles.exploreText}>Explore</Text>
    </TouchableOpacity>
  ))}
</View>

</View>



<View style={{ marginTop: 30 }}>
  <Text style={styles.sectionHeading}>Shop by Gender</Text>
  <Text style={styles.sectionSubheading}>
    First class jewellery for first-class men, women & children
  </Text>

  <View style={styles.genderBox}>
    {[{ label: 'Man', image: man }, { label: 'Children', image: children }].map((item, index) => (
      <TouchableOpacity key={index} style={styles.genderItem}>
        <Image source={item.image} style={styles.genderImage} />
        <View style={styles.genderTextRow}>
          <Text style={styles.genderLabel}>{item.label}</Text>
          <TouchableOpacity style={styles.exploreBtn}>
            <Text style={styles.exploreText}>Explore</Text>
            <Feather name="chevron-right" size={16} color="#9A7200" />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    ))}
  </View>

<TouchableOpacity style={styles.rectangleBox} onPress={() => console.log('Explore Women')}>
  <Image source={women} style={styles.rectangleImage} />
  <View style={styles.rectangleTextRow}>
    <Text style={styles.rectangleLabel}>Women</Text>
    <View style={styles.rectangleExploreBtn}>
      <Text style={styles.rectangleExploreText}>Explore</Text>
      <Feather name="chevron-right" size={16} color="#9A7200" />
    </View>
  </View>
</TouchableOpacity>


</View>




      </ScrollView>

      {/* Footer */}
      <View style={styles.footerNav}>
        <TouchableOpacity style={styles.navItem}>
          <Feather name="home" size={20} color="#fff" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => router.push({ pathname: '/components/Categoriesfooter'})}>
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
    backgroundColor: '#fff',
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


  sparkleSection: {
  marginTop: 20,
  alignItems: 'center',
  paddingHorizontal: 10,
},
sparkleHeading: {
  fontSize: 13,
  fontWeight: 'bold',
  color: '#9A7200',
  marginBottom: 10,
},
sparkleSubheading: {
  fontSize: 12,
  color: '#666',
  marginBottom: 13,
  textAlign: 'center',
},
sparkleImage: {
  width: '100%',
  height: 120,
  borderRadius: 5,
  resizeMode: 'cover',
},


sparkleImageRow: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: 16,
  paddingHorizontal: 4,
},
sparkleImageBox: {
  width: 110,
  height: 110,
  marginHorizontal: 4,
  borderRadius: 2,
  overflow: 'hidden',
},
sparkleImageItem: {
  width: '100%',
  height: '100%',
  borderRadius: 5,
  resizeMode: 'cover',
},





  sparkleBox1: {
  marginTop: 20,
  padding: 0,
  backgroundColor: '#fff',
  borderRadius: 5,
  borderColor: '#9A7200',
  borderWidth: 0.3,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 3,
  height:135
},
sparkleHeading1: {
  fontSize: 15,
  fontWeight: 'bold',
  color: '#9A7200',
  marginBottom: 8,
  textAlign:"center",
  top:20
},
sparkleSubheading1: {
  fontSize: 12,
  color: '#666',
  marginBottom: 10,
  textAlign:"center",
  top:20
},
bannerTouchable: {
  // position: 'relative',
 
  overflow: 'hidden',
},
productBanner: {
  width: '100%',
  height: 100,
  resizeMode: 'cover',
},
bannerOverlay: {
  position: 'absolute',
  bottom: 10,
  left: 10,
},
bannerText: {
  fontSize: 12,
  fontWeight: 'bold',
  color: '#fff',
  textShadowColor: 'rgba(0, 0, 0, 0.7)',
  textShadowOffset: { width: 1, height: 1 },
  textShadowRadius: 2,
},
exploreRow: {
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: 4,
},
exploreText: {
  fontSize: 8,
  fontWeight: 'bold',
  color: '#9A7200',
  marginRight: 4,
  backgroundColor: '#fff',
  paddingHorizontal: 8,
  paddingVertical: 4,
  borderRadius: 5,
},
bannerRow: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: 8,
  paddingHorizontal: 6,
},
bannerLeftText: {
  fontSize: 10,
  fontWeight: 'bold',
  color: '#9A7200',
},
bannerExploreBtn: {
  flexDirection: 'row',
  alignItems: 'center',
},
bannerExploreText: {
  fontSize: 10,
  fontWeight: 'bold',
  color: '#9A7200',
  marginRight: 4,
},

craftSection: {
  marginTop: 30,
  paddingHorizontal: 10,
},

craftHeading: {
  fontSize: 14,
  fontWeight: 'bold',
  color: '#9A7200',
  textAlign: 'center',
  marginBottom: 4,
},

craftSubheading: {
  fontSize: 10,
  color: '#666',
  textAlign: 'center',
  marginBottom: 12,
},

craftBox: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  backgroundColor: '#f9f5ef',
  borderRadius: 10,
  padding: 10,
  elevation: 2,
  marginTop: 10,
},

craftItem: {
  width: 90,
  height: 110,
  backgroundColor: '#fff',
  borderRadius: 8,
  alignItems: 'center',
  justifyContent: 'center',
  paddingVertical: 8,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.1,
  shadowRadius: 2,
  elevation: 2,
},

craftImage: {
  width: 90,
  height: 90,
  borderRadius: 6,
  resizeMode: 'cover',
  marginBottom: 6,
},

exploreText: {
  fontSize: 10,
  color: '#9A7200',
  fontWeight: '600',
  bottom:2
},



sectionHeading: {
  fontSize: 14,
  fontWeight: 'bold',
  color: '#9A7200',
  marginBottom: 6,
  textAlign: 'center',
},

sectionSubheading: {
  fontSize: 10,
  color: '#555',
  textAlign: 'center',
  marginBottom: 16,
},

genderBox: {
  flexDirection: 'row',
  justifyContent: 'space-between',
},

genderItem: {
  width: '48%',
  backgroundColor: '#fff',
  borderRadius: 5,
  overflow: 'hidden',
  borderColor: '#9A7200',
  borderWidth: 0.3,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 2,
  elevation: 2,
},

genderImage: {
  width: '100%',
  height: 150,
  resizeMode: 'cover',
},

genderTextRow: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingHorizontal: 10,
  paddingVertical: 8,
},

genderLabel: {
  fontSize: 10,
  fontWeight: '600',
  color: '#333',
},

exploreBtn: {
  flexDirection: 'row',
  alignItems: 'center',
},

exploreText: {
  fontSize: 10,
  color: '#9A7200',
  marginRight: 2,
},

rectangleBox: {
  width: '100%',
  borderRadius: 5,
  overflow: 'hidden',
  backgroundColor: '#fff',
  borderColor: '#9A7200',
  borderWidth: 0.3,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 2,
  elevation: 2,
  marginVertical: 16,
},

rectangleImage: {
  width: '100%',
  height: 150,
  resizeMode: 'cover',
},

rectangleTextRow: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: 10,
},

rectangleLabel: {
  fontSize: 12,
  fontWeight: '600',
  color: '#333',
},

rectangleExploreBtn: {
  flexDirection: 'row',
  alignItems: 'center',
},

rectangleExploreText: {
  fontSize: 10,
  color: '#9A7200',
  marginRight: 2,
},


});

  


