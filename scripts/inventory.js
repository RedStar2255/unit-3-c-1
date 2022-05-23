var show = JSON.parse(localStorage.getItem("products")) //Taking the localstorage from the system

var append_div = document.querySelector("#all_products") //Taking the div that needed to be get appended the products

displayData(show) //calling the function for appending the datas in to the DOM

function displayData(show) {
    append_div.innerHTML = null
    show.forEach(function(elem, index) {
        main_div = document.createElement("div") //creating an div for appending all items inside that div

        image_div = document.createElement("div") //this div will contain the image
        image = document.createElement("img")
        image.src = elem.image
        image_div.append(image)

        typeh2 = document.createElement("h2") //this h2 tag will carry the type of the product
        typeh2.innerText = elem.type

        desc = document.createElement("p") //this p tag will carry the description of the item
        desc.innerText = elem.desc

        price = document.createElement("h4") //this h4 tag will carry the price of the item
        price.innerText = elem.price

        removebtn = document.createElement("button") //this is the remove button while user clicks the button it will invoke an function
        removebtn.setAttribute("id", "remove_product")
        removebtn.innerText = "REMOVE"
        removebtn.addEventListener("click", function() {
            remove(elem, index)
        })


        main_div.append(image_div, typeh2, desc, price, removebtn) //appending all the items into to one div
        append_div.append(main_div) //appending the main div in to DOM
    })

}

function remove(elem, index) {
    show.splice(index, 1)
    localStorage.setItem("products", JSON.stringify(show))
    displayData(show)
        //this function will call the index and remove the item from the localstorage and re invoke the display function
}