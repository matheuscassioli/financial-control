import React, { useState } from 'react'
import { View } from 'react-native';
import CustomTextInput from '../../components/fields/CustomTextInput';
const CreateTransaction = () => {

    const [name, setName] = useState('');

    return (
        <View style={{ padding: 20, backgroundColor: 'aliceblue' }}>
            <CustomTextInput
                label="Descrição"
                placeholder="Descrição do item"
                value={name}
                onChangeText={setName}
            />
            <CustomTextInput
                label="Descrição"
                placeholder="Descrição do item"
                value={name}
                onChangeText={setName}
            />
            <CustomTextInput
                label="Descrição"
                placeholder="Descrição do item"
                value={name}
                onChangeText={setName}
            />
            <CustomTextInput
                label="Descrição"
                placeholder="Descrição do item"
                value={name}
                onChangeText={setName}
            />
        </View>
    )
}

export default CreateTransaction