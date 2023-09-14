class Person {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }
}

class User extends Person {
  constructor(username, password) {
    super(username, password)
  }
}

class ServiceProvider extends Person {
  constructor(username, password) {
    super(username, password)
  }
}

class Admin extends Person {
  constructor(username, password) {
    super(username, password)
  }
}

export default function App() {

  function register() {
    window.location.href = "registration"
  }
	return (
		<div id="center">
			<p>Welcome to Jerry!</p>
			<button onClick={register}>Register</button>
			<button>Login</button>
		</div>
	);
}
