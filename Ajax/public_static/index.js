// let dataItems = [];
function formSubmit(e) {
    //1. To prevent the default action of form submit -
    // Comment preventDefault and see
    e.preventDefault();

    console.log('Function Form Submit is running')

    //2. Get the text entered by the user in input box
    let text = document.querySelector('input[name="text"]');
    console.log('text',text)

    //3. Send the request to server
    fetch('/data',{
        method: 'POST',
        body: JSON.stringify({text: text})
    }).then((data)=>{
        console.log('Data',data)
    })


}