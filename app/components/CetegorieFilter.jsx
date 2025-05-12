import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
 
 export default function CetegorieFilter() {
   return (
     <View style={styles.container}>
           {/* Header */}
           <View style={styles.header}>
             <View style={styles.headerTopRow}>
               <TouchableOpacity onPress={() => router.back()}>
                 <Ionicons name="arrow-back" size={24} color="#9A7200" />
               </TouchableOpacity>
               <Text style={styles.heading}>filter</Text>
             </View>
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
    right: 270,
  },
 })