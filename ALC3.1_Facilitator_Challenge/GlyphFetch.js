//  query selectors
const button =  document.querySelector("#butt")
let searchterm = document.querySelector("#searchbox");
const containers = document.querySelector(".card-columns");
//const spinner = document.querySelector("#spinner");

// instatiating classes
const show = new UIdisplay;
const giph = new giphy;

// hide spinner on dcument loaded
$("#spinner").hide();

// adding button event listener
 button.addEventListener('click',e => {
     e.preventDefault;

     // show spinner when button is clicked
     $("#spinner").show();
    
     //getting input value
     const term = searchterm.value
    
     // checking if serchterm isn't null and to check if Gif is already populated
     if( term!== "" || containers.childElementCount>1){
    
        // if gif is present, clear the container
        containers.innerHTML = " " ;

        // set spinner timeout
     setTimeout(() => {
        $("#spinner").hide();

        // get fetch api result
        giph.get(term).then(
            data => {
                let rest = data.result.data;

                 // iterate the results
                rest.forEach(element => {

                    //set gif alt and src
                    let gifURL = element.images.original.url
                    let gifAlt = element.source_tld

                    // display each gif to UI
                    show.gifElement(gifURL,gifAlt,containers)
                    
                });
            }
        ) 
     }, 2500);

     // clear input value
     searchterm.value = "";
    }
     // if input is empty,
     // hide spinner, display error message and reload the page
     else{
        $("#spinner").hide();
         show.showErrormessage("Enter Anything...")
         setTimeout(() => {
            $("#lead").hide()
            location.reload();
        },2000);
    }

 })

