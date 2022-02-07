async function newFormHandler(event) {
    event.preventDefault();

    const price = document.querySelector('input[name="add-price"]').value;

    const response = await fetch('/api/post', {
        method: 'POST',
        body: JSON.stringify({
            price
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

document.querySelector('.new-price').addEventListener('submit', newFormHandler);