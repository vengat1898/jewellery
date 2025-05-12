import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

export default function AddAddress() {
  const router = useRouter();
  const [selectedType, setSelectedType] = useState(null);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTopRow}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="#9A7200" />
          </TouchableOpacity>
          <Text style={styles.heading}>Add new address</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Contact Details Box */}
        <View style={styles.box}>
          <Text style={styles.boxHeading}>Contact Details</Text>
          <TextInput placeholder="First Name" style={styles.input} />
          <TextInput placeholder="Last Name" style={styles.input} />
          <TextInput placeholder="Enter Mobile Number" keyboardType="phone-pad" style={styles.input} />
        </View>

        {/* Address Box */}
        <View style={styles.box}>
          <Text style={styles.boxHeading}>Address</Text>

          <TouchableOpacity style={styles.dropdown}>
            <Text style={styles.dropdownText}>Choose Country</Text>
            <Feather name="chevron-down" size={20} color="#000" />
          </TouchableOpacity>

          <TextInput placeholder="Pincode" keyboardType="number-pad" style={styles.input} />
          <TextInput placeholder="Address" style={styles.input} />
          <TextInput placeholder="Locality" style={styles.input} />

          <View style={styles.row}>
            <TextInput placeholder="City" style={[styles.input, styles.halfInput]} />
            <TextInput placeholder="State" style={[styles.input, styles.halfInput]} />
          </View>
        </View>

        {/* Save As Box */}
        <View style={styles.box}>
          <Text style={styles.boxHeading}>Save As</Text>
          <View style={styles.row}>
            <TouchableOpacity
              style={[styles.optionBox, selectedType === 'Home' && styles.selectedBox]}
              onPress={() => setSelectedType('Home')}
            >
              <Text style={styles.optionText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.optionBox, selectedType === 'Work' && styles.selectedBox]}
              onPress={() => setSelectedType('Work')}
            >
              <Text style={styles.optionText}>Work</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

            {/* Bottom Add Address Button */}
      <View style={styles.bottomButtonContainer}>
        <TouchableOpacity style={styles.bottomButton}>
          <Text style={styles.bottomButtonText}>Add Address</Text>
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
    right: 170,
  },
  scrollContainer: {
    padding: 16,
  },
  box: {
    backgroundColor: 'white',
    padding: 16,
    marginBottom: 16,
    borderRadius: 10,
  },
  boxHeading: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
    color: '#333',
  },
  input: {
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },
  dropdown: {
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dropdownText: {
    color: '#555',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfInput: {
    flex: 0.48,
  },
  optionBox: {
    flex: 0.48,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  selectedBox: {
    borderColor: '#9A7200',
    backgroundColor: '#fff7e6',
  },
  optionText: {
    fontWeight: '500',
    color: '#333',
  },
    bottomButtonContainer: {
    padding: 21,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  bottomButton: {
    backgroundColor: '#9A7200',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  bottomButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },

  scrollContainer: {
  padding: 16,
  paddingBottom: 20, // to make room for bottom button
},


});

