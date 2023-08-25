import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Navigation from './Components/Navigation/Navigation';
import Dialogs from './Components/Dialogs/Dialogs';
import Profile from './Components/Profile/Profile';
import Music from './Components/Musiс/Music';
import Setting from './Components/Setting/Setting';
import News from './Components/News/News';
import {ActionsType, StateType, StoreType} from './redux/state';

export type AppPropsType = {
    store: any
    state: StateType
    dispatch: (action: ActionsType) => void
}

function App({store, state, dispatch}: AppPropsType) {
    return (
        <BrowserRouter>
            <div className = "App">
                <Header/>
                <Navigation/>
                <div className = {'app-wrapper-content'}>
                    <Routes>
                        <Route path = "/dialogs/*"
                               element = {<Dialogs id = {1} store = {store}/>}/>
                        <Route path = "/profile"
                               element = {<Profile id = {1}
                                                   data = {state.profilePage}
                                                   dispatch = {dispatch}/>}/>
                        <Route path = "/music" element = {<Music id = {1}/>}/>
                        <Route path = "/setting" element = {<Setting id = {1}/>}/>
                        <Route path = "/news" element = {<News id = {1}/>}/>
                    </Routes>

                </div>
            </div>
        </BrowserRouter>)
}

export default App;
