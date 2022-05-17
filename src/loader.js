import cornerstoneWADOImageLoader from 'cornerstone-wado-image-loader';

class Loader {
    addFile(file) {
        cornerstoneWADOImageLoader.wadouri.fileManager.add(file);

        return true;
    }
}

