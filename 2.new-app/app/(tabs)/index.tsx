import { View,TextInput } from "react-native"
import { withTheme } from "react-native-paper"
import { theme } from "../_layout"
import MyAppBar from "@/components/MyAppBar"
import { Appbar } from "react-native-paper"
import { Image } from "react-native"
import { Banner } from "react-native-paper"
import { useState } from "react"
import { Avatar, Button, Card,Text } from 'react-native-paper';
const LeftContent = (props:any) => <Avatar.Icon {...props} icon="folder" />
export default function Home(){
  const [visible,setVisible] = useState(true);

  return (
    <View  style={{backgroundColor : theme.colors.primary}}>
      <Appbar.Header> 
    <Appbar.BackAction onPress={() => {}} />
    <Appbar.Content title="Om Sharma" />
    <Appbar.Action icon="calendar" onPress={() => {}} />
    <Appbar.Action icon="magnify" onPress={() => {}} />

    </Appbar.Header>

    <Banner visible={visible} actions={[
      {label:'Fix it',onPress:()=>setVisible(false)},
      {
          label: 'Learn more',
          onPress: () => setVisible(false),
        },
    ]}
    icon={({size})=>(
      <Image source={{uri:'https://res.cloudinary.com/dyiovhrlr/image/upload/v1749901229/dhxxic9rsykzmcvrxlf3.png'}}
      style={{
        width:size,
        height:size
      }}/>
    )}
    >
      There was a problem processing a transaction on your credit card.

    </Banner>
    <Card>
      <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent}/>
      <Card.Content>
        <Text variant="titleLarge">Om Sharma</Text>
      <Text variant="bodyMedium">Software Developer</Text>
        </Card.Content>
        <Card.Cover source={{uri:'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/13600/0000003943.1920x1080.jpg?t=1720535333'}}/>
        <Card.Actions>
          <Button onPress={()=>}>Cancel</Button>
      <Button>Ok</Button>
        </Card.Actions>

    </Card>

    </View>
  )
}