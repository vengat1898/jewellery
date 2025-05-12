import { StyleSheet, Text, View, TouchableOpacity, TextInput,Image,ScrollView } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import { Modal } from 'react-native';
import React, { useState } from 'react';

import sortIcon from '../../assets/images/sort.png';
import filterIcon from '../../assets/images/filter.png';

import categorie1 from '../../assets/images/ring1.png';
import categorie2 from '../../assets/images/ring2.png';
import categorie3 from '../../assets/images/ring3.png';
import categorie4 from '../../assets/images/ring1.png';
import categorie5 from '../../assets/images/ring2.png';
import categorie6 from '../../assets/images/ring3.png';


const popularItems = [
    { name: 'Gracefull overlap gold', image: categorie1, price: '₹12,000', strikePrice: '₹15,000' },
    { name: 'Gracefull overlap gold', image: categorie2, price: '₹35,000', strikePrice: '₹40,000' },
    { name: 'Gracefull overlap gold', image: categorie2, price: '₹35,000', strikePrice: '₹42,000' },
    { name: 'Gracefull overlap gold', image: categorie3, price: '₹18,500', strikePrice: '₹20,000' },
    { name: 'Gracefull overlap gold', image: categorie4, price: '₹22,000', strikePrice: '₹26,000' },
    { name: 'Gracefull overlap gold', image: categorie5, price: '₹28,000', strikePrice: '₹32,000' },
    { name: 'Gracefull overlap gold', image: categorie6, price: '₹40,000', strikePrice: '₹45,000' },
    { name: 'Gracefull overlap gold', image: categorie2, price: '₹35,000', strikePrice: '₹39,000' },
    { name: 'Gracefull overlap gold', image: categorie3, price: '₹18,500', strikePrice: '₹23,000' },
    { name: 'Gracefull overlap gold', image: categorie4, price: '₹22,000', strikePrice: '₹27,000' },
    { name: 'Gracefull overlap gold', image: categorie5, price: '₹28,000', strikePrice: '₹31,000' },
    { name: 'Gracefull overlap gold', image: categorie6, price: '₹40,000', strikePrice: '₹44,000' },
  ];
  
  

export default function Categories() {
  const router = useRouter();
  const { category } = useLocalSearchParams(); // Receive category name
  const [sortModalVisible, setSortModalVisible] = useState(false);


  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        {/* Row 1: Back, Heading, Icons */}
        <View style={styles.headerTopRow}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="#9A7200" />
          </TouchableOpacity>

          <Text style={styles.heading}>{category}</Text>

          <View style={styles.icons}>
            <View style={styles.iconWrapper}>
              <Feather name="heart" size={20} color="#9A7200" />
              <View style={styles.badge}>
                <Text style={styles.badgeText}>2</Text>
              </View>
            </View>
            <View style={[styles.iconWrapper, { marginLeft: 20 }]}>
              <Feather name="shopping-bag" size={20} color="#9A7200" />
              <View style={styles.badge}>
                <Text style={styles.badgeText}>1</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Row 2: Search Bar */}
        <View style={styles.searchContainer}>
          <Feather name="search" size={18} color="#9A7200" style={{ marginRight: 8 }} />
          <TextInput
        placeholder={`Search in ${category}`}
        placeholderTextColor="#999"
        style={styles.searchInput}
/>
        </View>
      </View>

{/* Row 3: Filter and Sort By */}
<View style={styles.filterSortContainer}>
  <TouchableOpacity style={styles.filterSortBox}onPress={() => router.push({ pathname: '/components/CetegorieFilter'})}>
    <Image source={filterIcon} style={styles.filterSortImage} resizeMode="contain" />
    <Text style={styles.filterSortText}>Filter</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.filterSortBox} onPress={() => setSortModalVisible(true)}>
  <Image source={sortIcon} style={styles.filterSortImage} resizeMode="contain" />
  <Text style={styles.filterSortText}>Sort By</Text>
</TouchableOpacity>

</View>

