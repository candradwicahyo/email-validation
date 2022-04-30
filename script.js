window.onload = () => {
  
  function emailValidation() {
    const regex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    const input = document.querySelector('.input');
    const text = document.querySelector('.error-text');
    input.addEventListener('keyup', function() {
      text.textContent = '';
      
      if (!this.value) {
        this.style.background = '#f4f7fe';
      } else if (!this.value.match(regex)) {
        this.style.background = '#e96767';
        this.style.color = 'white';
        text.textContent = 'bukan berupa format email!';
      } else {
        this.style.background = '#4caf50';
        this.style.color = 'white';
      }
      
    });
  }
  
  emailValidation();
  
}