import React, { useState } from 'react'
import { Button, Text, View } from 'react-native';
import CustomTextInput from '../../components/fields/CustomTextInput';
import CustomDateInput from '../../components/fields/CustomDateInput';

const CreateTransaction = () => {

    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [value, setValue] = useState('');
    const [category, setCaegory] = useState('');

    const createTransactionItem = (e) => {
        console.log(e)

        const obj = {
            name,
            value,
            date,
            category
        }
    }

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
            <CustomDateInput
                label="Data"
                value={date}
                onChange={setDate}
            />
            <CustomTextInput
                label="Descrição"
                placeholder="Descrição do item"
                value={name}
                onChangeText={setName}
            />

            <Button
                title="Criar transação"
                onPress={(e) => createTransactionItem(e)}
            />
        </View>
    )
}

export default CreateTransaction