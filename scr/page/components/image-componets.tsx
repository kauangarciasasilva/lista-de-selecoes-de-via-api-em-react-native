import { Component } from "react";
import { View , StyleSheet} from "react-native";
import { Image } from "expo-image"
interface Props{
    FlagsUrl:string
}
export default class ImageComponets extends Component<Props>{
  
    render() {
        return (
            <View >

            <Image style={styles.img} source={{ uri: this.props.FlagsUrl}} />
        </View>
        );
    }
}
const styles = StyleSheet.create({
    img: {
        width: 70,
        height: 70,
        marginHorizontal:20,
        marginRight:20,
        marginTop:40,
        

    },


});