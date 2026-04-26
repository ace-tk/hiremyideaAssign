import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';

const InsightsScreen = () => {
  const categories = [
    'Stability Summary',
    'Cycle Trends',
    'Body & Metabolic Trends',
    'Body Signals',
    'Lifestyle Impact',
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.headerTitle}>Insights</Text>
        
        {categories.map((category, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.cardTitle}>{category}</Text>
            {/* Future charts and data will go here */}
            <View style={styles.placeholder} />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  container: {
    padding: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: '#333',
  },
  placeholder: {
    height: 100,
    backgroundColor: '#fafafa',
    borderRadius: 8,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: '#ddd',
  },
});

export default InsightsScreen;
