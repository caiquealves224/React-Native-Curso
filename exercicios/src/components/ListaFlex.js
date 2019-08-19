import react from 'react';
import { ScrollView , View, FlatList, Text } from 'react-native'

const alunos = [
    { id : 1, nome : "João" , nota: 7.9 },
    { id : 2, nome : "Ana" , nota: 7.9 },
    { id : 3, nome : "Bia" , nota: 6.9 },
    { id : 4, nome : "Claudia" , nota: 5.8 },
    { id : 5, nome : "Roberto" , nota: 7.1 },
    { id : 6, nome : "Rafael" , nota: 7.0 },
    { id : 7, nome : "Guilherme" , nota: 6.9 },
    { id : 8, nome : "Rebeca" , nota: 8.3 },
    { id : 9, nome : "Tobias" , nota: 6.4 },
    { id : 10, nome : "caique" , nota: 10 },
    { id : 11, nome : "João vitor" , nota: 6 },
    { id : 11, nome : "João" , nota: 7.9 },
    { id : 12, nome : "Ana" , nota: 7.9 },
    { id : 13, nome : "Bia" , nota: 6.9 },
    { id : 14, nome : "Claudia" , nota: 5.8 },
    { id : 15, nome : "Roberto" , nota: 7.1 },
    { id : 16, nome : "Rafael" , nota: 7.0 },
    { id : 17, nome : "Guilherme" , nota: 6.9 },
    { id : 18, nome : "Rebeca" , nota: 8.3 },
    { id : 19, nome : "Tobias" , nota: 6.4 },
    { id : 20, nome : "caique" , nota: 10 },
    { id : 21, nome : "João vitor" , nota: 6 }
];

const ItemEstilo = {
    paddingHorizontal: 15,
    height: 50,
    backgroundColor: '#DDD',
    borderWidth: 0.5,
    borderColor: '#222',
}

export const Aluno = props => 
    <View style={ItemEstilo}>
        <Text>Nome: {props.nome}</Text>
        <Text style={{fontWeight : 'bold'}}>nota: {props.nota}</Text>
    </View>