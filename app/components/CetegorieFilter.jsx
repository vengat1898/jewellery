import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

export default function CetegorieFilter() {
  const router = useRouter();
  const filterOptions = [
    'Price',
    'Jewellery Type',
    'Product',
    'Gender',
    'Purity',
    'Occasion',
    'Metal',
    'Metal Colour',
    'Width',
  ];

  const [activeButton, setActiveButton] = useState('');

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTopRow}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="#9A7200" />
          </TouchableOpacity>
          <Text style={styles.heading}>Filter</Text>
        </View>
      </View>

      {/* Filter Options */}
      <ScrollView style={styles.scrollBox} contentContainerStyle={styles.scrollContent}>
        {filterOptions.map((option, index) => (
          <TouchableOpacity key={index} style={styles.filterRow}>
            <Text style={styles.filterText}>{option}</Text>
            <Feather name="chevron-down" size={20} color="#333" />
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Bottom Buttons */}
      <View style={styles.bottomBar}>
        <TouchableOpacity
          style={[
            styles.button,
            activeButton === 'clear' && styles.buttonActive,
          ]}
          onPress={() => setActiveButton('clear')}
        >
          <Text
            style={[
              styles.buttonText,
              activeButton === 'clear' && styles.buttonTextActive,
            ]}
          >
            Clear All
            <Feather name="chevron-right" size={16} />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            styles.resultButton,
            activeButton === 'result' && styles.buttonActive,
          ]}
          onPress={() => setActiveButton('result')}
        >
          <Text
            style={[
              styles.buttonText,
              activeButton === 'result' && styles.buttonTextActive,
            ]}
          >
            Show Results&nbsp;
            <Feather name="chevron-right" size={16} />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
    bottom: 40,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#9A7200',
    marginLeft: 20,
  },
  scrollBox: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  scrollContent: {
    paddingBottom: 100,
  },
  filterRow: {
    backgroundColor: 'white',
    borderRadius: 5,
    paddingVertical: 16,
    paddingHorizontal: 12,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  filterText: {
    fontSize: 16,
    color: '#333',
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 24,
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 18,
    backgroundColor: '#e0d7c9',
    borderRadius: 5,
    flex: 1,
    marginRight: 8,
    alignItems: 'center',
  },
  resultButton: {
    marginRight: 0,
  },
  buttonActive: {
    backgroundColor: '#9A7200',
  },
  buttonText: {
    color: '#333',
    fontWeight: '600',
    fontSize: 16,
  },
  buttonTextActive: {
    color: 'white',
  },
});

