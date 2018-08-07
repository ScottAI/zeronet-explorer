import React from 'react'

import {
    StyleSheet,
    ScrollView,
    Text,
    View
} from 'react-native'

import { Navigation } from 'react-native-navigation'

import { observable } from 'mobx'
import { observer } from 'mobx-react/native'
import stores from '../../stores'

import {
    Button
} from 'react-native-elements'

import Icon from 'react-native-vector-icons/FontAwesome'

import {
    Styles
} from '../../constants'

@observer
export default class Welcome extends React.Component {
    constructor(props) {
        super(props)

        this._authorize = this._authorize.bind(this)
        this._signup = this._signup.bind(this)
    }

    render() {
        return <View style={ styles.container }>
            <View style={ [Styles.centerView, { paddingBottom: 100 }] }>

                <View>
                    <Text style={ styles.heading }>
                        WELCOME TO YOUR P0̸RTAL
                    </Text>
                </View>

                <Button
                    title="SIGN IN"
                    buttonStyle={ styles.welcomeButtons }
                    onPress={ this._authorize } />

                <Button
                    title="SIGN UP"
                    buttonStyle={ styles.welcomeButtons }
                    onPress={ this._signup } />

            </View>
        </View>
    }

    componentDidMount() {
        Navigation.mergeOptions(this.props.componentId, {
            topBar: {
                title: {
                    component: {
                        id: 'zeronet.P0rtalTopBar',
                        name: 'zeronet.P0rtalTopBar'
                    }
                },
                visible: true,
                drawBehind: false
            }
        })
    }

    _authorize() {
        stores.P0rtal.authorize()
    }

    _signup() {
        alert('show signup screen')
    }

}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(30, 30, 30, 0.9)'
    },
    heading: {
        color: 'rgba(255, 255, 255, 0.9)',
        fontSize: 20,
        textAlign: 'center'
    },
    welcomeButtons: {
        width: 250,
        height: 50,
        marginTop: 15
    }
})
