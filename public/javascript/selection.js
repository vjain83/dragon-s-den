function actionTaken(event) {
    event.preventDefault();

    const choiceComment = document.querySelector('#comment')

    if (choiceComment) {
        console.log("Going to comment page now")
        document.location.replace('/comment');
    }
}
// function actionTaken(event) {
//     event.preventDefault();
//     const choiceResearch = document.querySelector('#research')
//     if (choiceResearch) {
//         document.location.replace('/research');

//     }
// }
async function logout() {
    const response = await fetch('/api/readers/logout', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }
}


document.querySelector('.actionTaken-form').addEventListener('submit', actionTaken)
