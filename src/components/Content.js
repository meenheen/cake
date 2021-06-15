import {Switch,Route} from 'react-router-dom'
import {Home} from './Home'
import {About} from './About'
import {Contact} from './Contact'
import {Cakes} from './Cakes'
// firebase
// import firebase from 'firebase/app'
// import 'firebase/firestore'
// import 'firebase/auth'
// import 'firebase/storage'
// import {firebaseConfig} from '../components/config/Config'

export function Content(props) {
    
    
    const postsURL = "https://public-api.wordpress.com/rest/v1.1/sites/txtpublish.wordpress.com/posts/"

    return (
        <Switch>
            <Route path="/contact">
                <Contact />
            </Route>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/cakes">
                <Cakes url={postsURL} />
            </Route>
            <Route exact path="/">
                <Home  />
            </Route>
        </Switch>
    )
}

export default Content