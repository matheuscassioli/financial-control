import { Tabs, usePathname } from 'expo-router';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { TransactionsProvider } from '../../contexts/TransactionsContext.jsx'

export default function TabLayout() {
  const pathname = usePathname();

  return (
    <TransactionsProvider>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: true,
          tabBarActiveTintColor: 'purple',
          tabBarLabelStyle: { fontSize: 14 },
        }}>
        <Tabs.Screen
          name="index"

          options={{
            headerBackground: '#fff',
            title: 'Transações',
            tabBarIcon: ({ color }) => <FontAwesome size={22} name="file-text-o" color={color} />,
          }}
        />
        <Tabs.Screen
          name="explore"

          options={{
            title: '',
            tabBarLabel: () => null,
            tabBarButton: (props) => {
              const focused = pathname === '/explore';

              return (
                <TouchableOpacity
                  {...props}
                  style={{
                    top: -20,
                    left: 42,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 60,
                    height: 60,
                    borderRadius: 35,
                    backgroundColor: focused ? 'purple' : 'gray',
                    shadowColor: '#000',
                    shadowOpacity: 0.2,
                    shadowOffset: { width: 0, height: 2 },
                    shadowRadius: 5,
                  }}
                >
                  <FontAwesome
                    size={38}
                    name="plus"
                    color={focused ? 'white' : 'black'} />
                </TouchableOpacity>
              );
            },
          }}
        />

        <Tabs.Screen
          name="summary"
          options={{
            title: 'Resumo',
            tabBarIcon: ({ color }) =>
              <FontAwesome
                size={25}
                name="th-list"
                color={color} />,
          }} />

      </Tabs>
    </TransactionsProvider>
  );
}
