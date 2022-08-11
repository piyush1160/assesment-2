let blogs=[];


function updateBlogs(newBlogs){

    let blogs=newBlogs;
            let output = ''

            newBlogs?.forEach((blog)=>{
const {  
    userId
   ,id,
   title,
   body}=blog||{};
                output += `
                <div style="width: 22%; margin: 0.5em;">
                   <p>
                
          ${       /*    <a href="https://www.youtube.com/watch?v=${blog.id}" target="_blank" >
                        <img style="width: 100%;" src=${response.items[i].snippet.thumbnails.high.url} />
                    </a>
                    <h5>${response.items[i].snippet.title}</h5>
                    <p style="color: gray;">${response.items[i].snippet.description}</p> */
             JSON.stringify({id,userId,title,body})
            
             
                }
                </p>
                </div>
            `

            })

            document.querySelector('#videos').innerHTML = output;


}

document.querySelector('#button').addEventListener('click', () => { 

    // API call
    const xhr = new XMLHttpRequest()   

   let url =  `https://jsonplaceholder.typicode.com/posts?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09` 
    xhr.open('GET', url)

    xhr.onreadystatechange = () => {
        if(xhr.status === 200 && xhr.readyState === 4) {
            debugger;
            const response = JSON.parse(xhr.responseText)
           updateBlogs(response)
        }
    }

    xhr.send()
})





