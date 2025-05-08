import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useRouter } from 'expo-router';

export default function Login() {
    const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Sri Chandra Jewel Craft</Text>
      <Text style={styles.subheading}>Login</Text>
      <Text style={styles.description}>Login with your mobile number</Text>



      <View style={styles.inputContainer}>
        <Text style={styles.countryCode}>+91 -</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter mobile number"
          keyboardType="phone-pad"
          placeholderTextColor="#aaa"
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={() => router.push({ pathname: '/components/Otp' })}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
     
           {/* Diamond separator */}
           <View style={styles.separatorRow}>
        <View style={styles.line} />
        <MaterialCommunityIcons name="diamond" size={20} color="#9A7200" style={styles.icon} />
        <View style={styles.line} />
      </View>

      <Text style={styles.agreementText}>
          By continuing you agree to our{' '}
        <Text style={styles.linkText}>terms of use</Text> &{' '}
       <Text style={styles.linkText}>privacy policy</Text>
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    gap: 10,
  },
  heading: {
    fontSize: 29,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#9A7200',
    textAlign: 'center',
  },
  subheading: {
    fontSize: 25,
    fontWeight: '600',
    color: '#9A7200',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 12,
    marginBottom: 10,
    textAlign: 'center',
    marginRight: 160,
    top: 10,
    color: '#9A7200',
  },
  separatorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    width: '100%',
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#9A7200',
  },
  icon: {
    marginHorizontal: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#9A7200',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    width: '100%',
    marginBottom: 20,
    height: 50,
    top:10
  },
  countryCode: {
    fontSize: 16,
    color: '#333',
    marginRight: 5,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  button: {
    backgroundColor: '#9A7200',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    height: 50,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  agreementText: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    marginTop: 10,
    paddingHorizontal: 60,
  },
  linkText: {
    color: '#9A7200',
    textDecorationLine: 'underline',
  },
  
});



