async function commentFormHandler(event) {
  event.preventDefault();

  const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();
  const post_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  if (comment_text) {
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({
        post_id,
        comment_text
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
}

document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);
