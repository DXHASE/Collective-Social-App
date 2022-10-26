async function upvoteClickHandler(event) {
  event.preventDefault();

  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  const response = await fetch('/api/posts/upvote', {
    method: 'PUT',
    body: JSON.stringify({
      post_id: id
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.reload();
  } else {
    const script = document.createElement("script");
    script.setAttribute('id','script');
    script.innerText = "Swal.fire({ \n \
      title: 'You already liked this post!', \n \
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

document.querySelector('.upvote-btn').addEventListener('click', upvoteClickHandler);
