import React, { Component } from "react";
// import { Line, Doughnut, Bar, Radar } from 'react-chartjs-2';
import { Line, Bar, Radar } from "react-chartjs-2";

import { ProgressBar, Dropdown } from "react-bootstrap";
import GaugeChart from "react-gauge-chart";
import { VectorMap } from "react-jvectormap";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import { Form } from "react-bootstrap";
import DatePicker from "react-datepicker";

import MerchantTable from "../../Merchant-Panel-Components/Merchant-Panel-Table/MerchantTable";

export class WithdrawalRequest extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: "",
			active: "",
		};
		// this.statusChangedHandler = this.statusChangedHandler.bind(this);
		// this.addTodo = this.addTodo.bind(this);
		// this.removeTodo = this.removeTodo.bind(this);
		// this.inputChangeHandler = this.inputChangeHandler.bind(this);
	}

	toggleProBanner() {
		document.querySelector(".proBanner").classList.toggle("hide");
	}
	render() {
		return (
			<div>
				<div className="row page-title-header">
					<div className="col-12">
						<div className="page-header">
							<h4 className="page-title">Withdrawal Request</h4>
						</div>
					</div>
				</div>
				<MerchantTable />
			</div>
		);
	}
}
export default WithdrawalRequest;
