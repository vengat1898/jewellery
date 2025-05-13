import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native';
import React from 'react';
import { useRouter, useLocalSearchParams } from 'expo-router';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

import categories1 from '../../assets/images/ring1.png';




export default function Cart() {
  const router = useRouter();
  const [paymentMethod, setPaymentMethod] = React.useState(null);


  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTopRow}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="#9A7200" />
          </TouchableOpacity>
          <Text style={styles.heading}>Cart</Text>
        </View>
      </View>
{/*  */}
      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <TouchableOpacity style={styles.addAddressBox} onPress={() => router.push({ pathname: '/components/AddressNew' })}>
          <View style={styles.addIconContainer}>
            <Feather name="plus" size={20} color="#9A7200" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.addText}>Add new address</Text>
            <Text style={styles.subText}>Let the jewellery find way to your home</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.productBox}>
  {/* Cancel Icon */}
  <TouchableOpacity style={styles.cancelIcon}>
    <Feather name="x" size={18} color="#999" />
  </TouchableOpacity>

  {/* Product Image */}
  <Image source={categories1} style={styles.productImage} />

  {/* Text Details */}
  <View style={styles.productDetails}>
    <Text style={styles.productTitle}>Dazzling Flora Diamond Stud Earring</Text>
    <Text style={styles.productPrice}>₹16,980</Text>
    <Text style={styles.productSubText}>Weight: 1.104g</Text>
    <Text style={styles.productSubText}>Qty: 1</Text>
  </View>
</View>

{/* Coupon Heading */}
<Text style={styles.couponHeading}>Coupon Code & Promo Code</Text>

{/* Coupon Input with Apply Button */}
<View style={styles.couponInputWrapper}>
  <TextInput
    style={styles.couponInput}
    placeholder="Enter coupon code"
    placeholderTextColor="#999"
  />
  <TouchableOpacity style={styles.applyButton}>
    <Text style={styles.applyButtonText}>Apply</Text>
  </TouchableOpacity>
</View>

<Text style={styles.summmeryHeading}>order summery</Text>

<View style={styles.summaryBox}>
  <View style={styles.summaryRow}>
    <Text style={styles.summaryLabel}>Sub Total</Text>
    <Text style={styles.summaryValue}>₹12,3456</Text>
  </View>
  <View style={styles.summaryRow}>
  <Text style={styles.summaryLabel}>Delivery Charges</Text>
  <Text style={[styles.summaryValue, styles.greenText]}>Free</Text>
</View>
  <View style={styles.summaryRow}>
    <Text style={styles.summaryLabel}>Total (incl. of all taxes)</Text>
    <Text style={styles.summaryValue}>₹2,3456</Text>
  </View>
  <View style={styles.summaryRow}>
  <Text style={styles.summaryLabel}>You Save</Text>
  <Text style={[styles.summaryValue, styles.greenText]}>₹16</Text>
</View>
</View>


<View style={styles.paymentMethodContainer}>
  <Text style={styles.paymentHeading}>Choose Payment Method</Text>

  <TouchableOpacity
    style={[
      styles.paymentBoxFull,
      paymentMethod === 'cod' && styles.selectedPaymentBox,
    ]}
    onPress={() => setPaymentMethod('cod')}
  >
    <Text
      style={[
        styles.paymentText,
        paymentMethod === 'cod' && styles.selectedPaymentText,
      ]}
    >
      Cash on Delivery
    </Text>
  </TouchableOpacity>

  <TouchableOpacity
    style={[
      styles.paymentBoxFull,
      paymentMethod === 'online' && styles.selectedPaymentBox,
    ]}
    onPress={() => setPaymentMethod('online')}
  >
    <Text
      style={[
        styles.paymentText,
        paymentMethod === 'online' && styles.selectedPaymentText,
      ]}
    >
      Pay Online
    </Text>
  </TouchableOpacity>
</View>





      </ScrollView>

      <View style={styles.bottomBar}>
  <Text style={styles.bottomPrice}>₹169000</Text>
  <TouchableOpacity style={styles.checkoutButton} onPress={() => router.push({ pathname: '/components/Checkout' })}>
    <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
  </TouchableOpacity>
</View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
    backgroundColor: '#f4f0ec',
    flex: 1,
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 110,
    backgroundColor: 'white',
  },
  headerTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    bottom: 40,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#9A7200',
    right: 280,
  },
  scrollContainer: {
    padding: 14,
    paddingBottom: 120,
  },
  addAddressBox: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 20,
  },
  addIconContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#f4f0ec',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  addText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#9A7200',
  },
  subText: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  productBox: {
  backgroundColor: 'white',
  borderRadius: 8,
  flexDirection: 'row',
  padding: 16,
  marginBottom: 20,
  position: 'relative',
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.1,
  shadowRadius: 4,
  elevation: 3,
},
cancelIcon: {
  position: 'absolute',
  top: 10,
  right: 10,
  zIndex: 1,
  color:'#9A7200'
},
productImage: {
  width: 100,
  height: 100,
  borderRadius: 5,
  resizeMode: 'contain',
  marginRight: 12,
  
},
productDetails: {
  flex: 1,
  justifyContent: 'center',
},
productTitle: {
  fontSize: 12,
  fontWeight: 'bold',
  color: '#333',
  marginBottom: 6,
  
},
productPrice: {
  fontSize: 12,
  fontWeight: '600',
  color: '#9A7200',
  marginBottom: 6,
},
productSubText: {
  fontSize: 12,
  color: '#666',
  marginBottom: 4,
},

couponHeading: {
  fontSize: 13,
  fontWeight: 'bold',
  color: '#333',
  marginBottom: 10,
},

couponInputWrapper: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: 'white',
  borderRadius: 5,
  paddingHorizontal: 10,
  paddingVertical: 8,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.1,
  shadowRadius: 4,
  elevation: 2,
  marginBottom: 20,
},

couponInput: {
  flex: 1,
  fontSize: 14,
  color: '#333',
  paddingRight: 10,
},

applyButton: {
  backgroundColor: '#9A7200',
  paddingVertical: 6,
  paddingHorizontal: 22,
  borderRadius: 6,
},

applyButtonText: {
  color: 'white',
  fontSize: 12,
  fontWeight: '600',
},
summmeryHeading:{
  fontSize: 13,
  fontWeight: 'bold',
  color: '#333',
  marginBottom: 10,

},
summaryBox: {
  backgroundColor: '#fff',
  borderRadius: 12,
  borderWidth: 1,
  borderColor: '#ddd',
  padding: 16,
  marginBottom: 30,
},

summaryRow: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 12,
},

summaryLabel: {
  fontSize: 14,
  color: '#333',
},

summaryValue: {
  fontSize: 14,
  color: '#333',
  fontWeight: '600',
},
greenText: {
  color: 'green',
},

bottomBar: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingHorizontal: 16,
  paddingVertical: 32,
  backgroundColor: '#fff',
  borderTopWidth: 1,
  borderTopColor: '#ddd',
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: 10,
},

bottomPrice: {
  fontSize: 16,
  fontWeight: 'bold',
  color: '#333',
  bottom:10,
  left:10
},

checkoutButton: {
  backgroundColor: '#9A7200',
  paddingVertical: 10,
  paddingHorizontal: 10,
  borderRadius: 8,
  bottom:10
},

checkoutButtonText: {
  color: '#fff',
  fontSize: 14,
  fontWeight: 'bold',
},
paymentMethodContainer: {
  marginBottom: 20,
},
paymentHeading: {
  fontSize: 13,
  fontWeight: 'bold',
  color: '#333',
  marginBottom: 10,
},
paymentBoxFull: {
  width: '100%',
  paddingVertical: 16,
  paddingHorizontal: 20,
  backgroundColor: 'white',
  borderRadius: 5,
  marginBottom: 12,
  alignItems: 'center',
  borderWidth: 1,
  borderColor: '#ccc',
},
selectedPaymentBox: {
  backgroundColor: '#9A7200',
  borderColor: '#9A7200',
},
paymentText: {
  fontSize: 14,
  color: '#333',
  fontWeight: '600',
},
selectedPaymentText: {
  color: '#fff',
},



});

