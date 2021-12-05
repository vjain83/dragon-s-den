async function loginFormHandler(event) {
    event.preventDefault()
    const username = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();

    if (username && password) {
        const response = await fetch('/api/readers/login', {

            method: 'post',
            body: JSON.stringify({
                username,
                password
            }),
            headers: { 'content-type': 'application/json' }
        });
        if (response.ok) {
            document.location.replace('/selection')
        }
        else {
            alert(response.statusText)
        }
    }
}
document.querySelector('.login-form').addEventListener('submit', loginFormHandler)