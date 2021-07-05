import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'


import Dashboard from './src/screens/Dashboard'
import DefaultCards from './src/screens/DefaultCards'
import Formulario from './src/screens/Formulario'
import Menu from './src/components/Menu'

const menuConfig = {
    initialRouteName: "Dashboard",
    contentComponent: Menu,
    contentOptions: {
        activeLabelStyle: {
            color: "#186CA0",
            fontWeight: "bold",
        },
    },
};

const menuRoutes =  {
    Dashboard ,
    DefaultCards ,
    Formulario,

}

const menuNavigator = createDrawerNavigator(menuRoutes, menuConfig)
export default createAppContainer(menuNavigator)