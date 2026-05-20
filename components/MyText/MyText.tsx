import { Alert, Text } from "react-native";
import style from "./style";


type MyTextProps = {
    title?: string;
    fontSize?: number;
    styles?: object;
    onPress?: () => void;
   
};

const MyText = ({
    title = 'hello world',
    fontSize = 20, 
    styles,
    onPress  = () => {}}: 
    
    MyTextProps) => {
    return (
        <Text
        onPress = {onPress}
           style={[
            style.text,
            style.fontStyles,
            { fontSize: fontSize },
            styles ? styles :null]}
        >
        {title}
        </Text>
    );
};

export default MyText


