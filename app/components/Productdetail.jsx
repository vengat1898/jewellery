import { StyleSheet, Text, View, TouchableOpacity, TextInput,Image,ScrollView } from 'react-native';
import React from 'react';
import { useRouter, useLocalSearchParams } from 'expo-router';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

import categories1 from '../../assets/images/ring2.png';
import categories2 from '../../assets/images/ring2.png';
import categories3 from '../../assets/images/ring2.png';

import categorie1 from '../../assets/images/ring2.png';
import categorie2 from '../../assets/images/ring2.png';
import categorie3 from '../../assets/images/ring2.png';
import categorie4 from '../../assets/images/ring2.png';
import categorie5 from '../../assets/images/ring2.png';
import categorie6 from '../../assets/images/ring2.png';


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

export default function Productdetail() {
    const router = useRouter();
    const [selectedWeight, setSelectedWeight] = React.useState(null);

    const weights = ['1.049', '1.098', '1.075'];
  return (
    <View style={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            {/*  Heading, Icons */}
            <View style={styles.headerTopRow}>
              <TouchableOpacity onPress={() => router.back()}>
                <Ionicons name="arrow-back" size={24} color="#9A7200" />
              </TouchableOpacity>
    
              <Text style={styles.heading}>product details</Text>
    
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
          </View>

          <View style={styles.rectangleBox}>
  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
    {[categories1, categories2, categories3].map((img, index) => (
      <Image key={index} source={img} style={styles.scrollImage} />
    ))}
  </ScrollView>
</View>




<ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: 200 }}>
  <View style={styles.rectangleBox}>
    <Text style={styles.productTitle}>Banjaras saffron</Text>
    <Text style={styles.gramTag}>4 grams</Text>

    <View style={styles.ratingRow}>
      {[...Array(5)].map((_, index) => (
        <Ionicons key={index} name="star" size={16} color="#FFD700" />
      ))}
    </View>

    <View style={styles.priceRow}>
      <Text style={styles.rupeeIcon}>₹</Text>
      <Text style={styles.priceText}>12,500</Text>
    </View>

    <Text style={styles.taxText}>inclusive of all taxes</Text>
  </View>

  <View style={styles.weightBox}>
    <Text style={styles.weightTitle}>Gross weight (in gms)</Text>
    <Text style={styles.weightSubtext}>
      Weight and price of the jewellery item may be subject to stock
    </Text>
    <Text style={styles.weightLabel}>Weight (grams)</Text>

    <View style={styles.weightOptionsRow}>
      {weights.map((weight, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.weightOption,
            selectedWeight === weight && styles.weightOptionSelected,
          ]}
          onPress={() => setSelectedWeight(weight)}
        >
          <Text
            style={[
              styles.weightOptionText,
              selectedWeight === weight && styles.weightOptionTextSelected,
            ]}
          >
            {weight}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  </View>

  <View style={styles.infoBox}>
  <TouchableOpacity style={styles.infoHeader}>
    <Text style={styles.infoTitle}>Description of Product</Text>
    <Ionicons name="chevron-down" size={20} color="#9A7200" />
  </TouchableOpacity>
</View>

<View style={styles.infoBox}>
  <TouchableOpacity style={styles.infoHeader}>
    <Text style={styles.infoTitle}>Product Specification</Text>
    <Ionicons name="chevron-down" size={20} color="#9A7200" />
  </TouchableOpacity>
</View>

<View style={styles.rectangleScrollBox}>
  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
    {popularItems.map((item, index) => (
      <View key={index} style={styles.squareBox}>
        <Image source={item.image} style={styles.squareImage} />
        <Text style={styles.itemName} numberOfLines={2}>{item.name}</Text>
        <View style={styles.priceRow}>
        <Text style={styles.itemPrice}>{item.price}</Text>
       <Text style={styles.itemStrikePrice}>{item.strikePrice}</Text>
</View>
      </View>
    ))}
  </ScrollView>
</View>



</ScrollView>


<View style={styles.footer}>
  <TouchableOpacity style={styles.addToCartButton} onPress={() => router.push({ pathname: '/components/Cart' })}>
    <Text style={styles.addToCartText}>Add to cart</Text>
  </TouchableOpacity>
</View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 0,
        backgroundColor: '#f4f0ec',
        flex: 1,
      },
      header: {
        paddingHorizontal: 16,
        paddingTop: 130,
        backgroundColor: 'white',
      },
      headerTopRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        bottom:40
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
      rectangleBox: {
  marginTop: 20,
  marginHorizontal: 0,
  paddingHorizontal: 16,
  paddingVertical: 10,
  backgroundColor: 'white',
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: -2 },
  shadowOpacity: 0.05,
  shadowRadius: 6,
  elevation: 3,
  height: 180, // reduced height
 
},