{/* Popular Items Scroll */}
<ScrollView contentContainerStyle={styles.popularItemsContainer}>
<View style={styles.popularItemsContainer}>
  <View style={styles.popularItemsRow}>
    {popularItems.map((item, index) => (
      <TouchableOpacity key={index} style={styles.popularItemBox}  onPress={() => router.push({ pathname: '/components/Productdetail' })}>
        <Image source={item.image} style={styles.popularItemImage} resizeMode="cover" />
        <Feather name="heart" size={14} color="#9A7200" style={styles.heartIcon} />
        <Text style={styles.popularItemName}>{item.name}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
          <Text style={styles.strikePrice}>{item.strikePrice}</Text>
          <Text style={styles.popularItemPrice}>{item.price}</Text>
        </View>
      </TouchableOpacity>
    ))}
  </View>
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

      <Modal
  animationType="slide"
  transparent={true}
  visible={sortModalVisible}
  onRequestClose={() => setSortModalVisible(false)}
>
  <View style={styles.modalOverlay}>
    <View style={styles.modalContainer}>
      <Text style={styles.modalHeading}>Sort By</Text>
      <TouchableOpacity style={styles.modalOption} onPress={() => {/* handle latest */}}>
        <Text style={styles.modalOptionText}>Latest</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.modalOption} onPress={() => {/* handle discount */}}>
        <Text style={styles.modalOptionText}>Discount</Text>
      </TouchableOpacity>

      <Text style={[styles.modalHeading, { marginTop: 20 }]}>Features</Text>
      <TouchableOpacity style={styles.modalOption} onPress={() => {/* handle price low-high */}}>
        <Text style={styles.modalOptionText}>Price: Low to High</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.modalOption} onPress={() => {/* handle price high-low */}}>
        <Text style={styles.modalOptionText}>Price: High to Low</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.modalOption} onPress={() => {/* handle rating */}}>
        <Text style={styles.modalOptionText}>Customer Rating</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setSortModalVisible(false)} style={styles.closeModalButton}>
        <Text style={styles.closeModalText}>Close</Text>
      </TouchableOpacity>
    </View>
  </View>
</Modal>







    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
    backgroundColor: 'white',
    flex: 1,
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 70,
    backgroundColor: 'white',
  },
  headerTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#9A7200',
    right:60
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrapper: {
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: 'red',
    borderRadius: 8,
    paddingHorizontal: 4,
    height: 14,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 14,
  },
  badgeText: {
    color: 'white',
    fontSize: 8,
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 18,
    height: 35,
    marginTop: 18,
    borderWidth: 1,
    borderColor: '#9A7200', 
  },
  
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#333',
  },
  filterSortContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start', // Align to the left
    marginTop: 26,
    paddingHorizontal: 19,
    gap: 12, // Adds space between the two boxes
  },
  
  filterSortBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    width: '30%', // Let width adjust to content
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#9A7200',
  },
  
  filterSortImage: {
    width: 16,
    height: 16,
    marginRight: 8,
  },
  
  filterSortText: {
    color: '#9A7200',
    fontWeight: '600',
    fontSize: 14,
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

  popularItemsContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    paddingBottom: 60,
  },
  
  popularItemsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  
  popularItemBox: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: '30%',
    marginBottom: 16,
    padding: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  
  popularItemImage: {
    width: '100%',
    height: 90,
    borderRadius: 8,
  },
  
  popularItemName: {
    marginTop: 2,
    fontSize: 8,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'left', // changed from 'center' to 'left'
    alignSelf: 'flex-start',
  },
  
  popularItemPrice: {
    fontSize: 8,
    color: '#9A7200',
    marginTop: 4,
    textAlign: 'left', // changed from 'center' to 'left'
  alignSelf: 'flex-start',
  },
  
  heartIcon: {
    position: 'absolute',
    top: 8,
    right: 8,
  },
  strikePrice: {
    fontSize: 8,
    color: '#999',
    textDecorationLine: 'line-through',
    alignSelf: 'flex-start',
    marginTop: 4,
  },

  modalOverlay: {
  flex: 1,
  backgroundColor: 'rgba(0,0,0,0.5)',
  justifyContent: 'flex-end',
},
modalContainer: {
  backgroundColor: 'white',
  padding: 20,
  borderTopLeftRadius: 16,
  borderTopRightRadius: 16,
},
modalHeading: {
  fontSize: 16,
  fontWeight: 'bold',
  color: '#9A7200',
  marginBottom: 10,
},
modalOption: {
  paddingVertical: 10,
},
modalOptionText: {
  fontSize: 14,
  color: '#333',
},
closeModalButton: {
  marginTop: 30,
  paddingVertical: 13,
  paddingHorizontal:60,
  alignItems: 'center',
  backgroundColor: '#9A7200',
  borderRadius: 8,
 
},
closeModalText: {
  color: 'white',
  fontWeight: 'bold',
},

});




  
