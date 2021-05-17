import React, {Component} from "react";
import { NavLink } from 'react-router-dom'

export class Pravi extends Component{

	constructor() {
		super();
	}

	render() {

		return(
			<header>
				<div className="col-7-12 col-lg-6-12 col-md-5-12 col-sm-4-12 hidden-xs">
					<div className="hidden-sm hidden-xs menu uppercase">
						<ul>
							<li><NavLink to="/">Home</NavLink></li>
							<li><NavLink to="/login">Login</NavLink></li>
							<li><NavLink to="/profile">Profile</NavLink></li>
						</ul>
					</div>
				</div>
			</header>
		)

	}

}