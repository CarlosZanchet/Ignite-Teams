import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Container } from './styles';

export function Groups() {
  return (
    <Container>
      <Text>Groups!</Text>
      <StatusBar style="auto" />
    </Container>
  );
}