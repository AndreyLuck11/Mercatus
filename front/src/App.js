import React, {} from 'react';
import './styles/bootstrap-reboot.css'
import './styles/App.css';
import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import About from './pages/About';
import Posts from './pages/Posts';
import Navbar from './components/UI/Navbar/Navbar';
import AppRouter from './components/AppRouter';
import {Provider} from "react-redux";
import {store} from "./Store";

function App() {
	return(
		<Provider store={store}>
		<BrowserRouter>
			<Navbar/>
			<AppRouter/>	
		</BrowserRouter>
		</Provider>
	)
}
export default App;