scrollImage: {
  width: 280, // reduced width
  height: 220, // reduced height
  resizeMode: 'contain',
  marginRight: 10,
  borderRadius: 8,
},

      footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        paddingHorizontal: 36,
        paddingVertical: 36,
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderTopColor: '#eee', 
      },
      
      addToCartButton: {
        backgroundColor: '#9A7200',
        borderRadius: 12,
        paddingVertical: 14,
        alignItems: 'center',
        justifyContent: 'center',
      },
      
      addToCartText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
      },

rectangleBox: {
  marginTop: 20,
  marginHorizontal: 0, // Full width
  paddingHorizontal: 16,
  paddingVertical: 10,
  backgroundColor: 'white',
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: -2 },
  shadowOpacity: 0.05,
  shadowRadius: 6,
  elevation: 3,
},


  productTitle: {
      fontSize: 18,
     fontWeight: 'bold',
     color: '#000',
     marginTop: 16,
},

gramTag: {
  fontSize: 12,
  color: 'white',
  backgroundColor: '#9A7200',
  paddingHorizontal: 8,
  paddingVertical: 2,
  borderRadius: 2,
  alignSelf: 'flex-start',
  marginTop: 6,
},

ratingRow: {
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: 10,
},

reviewCount: {
  marginLeft: 6,
  fontSize: 10,
  color: '#555',
},

priceRow: {
  flexDirection: 'row',
  alignItems: 'flex-end',
  marginTop: 10,
  
},

rupeeIcon: {
  fontSize: 15,
  color: '#000',
  marginRight: 2,
  fontWeight: 'bold',
  right:140
},

priceText: {
  fontSize: 15,
  color: '#000',
  fontWeight: 'bold',
  right:145
},

taxText: {
  fontSize: 12,
  color: '#777',
  marginTop: 4,
},

weightBox: {
  marginTop: 20,
  paddingHorizontal: 16,
  paddingVertical: 16,
  backgroundColor: 'white',
  borderRadius: 12,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.05,
  shadowRadius: 4,
  elevation: 2,
},

weightTitle: {
  fontSize: 16,
  fontWeight: 'bold',
  color: '#000',
  marginBottom: 4,
},

weightSubtext: {
  fontSize: 12,
  color: '#777',
  marginBottom: 10,
},

weightLabel: {
  fontSize: 14,
  color: '#000',
  marginBottom: 10,
},

weightOptionsRow: {
  flexDirection: 'row',
  gap: 10,
},

weightOption: {
  borderWidth: 1,
  borderColor: '#9A7200',
  borderRadius: 8,
  paddingVertical: 6,
  paddingHorizontal: 12,
  backgroundColor: 'white',
},

weightOptionSelected: {
  backgroundColor: '#9A7200',
},
weightOptionText: {
  color: '#9A7200',
  fontWeight: 'bold',
},
weightOptionTextSelected: {
  color: 'white',
},

infoBox: {
  marginTop: 20,
  paddingHorizontal: 16,
  paddingVertical: 16,
  backgroundColor: 'white',
  borderRadius: 12,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.05,
  shadowRadius: 4,
  elevation: 2,
},

infoHeader: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
},

infoTitle: {
  fontSize: 16,
  fontWeight: 'bold',
  color: '#000',
},

rectangleScrollBox: {
  marginTop: 20,
  paddingHorizontal: 16,
},

squareBox: {
  width: 140,
  backgroundColor: '#fff',
  borderRadius: 8,
  padding: 10,
  marginRight: 12,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.1,
  shadowRadius: 3,
  elevation: 3,
  alignItems: 'center',
},

squareImage: {
  width: 100,
  height: 100,
  resizeMode: 'contain',
  marginBottom: 8,
},

itemName: {
     marginTop: 2,
    fontSize: 11,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'left', // changed from 'center' to 'left'
    alignSelf: 'flex-start',
},

priceRow: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 4,
  gap: 6, // You can also use marginLeft if gap is unsupported in your RN version
},

itemPrice: {
  fontSize: 13,
  color: '#9A7200',
  fontWeight: 'bold',
  right:8
},

itemStrikePrice: {
  fontSize: 11,
  color: '#999',
  textDecorationLine: 'line-through',
},



})
