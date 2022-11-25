addText = () => {
    e.preventDefault();

    console.log('11')
    form = document.getElementById('docform');
    console.log(form);
    var newdiv = document.createElement('div');
    console.log(newdiv);
    newdiv.classList.add("form-group");
    var newkey = document.createElement('input')
    console.log(newkey);
    newkey.type = "text";
    newkey.classList.add("form-control");
    console.log(newkey);
    newdiv.appendChild(newkey);
    var newvalue = document.createElement('input');
    console.log(newvalue);
    newvalue.type = "text";
    newvalue.classList.add("form-control");
    newdiv.appendChild(newvalue);
    console.log(newdiv)
    form.appendChild(newdiv);
    console.log(form);
}
let btn = document.getElementById('text-button');
btn.addEventListener("click", addText);

// document.addEventListener('load', function(e)  {
// })