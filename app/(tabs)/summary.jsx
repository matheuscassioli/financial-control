import { Text } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';

export default function TabTwoScreen() {
    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
        >
            <Text style={{ color: "white" }}>tab 3</Text>
        </ParallaxScrollView>
    );
} 
