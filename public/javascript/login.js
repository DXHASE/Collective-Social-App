async function loginFormHandler(event) {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'post',
      body: JSON.stringify({
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      const script = document.createElement("script");
      script.setAttribute('id','script');
      script.innerText = "Swal.fire({ \n \
        title: 'Invalid Username or Password, Or user doesnt exist!', \n \
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

function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  const profileImage = document.querySelector('input[name="profileImage"]').files[0];
  const reader = new FileReader();
  let result;
  
  reader.onload = async function () {
    result = {
      username: username,
      email: email,
      password: password,
      profileImage: reader.result
    }
    if (username && email && password && profileImage) {
      const response = await fetch('/api/users', {
        method: 'post',
        body: JSON.stringify(result),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        const script = document.createElement("script");
        script.setAttribute('id','script');
        script.innerText = "Swal.fire({ \n \
          title: 'User Already Exists or Invalid User!', \n \
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
  reader.readAsDataURL(profileImage);
}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
