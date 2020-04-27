import React from 'react';
import { GestureResponderEvent, StyleSheet, TouchableOpacity, View, ViewStyle, TextStyle } from 'react-native';
import useTheme from "../../hooks/useTheme";
import { AppTheme } from "../../config/DefaultConfig";
import ThemedText from '../UI/ThemedText';

interface Props {
    label: string;
    onPress?: (event: GestureResponderEvent) => void,
    buttonStyle?: any,
    labelStyle?: string,
    buttonColor?: string,
};

const RoundButton: React.FunctionComponent<Props> = ({
    onPress,
    label,
    buttonStyle,
    labelStyle,
    buttonColor,
}: Props) => {
    const theme: AppTheme = useTheme();

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[style.container, buttonStyle, { backgroundColor: buttonColor }]}>
                <ThemedText styleKey="textColor" style={[style.userNameStyle, {color: labelStyle}]}>{label}</ThemedText>
            </View>
        </TouchableOpacity>
    );
};

export default RoundButton;

interface Style {
    container: ViewStyle;
    userNameStyle: TextStyle;
}

const style: Style = StyleSheet.create<Style>({
    container: {
        flexDirection: 'row',
        padding: 10,
        justifyContent: "center",
        borderRadius: 20,
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.2,
        elevation: 6,
        minWidth: 30,
        height: 45,
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 10,
        marginBottom: 10,
        textAlign: 'center',
    },
    userNameStyle: {
        fontWeight: "bold",
        paddingTop: 2,
        paddingBottom: 2,
        fontSize: 16,
    }
})