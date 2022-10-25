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
      alert(response.statusText);
    }
  }
  reader.readAsDataURL(image);

  console.log(reader);
}

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
