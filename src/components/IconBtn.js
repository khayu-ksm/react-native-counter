import { StyleSheet, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const IconBtn = ({iconName, size, color, style, onPress }) => {
  return (
    <View style={[styles.iconContainer, {...style}]}>
      <Ionicons
        name={iconName}
        size={size || 20}
        color={color || 'grey'}
        onPress={onPress}
      />
    </View>
  )
}

export default IconBtn;

const styles = StyleSheet.create({
  iconContainer: {

  }
})