import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function Otp() {
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputs = useRef([]);
  const router = useRouter();

  const handleOtpChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < 3) {
      inputs.current[index + 1].focus(); // move to next input
    }
    if (!text && index > 0) {
      inputs.current[index - 1].focus(); // move to previous if deleted
    }
  };

  const handleVerify = () => {
    const finalOtp = otp.join('');
    console.log("Verifying OTP: ", finalOtp);
    router.push({ pathname: '/components/Home' });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Sri Chandra Jewel Crafts</Text>
      <Text style={styles.subheading}>OTP</Text>
      <Text style={styles.description}>Please enter the 4-digit number</Text>
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={(ref) => (inputs.current[index] = ref)}
            style={styles.otpInput}
            value={digit}
            onChangeText={(text) => handleOtpChange(text, index)}
            maxLength={1}
            keyboardType="numeric"
          />
        ))}
      </View>
      <TouchableOpacity style={styles.verifyButton} onPress={handleVerify}>
        <Text style={styles.buttonText}>Verify</Text>
      </TouchableOpacity>
      <Text style={styles.resendText}>
        Haven't received OTP? <Text style={styles.boldText}>Resend</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    padding: 20,
    gap: 10,
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#9A7200',
    marginBottom: 10,
  },
  subheading: {
    fontSize: 20,
    color: '#9A7200',
    marginBottom: 5,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 12,
    color: '#9A7200',
    marginBottom: 20,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20,
  },
  otpInput: {
    width: 50,
    height: 50,
    borderColor: '#9A7200',
    borderWidth: 1,
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 18,
    color: '#9A7200',
  },
  verifyButton: {
    backgroundColor: '#9A7200',
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 10,
    marginBottom: 20,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  resendText: {
    fontSize: 14,
    color: '#9A7200',
  },
  boldText: {
    fontWeight: 'bold',
  },
});

