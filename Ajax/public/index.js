function formSubmit(e) {
    //1. To prevent the default action of form submit -
    // Comment preventDefault and see
    e.preventDefault();

    //list Object -
    var list = document.getElementById('list-items');
    console.log('Function Form Submit is running');

    //2. Get the text entered by the user in input box
    let text = document.querySelector('input[name="text"]').value;
    console.log('text',text)

    var data = new FormData();
    data.append( "text", "hello" );

    //3. Send the request to server
    fetch('/data',
        {
                method: 'POST',
                headers:
                    {
                        'Content-Type': 'application/json'
                    },
                body: JSON.stringify({text:text})
            }
            ).then( (res) => {
            //4. Response Object -
            return res.json();

            }).then((dataObj)=> {

                //5. receives the response from server
                console.log('data',dataObj);

                let liElement = document.createElement('li');
                liElement.textContent = dataObj.data;
                list.append(liElement);
            })

}