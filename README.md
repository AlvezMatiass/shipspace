
# SHIPSPACE

#### Como es el primer proyecto de React-Native, decidi utilizar el readme.md para guardar las cosas basicas y necesarias para la creacion de una nueva aplicacion.

# Comandos:

## Crear App con Expo:

npx create-expo-app nombre-de-la-app

## Navigation:
#### [ Navegacion entre pantallas ]

npm install @react-navigation/native
npx expo install react-native-screens react-native-safe-area-context
npm install @react-navigation/native-stack

## Tab Navigation:
#### [ Navegacion desde la parte inferior de la App ]

npm install @react-navigation/bottom-tabs

## UseDimensions [Tablet]
#### [ Se importa desde React-Native]

import useWindowDimensions() from react-native

const {width} = useWindowDimensions()


## Icons:
#### [ Los iconos ya viene con expo ]

https://icons.expo.fyi/Index

## Instalar Fonts: 

npx expo install expo-font

## Api de auth [ Iniciar sesion - Registrarse ]:

https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=

https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=



## Redux - ConfigureStore:

npm install react-redux

npm install @reduxjs/toolkit


## Authentication FireBase: 

export const URL_BASE_FIREBASE_REALTIME_DATABASE = 
'link de firebase database'

export const FIREBASE_API_KEY = 
'llave para el email account'

export const FIREBASE_AUTH_BASE_URL = `https://identitytoolkit.googleapis.com/v1/accounts`

export const FIREBASE_AUTH_SING_IN_API = 
`:signInWithPassword?key=${FIREBASE_API_KEY}`

export const FIREBASE_AUTH_SING_UP_API =
`:signUp?key=${FIREBASE_API_KEY}`



## Expo Images:
#### [ Necesitas colocar cosas en el app.json ]

npx expo install expo-image-picker


## Expo Location: 
#### [ Necesitas colocar cosas en el app.json ]

npx expo install expo-location

npx expo install react-native-maps




## SQLite:
#### [ Crear carpeta db en source ]

npx expo install expo-sqlite


### Build React-Native:  [ Only Android ]
#### [ Necesitas colocar cosas en el app.json ]

npm install -g eas-cli

eas login

eas build:configure

#### eas.json:

    "development": {

      "android": {

        "buildType": "apk"

        }
    }

eas build -p android --profile development

eas build --platform android


