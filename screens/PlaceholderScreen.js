import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const PlaceholderScreen = ({
  navigation,
  screenName = '준비중',
  description = '이 화면은 아직 개발 중입니다.',
  showHomeButton = true,
  iconName = 'construct-outline'
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconCircle}>
        <Ionicons name={iconName} size={48} color="#FFA500" />
      </View>
      <Text style={styles.title}>{screenName} 화면</Text>
      <Text style={styles.description}>{description}</Text>
      
      {showHomeButton && (
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation?.navigate('MainTabs')}
        >
          <Ionicons name="home-outline" size={20} color="#fff" />
          <Text style={styles.buttonText}>홈으로 돌아가기</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  iconCircle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#FFF3E0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
    lineHeight: 22,
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#FFA500',
    paddingVertical: 12,
    paddingHorizontal: 22,
    borderRadius: 25,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 8,
    fontSize: 16,
  },
});

export default PlaceholderScreen;
