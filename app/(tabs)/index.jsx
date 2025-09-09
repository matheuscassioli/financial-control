import DefaultTabView from '@/components/DefaultTabView';
import { Text } from 'react-native';
import ListTransaction from '../../components/ListTransaction/ListTransaction'

export default function TransationScreen() {
  return (
    <DefaultTabView>
      <Text >
        <ListTransaction />
      </Text>
    </DefaultTabView>
  );
} 