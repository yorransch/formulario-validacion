document.getElementById('formulario').addEventListener('submit', (event)=>{
    event.preventDefault()

    let enradaNombre = document.getElementById('name')

    let errorNombre = document.getElementById('nameError')

    //trim e para tirar os espacos do valor escrito no impude de id name
    if (enradaNombre.value.trim() === '') {
        errorNombre.textContent= 'por favor introduza um nome'

        errorNombre.classList.add('error-message')

    }else{
        errorNombre.textContent= ''

        errorNombre.classList.remove('error-message')
    }

    let emailEntrada = document.getElementById('email')
    let emailError = document.getElementById('emailError')
    let emailPaterns = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPaterns.test(emailEntrada.value)) {
        emailError.textContent= 'por favor introduza um email'

        emailError.classList.add('error-message') 
    }else{
        emailError.textContent= ''

        emailError.classList.remove('error-message')
    }


    let contraSenha = document.getElementById('password')

    let contraSenhaErroor = document.getElementById('passwordError')
 
    if (contraSenha.value.length < 8) {
        contraSenhaErroor.textContent= 'la contrasenha debe tener al menos 8 caracteres'

        contraSenhaErroor.classList.add('error-message') 
        
    }else{
        contraSenhaErroor.textContent= ''

        contraSenhaErroor.classList.remove('error-message')
    }



    if (!errorNombre.textContent && !emailError.textContent && !contraSenhaErroor.textContent) {
        alert('el formulario se ha enviado con sucesso')

        document.getElementById('formulario').reset();
    }

})
