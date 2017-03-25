import React from 'react';
import NavigationBar from './NavigationBar'
import footer from './footer'


class App  extends React.Component {
	render(){
		return(
			<div className="container">
				<NavigationBar/>
				{this.props.children}
				<footer/>
			</div>
		);
	}
	
}

export default App;