async function logout() {
  const response = await fetch('/api/users/logout', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' }
  });

  if (response.ok) {
    document.location.replace('/');
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

document.querySelector('#logout').addEventListener('click', logout);
