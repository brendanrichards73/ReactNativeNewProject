ReactNativeNewProject

This is a first test Android project to learn all about React-Native, React Navigation and the use of Firebase, push notifications and continuous deployment through Circleci.  The test project is a work in progress, built on OSX platform. 

Before you begin, make sure that you have Android Studio installed so that you can view the project on a physical device or onscreen emulator.  To Download and install Android Studio go to https://developer.android.com/studio/index.html


Getting Started
I recommend installing Node, Watchman, and JDK using Homebrew. Run the following commands in a Terminal after installing Homebrew:

        brew install node
        brew install watchman
        brew tap AdoptOpenJDK/openjdk
        brew cask install adoptopenjdk8


Install React Native CLI
To install React Native run the following command;

        npm install -g react-native-cli
        
Once installed make sure to use React Native 0.59.1 as I found some issues with using 0.60 the first time around.
Clone the project into your command pallette in VScode.


Install Navigation
I found issues using React-Native-Navigation so opted for using React-Navigation.



Install React-Native Firebase 
To install React-native Firebase run the following command in the terminal;
        
        npm install --save react-native-firebase
        

Link RNFirebase
Firebase need to be linked to React-Native so run the following code in the terminal;
        
        react-native link react-native-firebase
        
Then follow the documentation for React-Native-Firebase Android installation. 


Firebase Cloud Messaging - Push Notifications

I attempted to install and use firebase cloud messaging as a way of incorporating push notifications but there is currently a bug that prevents the message form being sent from the firebase console to an android device.  The error is that once a message is sent, the app on the emulator or physical device crashed and stops working.  This is something I am looking into.



Deployemnt
The test project was deployed using Circleci so tha I could get my first experience of using this platform



Built With
 - React native 
 - Firebase
 - Circleci
 
 
 Author
 Brendan Richards


As this is a test project I am currently adding and changing features so that I can learn more about React-Native.













