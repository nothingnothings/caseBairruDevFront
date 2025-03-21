# Tabibito 🚋

Travelling and Tourism social app created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Environment Variables

Ensure there is a ``.env`` file in the root of the project containing the EXPO_PUBLIC_APP_URL key. This key should be set to the same address as the backend:

```bash
# EXPO environment variables must always be prefixed with "EXPO_PUBLIC"
# EXPO_PUBLIC_APP_URL=http://tabibito-laravel-backend.test/api
# Example:
# EXPO_PUBLIC_APP_URL=http://tabibito-laravel-backend.test/api

EXPO_PUBLIC_APP_URL=http://192.168.0.114:8080/api
```
