import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
// import App from "./pages/App"

export default class Index extends Component {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
      </View>
      // <App />
    )
  }
}
