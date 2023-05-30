function validateEmail(email) {
    const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email)
  }
  function validateForm() {
    const emailInput = document.getElementById('email');
    const email = emailInput.value;
} 
    if (!validateEmail(email)) {
      alert("Manuel Magnifico");
    } 
    else {
      alert('Correo electrónico enviado correctamente.');
    }
