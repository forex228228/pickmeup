	function login() {
	  const email = document.querySelector(".rec-1").innerText; // Отримання електронної пошти (contenteditable)
	  const password = document.querySelector(".rec-2").innerText; // Отримання паролю (з поле введення)

	  const data = {
		email: email,
		password: password,
	  };

	  sendRequest(data);
	}

	function loginDesktop() {
	  const email = document.querySelector(".rec-1").innerText; // Отримання електронної пошти для версії "desktop"
	  const password = document.querySelector(".rec-2").innerText; // Отримання паролю (з поля введення)

	  const data = {
		email: email,
		password: password,
	  };

	  sendRequest(data);
	}

    function sendRequest(data) {
      fetch("https://innabot.pythonanywhere.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((result) => {
          if (result.success && result.access_token) {
            window.location.href = "menu.html";
          } else {
            alert("Неправильна пошта або пароль");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
	
	function togglePasswordVisibility(inputId, iconClass) {
	  const passwordInput = document.getElementById(inputId);
	  const visibilityIcon = document.querySelector(`.${iconClass}`);

	  if (passwordInput.type === "password") {
		passwordInput.type = "text";
		visibilityIcon.src = "img/ic-visibility.svg";
	  } else {
		passwordInput.type = "password";
		visibilityIcon.src = "img/ic-visibility-1.svg";
	  }
	}
