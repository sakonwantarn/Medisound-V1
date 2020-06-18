# Medisound Project

## Getting started
1. get modules     
```yarn install```  
2. get ios modules with cocoapods. Make sure you already install cocoapods and xcode as well.     
```npx pod-install```     
3. compile it to your phone with xcode or android studio      
   
## Generate released APK for Android   
1. Generate keystore on ./android/app
```keytool -genkey -v -keystore mykeystore.keystore -alias mykeyalias -keyalg RSA -keysize 2048 -validity 10000```   
2. Setup your gradle variables in ./android/gradle.properties
```
MYAPP_RELEASE_STORE_FILE=mykeystore.keystore      
MYAPP_RELEASE_KEY_ALIAS=mykeyalias        
MYAPP_RELEASE_STORE_PASSWORD=*****            
MYAPP_RELEASE_KEY_PASSWORD=*****        
```
3. Add signing config to ./android/app/build.gradle   
```
cd android && ./gradlew assembleRelease   
```
4. Get the APK at:    
```./android/app/build/outputs/apk/app-release.apk```   
5. (if) error: `Expiring Daemon because JVM heap space is exhausted`
```
// gradle.properties
org.gradle.daemon=true
org.gradle.jvmargs=-Xmx2560m
```   
   
## Stuctures
```   
medisound    
├── android             - android dependency folder   
├── ios                 - ios dependency folder   
├── src               
│    ├── components     - app components: modal, button, etc.   
│    ├── res            - any additional resources data: styles, colors, etc       
│    ├── screens        - screen logic   
│    └── services       - any services for app: request, API, etc.  
├── app.json            - app configuration   
├── App.tsx             - initial app route      
└── index.ts            - entry point for iOS and Android    
```   
