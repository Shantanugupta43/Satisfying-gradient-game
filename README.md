# Satisfying-gradient-game using React Native expo

A Basic React Native expo application which shifts gradience when users perform an interaction (i.e Tapping on the "Change" button). I have also added a sound upon interaction which users could use while making gradient shifts to make the game more satisfying and enjoyable.

<h2> Steps to Create the application </h2>

Node is popular for hosting and running web servers for React apps. Therefore node should be installed on the system via Node JS website.

Expo consists bunch of tools which allows to set up a development enviornment quicker. Expo application was used on this project to test live development changes on mobile. <b>Expo Go</b> is available on <b> Google Play Stores</b> and <b> App Stores</b>. 

<h3> Setting up Dependencies </h3>

The project has been made utilizing the code editor Visual Studio Code. Expo Cli needs to be installed for the command line to accept expo commands. This was done through following terminal commands -

``` npm install -global expo-cli ```

This installs expo command line interface.

To start a project with blank template, enter the command -

``` expo init todoList ```

and select 'Blank' from the list.

A directory named 'todoList' is created which consists of all React native expo properties in order to get the app started.

Enter the directory via ``` cd todoList ```

To check whether the app is running on Expo Go app and dependecies are installed correctly, enter the command ``` expo start ```

This would provide a QR code in the terminal/browser window, which could be scanned via the Expo Go app. 

<h3> Accessing Font </h3>

A package named 'expo fonts' is required to be installed for importing React Native expo font elements. Open the terminal and install expo fonts by ``` npx expo install expo-font ```

Import expo fonts using ```import { useFonts } from 'expo-font'; ``` using the hook { useFonts } in the code editor. We also import a React component that keeps the native splash screen visible by installing expo-app-loading in command line  ``` expo install expo-app-loading ```

Fonts were installed using google fonts and saved in the ./assets/fonts/ folder. The font was extracted using the require() function.

<h3> Accessing Sound </h3>

Import {useEffect, useState} hooks from react and { Audio } hook from expo-av. Expo av requires to be installed using the command line by entering the command- ``` npx expo install expo-av ``` and then import { Audio } from 'expo-av' in the code editor.

useState hook is used to track state in the function component. Therefore we update two states in this case.(i.e, sound and setSound).

Methods are logged on through each command interactions using ``` console.log ```. The interaction happens when the user clicks on 'Play Sound' button.

<h3> Linear Gradients and Button Interactions </h3>

To install linear gradient, Enter the following command in the command line - ``` npx expo install expo-linear-gradient ``` and import { LinearGradient } hook from 'expo-linear-gradient'.

To import CSS styles and other properties of React - native elements such as Buttons, import { StyleSheet, Text, View, Button } hooks from 'react-native' in the code editor.

Linear Gradient contains the following properties -

- styles -> Linking CSS stylesheet
- colors -> Colors to form the gradient
- start, end -> Coordinates and directions of colors placed in the device.

Math.random property randomises the given coordinate range each time app is refreshed.

We also update two states in this case i.e, (showValue, setShowValue).

Each time user clicks on "change" button, a setShowValue(!showValue) property is triggered which hides/unhides the text on click - "Tap faster! Good Luck!"

Each time user clicks on "Play Sound" buttonm playsound() function is triggered, playing the Smile.mp3 audio, saved in the assets folder.

<h3> Stylesheets </h3>

A stylesheet contains all the CSS properties implimenting the app UI.

Stylesheets are created using StyleSheet.create and all the properties are created under it.

To impliment the styles,'constructorname.propertyname' format is used in React Core Components.

<h3> Preview of the application (in Android) </h3>




https://user-images.githubusercontent.com/99300527/202915963-ff086dd5-0a5e-437d-b484-4fec6d2c84fb.mp4












