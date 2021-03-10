# expo-camera-out-of-memory

expo bare project to reproduce an `OutOfMemoryError` (crash) when taking a picture with `expo-camera` on a old android device (e.g Galaxy J3, Android 5.1.1)

## How to reproduce

- Install dependencies: `yarn install`
- Run the app on a real android device: `yarn android`
  -  Real device should be old. I'm using Galaxy J3 (2026) on android 5.1.1
- Allow camera permissions on device
- Just wait for `Camera` to be ready. The app will take an screenshot when the camera is ready (`onCameraReady`).

## Error logs

```
Fatal Exception: java.lang.RuntimeException: An error occured while executing doInBackground()
       at android.os.AsyncTask$3.done(AsyncTask.java:304)
       at java.util.concurrent.FutureTask.finishCompletion(FutureTask.java:355)
       at java.util.concurrent.FutureTask.setException(FutureTask.java:222)
       at java.util.concurrent.FutureTask.run(FutureTask.java:242)
       at android.os.AsyncTask$SerialExecutor$1.run(AsyncTask.java:231)
       at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1112)
       at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:587)
       at java.lang.Thread.run(Thread.java:818)
```

```
Caused by java.lang.OutOfMemoryError: Failed to allocate a 31961100 byte allocation with 16777168 free bytes and 17MB until OOM
       at dalvik.system.VMRuntime.newNonMovableArray(VMRuntime.java)
       at android.graphics.Bitmap.nativeCreate(Bitmap.java)
       at android.graphics.Bitmap.createBitmap(Bitmap.java:946)
       at android.graphics.Bitmap.createBitmap(Bitmap.java:917)
       at android.graphics.Bitmap.createBitmap(Bitmap.java:848)
       at expo.modules.camera.tasks.ResolveTakenPictureAsyncTask.rotateBitmap(ResolveTakenPictureAsyncTask.java:265)
       at expo.modules.camera.tasks.ResolveTakenPictureAsyncTask.doInBackground(ResolveTakenPictureAsyncTask.java:107)
       at expo.modules.camera.tasks.ResolveTakenPictureAsyncTask.doInBackground(ResolveTakenPictureAsyncTask.java:27)
       at android.os.AsyncTask$2.call(AsyncTask.java:292)
       at java.util.concurrent.FutureTask.run(FutureTask.java:237)
       at android.os.AsyncTask$SerialExecutor$1.run(AsyncTask.java:231)
       at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1112)
       at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:587)
       at java.lang.Thread.run(Thread.java:818)
```

Note: [react-native-camera](https://github.com/react-native-camera) had a similar issue: https://github.com/react-native-camera/react-native-camera/issues/590
