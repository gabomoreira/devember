import { StyleSheet, Text, View } from "react-native"

type Props = {
    day: number
}

export const DayListItem = ({day}: Props) => {

    return (
        <View style={styles.box} key={day}>
        <Text style={styles.text}>{day}</Text>
      </View>
    )
}

const styles = StyleSheet.create({
    box: {
      backgroundColor: '#F9EDE3',
      flex: 1,
      aspectRatio: 1,
  
      borderColor: '#9B4521',
      borderWidth: StyleSheet.hairlineWidth,
      borderRadius: 20,
  
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: '#9B4521',
      fontSize: 70
    }
  });
  