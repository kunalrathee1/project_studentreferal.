document.getElementById('referralForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const inputs = this.querySelectorAll('input');
    let isValid = true;
  
    inputs.forEach(input => {
      if (!input.value.trim()) {
        input.style.borderColor = 'red';
        isValid = false;
      } else {
        input.style.borderColor = '#ccc';
      }
    });
  
    if (isValid) {
      this.classList.add('hidden');
      document.getElementById('thankYouMsg').classList.remove('hidden');
    }
  });
  
  

