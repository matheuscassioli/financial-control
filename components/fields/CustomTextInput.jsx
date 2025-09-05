import React from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';
import { DefaultStyledFields } from './DefaultStyledFields';


const CustomTextInput = ({
    label,
    placeholder,
    value,
    onChangeText,
    secureTextEntry = false,
    style,
    ...rest
}) => {
    return (
        <View style={styles.container} >
            {label && <Text style={DefaultStyledFields.label}> {label} </Text>}
            <TextInput
                style={[DefaultStyledFields.input, style]}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
                {...rest}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 8,
    },  
});

export default CustomTextInput;
