async function bookInfoHandler(event) {
    event.preventDefault();
    const author = document.querySelector('#author').value.trim();
    const title = document.querySelector('#title').value.trim();
    const genre = document.querySelector('#genre').value.trim();
    const isbn = document.querySelector('#isbn').value.trim();
    const edition = document.querySelector('#edition').value.trim();

    if (author && title && genre && isbn && edition) {
        const response = await fetch('/api/books', {
            method: 'post',
            body: JSON.stringify({
                author,
                title,
                genre,
                isbn,
                edition
            }),
            headers: { 'Content-Type': 'application/json' }

        });
        if (response.ok) {
            console.log(response)
            document.location.replace('/comment')
        }
        else {
            alert(response.statusText);
        }

    }

}
// async function commentFormHandler(event) {
//     // event.preventDeafult();

//     const review_text = document.querySelector('textarea[name="comments"]').value.trim();

//     const reader_id = window.location.toString().split('/')[
//         window.location.toString().split('/').length - 1
//     ];

//     console.log(comment_text, post_id);
//     if (review_text && ) {
//         const response = await fetch('/api/reviews', {
//             method: 'post',
//             body: JSON.stringify({
//                 reader_id,
//                 review_text
//             }),
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         });

//         if (response.ok) {
//             document.location.reload();
//         } else {
//             alert(response.statusText);
//         }
//     }
// }



document.querySelector('.grid-container').addEventListener('submit', bookInfoHandler)