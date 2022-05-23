//store the products array in localstorage as "products"
var arr = JSON.parse(localStorage.getItem("products")) || [] //creating or retriving an localstorage from the storage

function formSubmit(event) { //the function will get invoked when the user submits any document

    event.preventDefault()

    let type = document.querySelector("#type").value //taking the values from the form
    let desc = document.querySelector("#desc").value
    let price = document.querySelector("#price").value
    let image = document.querySelector("#image").value

    let details = new CreateObject(type, desc, price, image) //calling an function and collecting its value
    arr.push(details)
    localStorage.setItem("products", JSON.stringify(arr)) // storing the data in to the local storage

    document.querySelector("#type").value = null //Making all the value's empty 
    document.querySelector("#desc").value = null
    document.querySelector("#price").value = null
    document.querySelector("#image").value = null
}

function CreateObject(t, d, p, i) { //this function will create an object from the given details
    this.type = t,
        this.desc = d,
        this.price = p,
        this.image = i

}