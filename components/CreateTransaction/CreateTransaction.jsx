import React, { useState } from 'react'
import { Button, View } from 'react-native';
import CustomTextInput from '../../components/fields/CustomTextInput';
import CustomDateInput from '../../components/fields/CustomDateInput';
import CustomMoneyInput from '../../components/fields/CustomMoneyInput';
import CustomSelectInput from '../../components/fields/CustomSelectInput';

const CreateTransaction = () => {

    const categories = ['Alimentação', 'Transporte', 'Saúde', 'Lazer'];

    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [value, setValue] = useState('');
    const [category, setCategory] = useState('');

    const createTransactionItem = (e) => {
        console.log(e)

        const obj = {
            name,
            value,
            date,
            category
        }

        console.log(obj, 'envia objeto para api fake')
    }

    return (
        <View style={{ padding: 20, backgroundColor: 'aliceblue' }}>
            <CustomTextInput
                label="Descrição"
                placeholder="Descrição do item"
                value={name}
                onChangeText={setName}
            />
            <CustomMoneyInput
                label="Valor"
                value={value}
                onChangeText={setValue}
            />
            <CustomDateInput
                label="Data"
                value={date}
                onChange={setDate}
            />
            <CustomSelectInput
                label="Categoria"
                value={category}
                onChange={setCategory}
                options={categories}
                placeholder="Selecione uma categoria"
            />
            <Button
                title="Criar transação"
                onPress={(e) => createTransactionItem(e)}
            />
        </View>
    )
}

export default CreateTransaction