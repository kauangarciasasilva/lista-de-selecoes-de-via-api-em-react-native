import { FlatList, StyleSheet, Text, View } from 'react-native';
import Entity from '../entity/entity';

import { useEffect, useState } from 'react';
import ImageComponets from './components/image-componets';

export default function HomePage() {

    const [team, setTeam] = useState<Entity[]>([]);

    useEffect(() => {
        var requestOptions = {
            method: 'GET',

        };

        var ListBandeiras: Entity[] = [];

        fetch("https://restcountries.com/v3.1/all", requestOptions)
            .then(response => response.json())
            .then(result => {
                result.map((item) => {
                    ListBandeiras.push({
                        id: item.name.common,
                        name: item.name.common,
                        capital: item.capital,
                        continent: item.region,
                        bandeira: item.flags.svg,
                        ptName: item.translations.por.common,
                        populaçao: item.population

                    })

                })

            })

            .catch(error => console.log('error', error));

        setTeam(ListBandeiras);

    }, [])

    return (

        <View style={styles.container}>

            <Text style={styles.title}>List flags</Text>

            <FlatList

                renderItem={(team) =>

                    <View style={styles.card}>

                       <ImageComponets FlagsUrl={team.item.bandeira}/>

                        <View style={styles.positionText}>

                            <Text style={styles.testoCard}>{team.item.name}</Text>
                            <Text style={styles.testoCard}>{team.item.ptName}</Text>
                            <Text style={styles.testoCard}>{team.item.capital}</Text>
                            <Text style={styles.testoCard}>{team.item.continent}</Text>
                            <Text style={styles.testoCard}>{team.item.populaçao}</Text>
                        </View>

                    </View>}

                data={team}
                keyExtractor={(item) => item.id}
            >
            </FlatList>

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#544855',
        paddingTop: 0,
        

    },
    card: {
        width:'90%',
        aspectRatio: 2.5,
        marginTop: 20,
        backgroundColor: '#CFD0D6',
        justifyContent: 'flex-start',
        flexDirection:'row',
        margin:20,
        shadowColor:'#000',
        elevation:15,
        borderRadius:10,
        marginHorizontal:20

        




    },
  
    title:{
       fontSize:30,
       fontWeight:'600',
       margin:20,
       paddingBottom:60
       
    },
    testoCard:{
        fontSize:15,
        fontWeight:'600'
    },
    positionText:{
        marginTop:25
    }
    


});