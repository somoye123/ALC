class UIdisplay{
    constructor(){
        this.gif_height = 150,
        this.gif_width = 334
    }
    // create gif element
     gifElement(gif_url,gif_alt,maincontainer){

         //create div tag
        let divs= document.createElement("div")
        divs.className = "card"

        // create img tag and set image properties
        let img = document.createElement("img")
        img.className ="card-img-top"
        img.src = gif_url;
        img.alt = gif_alt;
        img.height = this.gif_height;
        img.width = this.gif_width;

        //append img to Div
        divs.appendChild(img)
        maincontainer.appendChild(divs)
        
    }
        // show error message
        showErrormessage(content){
        let text= document.createElement("div");
        text.className = "card-footer bg-dark ";
        text.style.color = "red";
        text.textContent = content;
        document.querySelector("#lead").appendChild(text);
    }
}