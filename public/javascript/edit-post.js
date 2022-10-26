async function editFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value.trim();
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  const response = await fetch(`/api/posts/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      title
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/profile/');
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

document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);
