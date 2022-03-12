import { View, Text, Button } from 'react-native'
import { useEffect } from 'react'

const HomeScreen = ({navigation, route}) => {

  useEffect(() => {
    if(route.params?.post){
      //Post updated, do something with `route.params.post`
    }
  }, [route.params?.post])

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title='Create Post'
        onPress={() => {
          navigation.navigate('CreatePost', {
            otherParam: 'anything you want here',
          });
        }}/>
      <Text style={{margin: 10 }}>Post: {route.params?.post}</Text>
    </View>
  )
}

export default HomeScreen