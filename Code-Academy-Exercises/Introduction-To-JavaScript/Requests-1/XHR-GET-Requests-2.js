const xhr = new XMLHttpRequest();
const url = "https://api-to-call.com/endpoint";

xhr.responseType = "json";
xhr.onreadystatechange = () =>{
  if (xhr.readyState === XMLHttpRequest.DONE) {
    return xhr.response;
  }
};

xhr.open("GET", url);
xhr.send();

/*Here we have built the basic structure of an AJAX get request like seen in the previous exercise.*/
