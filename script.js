let blogs=[];

function updateBlogs(newBlogs){

    let blogs=newBlogs;
            let output = ''



          for (let index = 0; index < newBlogs.length/6-1; index++) {
	        const blog = newBlogs[index];
	  // newBlogs?.forEach((blog)=>{

const {  
    userId
   ,id,
   title,
   body}=blog||{};
                output += `
                
                <div style="width: 22%; margin: 1em; display:inline-block;border:2px  white;" >
                    <p > ${JSON.stringify(title)}<br>
                  &emsp;&emsp;&emsp; By : &nbsp; ${JSON.stringify(userId)}</p><hr>
                    <p>${JSON.stringify(body)}<hr></p>
                   
                </div>
                 `
            }

            document.querySelector('#post').innerHTML = output;
}

function fetchData(){

    // API call
    const xhr = new XMLHttpRequest()   

   let url =  `https://jsonplaceholder.typicode.com/posts?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09` 
    xhr.open('GET', url)

    xhr.onreadystatechange = () => {
        if(xhr.status === 200 && xhr.readyState === 4) {
            
            const response = JSON.parse(xhr.responseText)
           updateBlogs(response)
        }
    }

    xhr.send()
}


fetchData();



