var myWidget = cloudinary.createUploadWidget({
    cloudName: 'dp0fgdpbe', 
    uploadPreset: 'hm2vsltr'}, (error, result) => { 
      if (!error && result && result.event === "success") { 
        const container = document.querySelector(".image-container");

        container.innerHTML = "";

        container.innerHTML += `<div class="my-4 row">
                                    <label for="image" class="col-sm-2 col-form-label">Image URL</label>
                                    <div class="col-sm-10">
                                        <input id="image" class="form-control form-control--border" placeholder="Upload your image first.." value="${result.info.secure_url}">
                                    </div>
                                </div>

                                <label class="col-form-label">Product Preview</label>

                                <div class="col mt-2 mb-5">
                                    <div class="card shadow-sm rounded">
                                      <div class="placeholder-glow">
                                        <img src="${result.info.secure_url}" class="card-img-top rounded-top">
                                      </div>
                                      <div class="card-body p-1">
                                          <i class="card-icon float-end far fa-heart"></i>
                                          <h3 class="m-0 placeholder-glow">
                                            <span class="placeholder col-8"></span>
                                          </h3>
                                          <p class="card-text m-0 placeholder-glow">
                                            <span class="placeholder col-4"></span>
                                          </p>
                                          <a href="#" class="stretched-link"></a>
                                      </div>
                                    </div>
                                  </div>`;
      }
    }
  )
  
  document.getElementById("upload_widget").addEventListener("click", function(){
      myWidget.open();
    }, false);