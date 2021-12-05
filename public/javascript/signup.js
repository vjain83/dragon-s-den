async function signupFormHandler(event) {
    event.preventDefault();
    const fullname = document.querySelector('#fullname').value.trim();
    const username = document.querySelector('#username').value.trim();
    const bookclubaffiliation = document.querySelector('#bookclubaffiliation').value.trim();
    const password = document.querySelector('#password').value.trim();

    if (fullname && username && bookclubaffiliation && password) {
        const response = await fetch('/api/readers', {
            method: 'post',
            body: JSON.stringify({
                fullname,
                username,
                bookclubaffiliation,
                password
            }),
            headers: { 'Content-Type': 'application/json' }

        });
        if (response.ok) {
            document.location.replace('/login')
        }
        else {
            alert(response.statusText);
        }

    }

}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler)