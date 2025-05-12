import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Modal,
  Dimensions,
} from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';

const screenHeight = Dimensions.get('window').height;

export default function Checkout() {
  const router = useRouter();
  const [selectedPayment, setSelectedPayment] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedUpiApp, setSelectedUpiApp] = useState('');

  const handleOptionPress = (key) => {
    setSelectedPayment(key);
    setModalVisible(true);
  };

  return (
    <>
      {/* Fixed Header */}
      <View style={styles.header}>
        <View style={styles.headerTopRow}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="#9A7200" />
          </TouchableOpacity>
          <Text style={styles.heading}>checkout</Text>
        </View>
      </View>

      {/* Scrollable Content */}
      <ScrollView style={styles.container} contentContainerStyle={{ paddingTop: 110 }}>
        {/* Total Price Box */}
        <View style={styles.totalBox}>
          <Text style={styles.totalLabel}>Total Price</Text>
          <View style={styles.priceRow}>
            <Text style={styles.rupeeIcon}>₹</Text>
            <Text style={styles.totalAmount}>16,786</Text>
          </View>
        </View>

        {/* Payment Options */}
        <Text style={styles.paymentHeading}>Payment Options</Text>
        <View style={styles.paymentOptions}>
          {[
            { key: 'upi', label: 'UPI' },
            { key: 'card', label: 'Credit / Debit Card' },
            { key: 'other', label: 'Net Banking' },
          ].map(option => (
            <TouchableOpacity
              key={option.key}
              style={[
                styles.paymentOption,
                selectedPayment === option.key && styles.paymentOptionSelected,
              ]}
              onPress={() => handleOptionPress(option.key)}
            >
              <View style={styles.optionLeft}>
                <Feather
                  name={selectedPayment === option.key ? 'check-circle' : 'circle'}
                  size={20}
                  color={selectedPayment === option.key ? '#9A7200' : '#aaa'}
                />
                <Text style={styles.paymentLabel}>{option.label}</Text>
              </View>
              <Entypo name="chevron-right" size={20} color="#9A7200" />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Modal */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableOpacity
          activeOpacity={1}
          onPressOut={() => setModalVisible(false)}
          style={styles.modalOverlay}
        >
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>
              {selectedPayment.toUpperCase()} Payment
            </Text>

            {selectedPayment === 'upi' ? (
              <>
                <Text style={styles.modalText}>Select a UPI App:</Text>
                {['Google Pay', 'PhonePe', 'Paytm'].map(app => (
                  <TouchableOpacity
                    key={app}
                    style={[
                      styles.upiAppButton,
                      selectedUpiApp === app && styles.upiAppSelected,
                    ]}
                    onPress={() => setSelectedUpiApp(app)}
                  >
                    <Feather
                      name={selectedUpiApp === app ? 'check-circle' : 'circle'}
                      size={18}
                      color={selectedUpiApp === app ? '#9A7200' : '#aaa'}
                    />
                    <Text style={styles.upiAppLabel}>{app}</Text>
                  </TouchableOpacity>
                ))}
              </>
            ) : (
              <Text style={styles.modalText}>{selectedPayment} payment.</Text>
            )}

            <TouchableOpacity
              style={styles.closeModalButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={{ color: '#fff' }}>Close</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>

      {/* Bottom Button */}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.payButton}>
          <Text style={styles.payButtonText}>Continue to Pay ₹16,786</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f4f0ec',
    flex: 1,
  },
  header: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingTop: 50,
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
  totalBox: {
    backgroundColor: '#fff',
    margin: 16,
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  totalLabel: {
    fontSize: 14,
    color: '#555',
    marginBottom: 8,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rupeeIcon: {
    fontSize: 15,
    color: '#9A7200',
    marginRight: 4,
  },
  totalAmount: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#9A7200',
  },
  paymentHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#9A7200',
    marginLeft: 16,
    marginTop: 20,
    marginBottom: 10,
  },
  paymentOptions: {
    marginHorizontal: 16,
    paddingBottom: 80,
  },
  paymentOption: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    justifyContent: 'space-between',
  },
  paymentOptionSelected: {
    borderColor: '#9A7200',
    backgroundColor: '#fefbf4',
  },
  optionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paymentLabel: {
    fontSize: 16,
    marginLeft: 10,
    color: '#333',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    minHeight: screenHeight * 0.3,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#9A7200',
    marginBottom: 18,
  },
  modalText: {
    fontSize: 16,
    color: '#444',
  },
  closeModalButton: {
    marginTop: 20,
    backgroundColor: '#9A7200',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  upiAppButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    marginVertical: 10,
    borderRadius: 6,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  upiAppSelected: {
    borderColor: '#9A7200',
    backgroundColor: '#fefbf4',
  },
  upiAppLabel: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff',
    paddingVertical: 24,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  payButton: {
    backgroundColor: '#9A7200',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
  },
  payButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});




 