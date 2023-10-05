# React-Native-Expo-Application-Services-Starter-Template

This repository serves as a starting template for your first React Native Application created and built using React Native. I will guide you through the whole process of installing everything you need for this project in windows.

### Installations
On your OS make sure you have installed any compatible version of Java Development Kit as it is essential for React Native Apps. Android Operating System is written in Java, our React Native code will compile down to 
that so we need Java installed. At the moment JDK 21 is the latest release but prefer JDK 17 as it is the last version compatible with Gradle which you need to run your Native apps if you migrate away from Expo, though for this tutorial you dont need to worry about that.
You also need to globally install react native and expo on your system, for npm use the following commands in your command prompt or powershell :

`npm install --global expo-cli`

`npm install --global react-native`

### Create and run project
Create your React Native Project using the following command, you can change the project name :
`npx create-expo-app myApp`

Once done creating the project, run it using the following command, `npx expo start`

In your terminal, you will be given a QR code, install the expo app in your android device and scan the QR code from within the app, it will build and run within a few seconds, now edit the `App.js` file in your code editor,
press control + s to save the changes and you will see them instantly on the app in your phone, this due to React Native's Fast Refresh.

### Build and create an APK
Change the app however you want and once ready to build and create an APK, gather your Expo username/email and password. You will need Expo Application Services Command Line Interface to build the app, install eas cli
using the command `npm install -g eas-cli`. Now login into your expo account using `eas login`, you will be asked to enter your username/email and password. Once in, build the project using `eas build:configure`

Above command generates an 'eas.json' file in your project's root directory. Copy all the code from eas.json file in this repository and paste it into your file. Save and close the file. Run the following command in
your terminal `eas build -p android --profile preview`. Wait for it to complete, at the end it will give you a link, go to that link, you will see a 'download build' button there, click that to download the APK.
Install that in your Android device, don't forget to allow installations from unknown source in your settings. Boom!!! Your first React Native App can be shipped anywhere now

