import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'


import Home from './src/screens/Home'
import Produtos from './src/screens/Produtos'
import Categoria from './src/screens/Categoria'
import Menu from './src/components/Menu'

const menuConfig = {
    initialRouteName: "Home",
    contentComponent: Menu,
    contentOptions: {

        labelStyles: {
            fontWeight: "normal",
            fontSize: 20,
        },

        activeLabelStyle: {
            color: "red",
            fontWeight: "bold",
        },
    },
};


const menuRoutes =  {
    Home ,
    Produtos ,
    Categoria,

}

const menuNavigator = createDrawerNavigator(menuRoutes, menuConfig)
export default createAppContainer(menuNavigator)