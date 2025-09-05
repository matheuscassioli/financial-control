
import { StyleSheet, View } from 'react-native';

const DefaultTabView = ({ children }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>{children}</View>
    </View>
  );
}

export default DefaultTabView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  content: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
    gap: 16,
    overflow: 'hidden',
    color: 'white',
  },
});
