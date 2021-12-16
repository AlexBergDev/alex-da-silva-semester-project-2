var myCropWidget = cloudinary.createUploadWidget({
    cloudName: 'dp0fgdpbe', uploadPreset: 'hm2vsltr', folder: 'widgetUpload', cropping: true}, 
    (error, result) => { console.log(error, result) })