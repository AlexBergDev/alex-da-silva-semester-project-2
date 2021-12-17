export default function uploadWidget() {
var myWidget = cloudinary.createUploadWidget({
    cloudName: 'dp0fgdpbe', 
    uploadPreset: 'hm2vsltr'}, (error, result) => { 
      if (!error && result && result.event === "success") { 
        const UrlContainer = document.querySelector(".url-container");
        const ImageContainer = document.querySelector(".image-container");

        UrlContainer.innerHTML = "";
        ImageContainer.innerHTML = "";

        UrlContainer.innerHTML += `<input id="product-image_url" class="form-control form-control--border border border-info border-2" placeholder="Upload your image first.." value="${result.info.secure_url}">`;

        ImageContainer.innerHTML += `<img src="${result.info.secure_url}" class="card-img-top rounded-top">`;
      }
    }
  )
  
  document.getElementById("upload_widget").addEventListener("click", function(){
      myWidget.open();
    }, false);
}