# wado-loader-unit-test

Run jest to produce the error: 

```
npm test

 FAIL  src/loader.test.js
  ● Test suite failed to run

    Automatic publicPath is not supported in this browser

    > 1 | import cornerstoneWADOImageLoader from 'cornerstone-wado-image-loader';
        | ^
      2 |
      3 | class Loader {
      4 |     addFile(file) {

      at node_modules/cornerstone-wado-image-loader/dist/webpack:/cornerstoneWADOImageLoader/webpack/runtime/publicPath:14:33
      at node_modules/cornerstone-wado-image-loader/dist/cornerstoneWADOImageLoader.bundle.min.js:1:54508
      at node_modules/cornerstone-wado-image-loader/dist/cornerstoneWADOImageLoader.bundle.min.js:1:901097
      at node_modules/cornerstone-wado-image-loader/dist/webpack:/cornerstoneWADOImageLoader/webpack/universalModuleDefinition:4:28
      at Object.<anonymous> (node_modules/cornerstone-wado-image-loader/dist/webpack:/cornerstoneWADOImageLoader/webpack/universalModuleDefinition:11:1)
      at Object.<anonymous> (src/loader.js:1:1)
```


