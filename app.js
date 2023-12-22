let body = document.querySelector('body');

let hr = document.querySelector('hr');

if(window.innerWidth<=700){
    body.removeChild(hr);
}