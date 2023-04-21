function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password");
    var toggleButton = document.getElementById("togglePasswordButton");
    var passwordVisibilityIcon = document.getElementById("passwordVisibilityIcon");
  
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        passwordVisibilityIcon.classList.remove('bi_bi-eye')
        passwordVisibilityIcon.classList.add('bi_bi-eye-slash')
      }
      
     else {

      passwordInput.type = "password";
     
        passwordVisibilityIcon.classList.remove("bi_bi-eye-slash");
        passwordVisibilityIcon.classList.add("bi_bi-eye");
     
      
      toggleButton.setAttribute("aria-label", "Afficher le mot de passe");
    }
  }
  
  