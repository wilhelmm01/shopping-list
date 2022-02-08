async function newFormHandler(event) {
    event.preventDefault();

    const item = document.querySelector('input[name="new-item"]').value;
    const response = await fetch('api/posts', {
        method: 'POST',
        body: JSON.stringify({
            item
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (response.ok) {
        document.location.replace('/shopping-list');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.new-item').addEventListener('submit', newFormHandler);