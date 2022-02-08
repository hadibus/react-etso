import React from "react";
import logo from "./logo.svg";
import './App.scss';

//import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Alert, Breadcrumb, Card } from "react-bootstrap";

function App() {
	return (
		<div>
			<header className="border-bottom">
				<div className="container">
					<div className="row align-items-center">
						<h1 className="col-1 text-primary">Etso</h1>
						<input className="col-auto" type="search"/>
						<a className="justify-self-end col-1" href="#">Sign in</a>
						<a className="justify-self-end col-1" href="#">cart4</a>
					</div>
					<div>
					<Button>hi</Button>
					</div>
					<div>
						<nav>
							<ul className="row">
								<li className="col-1">
									<a href="#">navlink 1</a>
								</li>
								<li className="col-1">
									<a href="#">navlink 2</a>
								</li>
								<li className="col-1">
									<a href="#">navlink 3</a>
								</li>
								<li className="col-1">
									<a href="#">navlink 4</a>
								</li>
								<li className="col-1">
									<a href="#">navlink 5</a>
								</li>
								<li className="col-1">
									<a href="#">navlink 6</a>
								</li>
								<li className="col-1">
									<a href="#">navlink 7</a>
								</li>
								<li className="col-1">
									<a href="#">navlink 8</a>
								</li>
								<li className="col-1">
									<a href="#">navlink 9</a>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</header>
		</div>
	);
}

export default App;
