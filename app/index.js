import React from 'react'
import ReactDOM from 'react-dom'

let User = React.createClass({
	render: function() {
		return <div>UserL</div>
	}
})

let App = React.createClass({
	render: function() {
		return (
			<div>
				<h1>User List:</h1>
				<User />
			</div>
		)	
	}
})

ReactDOM.render(<App />, document.getElementById('root'))

