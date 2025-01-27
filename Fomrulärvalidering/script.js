
let myName = 'Jesper';

document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    if(validateForm()) {
        console.log('Submission sent');
    } else {
        console.log('Submission not sent');
    }
    // console.log('Formulär skickat!');
});

function validateForm() {
    console.log('validateForm()');
    const nameRef = document.querySelector('#name');
    const emailRef = document.querySelector('#email');
    const movieRef = document.querySelector('#movie');

    try {
        // console.log(jesper)
        if(nameRef.value.length < 5) {
            throw {
                message : 'Name must be at least 5 characters',
                nodeRef : nameRef
            }

            // throw new Error('Name must be at least 5 characters');
        } else if(!emailRef.value.includes('@')) {
            throw {
                message : 'Enter a valid email address',
                nodeRef : emailRef
            }
            // throw new Error('Enter a valid email address');
        } else if(movieRef.value === '') {
            throw {
                message : 'You must choose a movie',
                nodeRef : movieRef
            }

            // throw new Error('You must choose a movie');
        }
        document.querySelector('#errorMsg').textContent = '';
        nameRef.value = '';
        emailRef.value = '';
        movieRef.value = '';
        return true;
    } catch(error) {
        console.log(error.message);
        error.nodeRef.value = '';
        error.nodeRef.focus();
        document.querySelector('#errorMsg').textContent = error.message;
        return false;
    }
}


// try {
//     console.log(jesper);
//     console.log(myName);
// } catch (error) {
//     console.log(error.message);
// }

// console.log(myName);