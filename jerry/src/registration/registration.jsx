import React from 'react'

ReactDOM.render(
  <React.StrictMode>
	 <Registration />
  </React.StrictMode>,
  document.getElementById('root')
)

export default function Registration() {
	return (
		<div id="center">
			<p>Register!</p>
		</div>
	);
}