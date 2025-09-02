import { Image } from 'expo-image';
import ParallaxScrollView from '@/components/ParallaxScrollView';

import { Text } from 'react-native';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
        />
      }>
      <Text style={{color:"white"}}>tab 1</Text>
    </ParallaxScrollView>
  );
}
