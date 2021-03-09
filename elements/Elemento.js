import React from 'react'
import { View, Button, Text } from 'react-native'
import PropTypes from 'prop-types'
const elemento =({nome = "a"}) => {
    return(
        <View>
            <Text>
                {nome} 
            </Text>
                            
        </View>
    )
}
export default elemento;