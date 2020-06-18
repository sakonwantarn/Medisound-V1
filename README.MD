# Medisound Project

## Getting started
1. get modules     
```yarn install```  
2. get ios modules with cocoapods. Make sure you already install cocoapods and xcode as well.     
```npx pod-install```     
3. compile it to your phone with xcode or android studio      
   
   
## Stuctures
```   
medisound    
├── android             - android dependency folder   
├── ios                 - ios dependency folder   
├── src               
│    ├── components     - app components   
│    ├── res            - any additional resources data     
│    ├── screens        - screen logic   
│    └── services       - any services for app: request, API, etc.  
├── app.json            - app configuration   
├── App.tsx             - initial app route    
└── index.ts            - entry point for iOS and Android    
```   
