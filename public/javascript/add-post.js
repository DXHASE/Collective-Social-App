function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
  const image = document.querySelector('input[name="image"]').files[0];
  const reader = new FileReader();
  let result;
  console.log(title)
  reader.onloadend = async function () {
    result = {
      title: title,
      image: reader.result
    }
    const response = await fetch(`/api/posts`, {
      method: 'POST',
        body: JSON.stringify(result),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  
    if (response.ok) {
      document.location.replace('/profile');
    } else {
      const script = document.createElement("script");
      script.setAttribute('id','script');
      script.innerText = "Swal.fire({ \n \
        title: 'Error!', \n \
        width: 600, \n \
        padding: '3em', \n \
        color: '#716add', \n \
        background: '#fff', \n \
        backdrop: ` \n \
          rgba(0,0,123,0.4) \n \
          url('/images/ghost.gif') \n \
          left top \n \
          no-repeat \n \
        ` \n \
      })";
      const create = document.body.appendChild(script);
      create
    }
  }
  if (image) {
  reader.readAsDataURL(image);
  } else {
    const script = document.createElement("script");
    script.setAttribute('id','script');
    script.innerText = "Swal.fire({ \n \
      title: 'Please select a Image!', \n \
      width: 600, \n \
      padding: '3em', \n \
      color: '#716add', \n \
      background: '#fff', \n \
      backdrop: ` \n \
        rgba(0,0,123,0.4) \n \
        url('/images/ghost.gif') \n \
        left top \n \
        no-repeat \n \
      ` \n \
    })";
    const create = document.body.appendChild(script);
    create
  }
  console.log(reader);
}

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
