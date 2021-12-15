const messages = [ "Arctic Fashion.", "Most elegant clothing.", "Up to 40% on outlet items.", "Order your next outfit now."];

const container = document.querySelector("h1");

// ATTENTION: I am not the creator of the original code.
// Typewriter-effect originally from Daniel Groen.
// I have done some minimal changes to fit my own project.
// Original codepen: https://codepen.io/danielgroen/embed/VeRPOq?height=265&theme-id=1&slug-hash=VeRPOq&default-tab=js%2Cresult&user=danielgroen&embed-version=2&name=cp_embed_5#result-box

export default function heroBanner() {
document.addEventListener('DOMContentLoaded',function(event){
    
    function effect(text, i, fnCallback) {
      if (i < (text.length)) {
       container.innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
  
        setTimeout(function() {
          effect(text, i + 1, fnCallback)
        }, 80);
      }

      else if (typeof fnCallback == 'function') {
        setTimeout(fnCallback, 700);
      }
    }

     function animation(i) {
       if (typeof messages[i] == 'undefined'){
          setTimeout(function() {
            animation(0);
          }, 700);
       }

      if (i < messages[i].length) {
        effect(messages[i], 0, function(){
         animation(i + 1);
       });
      }
    }

    animation(0);
  });
}