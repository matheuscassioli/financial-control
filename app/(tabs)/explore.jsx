import DefaultTabView from '@/components/DefaultTabView';
import CreateTransaction from '../../components/CreateTransaction/CreateTransaction'

export default function explore() {
  return (
    <DefaultTabView>
      <CreateTransaction />
    </DefaultTabView>
  );
}


