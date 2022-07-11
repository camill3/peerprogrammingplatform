import React, { useState, useContext, useEffect } from 'react';
import { fetchToken, onMessageListener } from '../../firebase';
import { Button, Toast } from 'react-bootstrap';
import AuthContext from '../../context/AuthContext';
import axios from 'axios'

const PushNotifications =  () => {
    const { onShowNotificationClicked, show, setShow, notification, isTokenFound, setTokenFound, user } = useContext(AuthContext)
    const [token, setToken] = useState('')
    const [toastVisible, setToastVisible] = useState(false)

    const fetchingFireBaseToken = async() => {
        let result = fetchToken(setTokenFound);
        return result.then(res => {
            setToken(res)
        })
        }
    console.log('result is', fetchingFireBaseToken())


//    useEffect(() => {
//        const fetchingFireBaseToken = async() => {
//            let result = await fetchToken(setTokenFound);
//            console.log('result is', result)
//            let newDict = {}
//            const username = user.username
//            newDict[username] = result
//            axios.post('http://127.0.0.1:8000/cache/', newDict)
//                .then(res => console.log(res.data))
//        }
//        fetchingFireBaseToken()
//        console.log(fetchingFireBaseToken())
//        const username = user.username
//        console.log('username is', username, fetchingFireBaseToken())
//        let newDict = {}
//        newDict[username] = 'test'
//        console.log(newDict)
//        axios.post('127.0.0.1:8000/cache/',)
//        console.log('what is user', user.username)
//    },[]);


        return (
            <>
                <Toast
                    onClose={() => setShow(false) }
                    show={ show }
                    delay={ 1000 * 30 }
                    autohide
                    onClick={()=> console.log('you clicked this')}
                    animation style={{
                        position: 'absolute',
                        top: 20,
                        right: 20,
                        minWidth: 200
                    }}>
                        <Toast.Header>
                            <strong className="mr-auto">{ notification.title }</strong>
                            <small>just now</small>
                        </Toast.Header>
                        <Toast.Body>{ notification.body }</Toast.Body>
                </Toast>
                <header className="App-header">
                    { isTokenFound && console.log('Notification permission enabled') }
                    { !isTokenFound && <center><p> Need notification permission </p></center> }
                    <Button onClick={() => onShowNotificationClicked() }> Show Toast </Button>
                </header>
            </>
        );
}

export default PushNotifications;