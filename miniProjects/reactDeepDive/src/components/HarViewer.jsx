require('fixed-data-table/dist/fixed-data-table.css')

import React from 'react';
import _ from 'lodash';
import {Grid, Row, Col, PageHeader, Button, ButtonGroup, Input} from 'react-bootstrap';

import FixedDataTable from 'fixed-data-table';
const Table = FixedDataTable.Table;
const Column = FixedDataTable.Column;
const GutterWidth = 30;

export default class HarViewer extends React.Component {

	constructor() {
    super();
    this.state = {
    	isColumnResizing: false,
    	columnWidths: {
    		url: 500,
    		size: 100,
    		time: 200
    	},
    	tableWidth: 1000,
    	tableHeight: 500
    };
	}

	render() {

		var buttons = _.map(_.keys(mimeTypes.types), (x) => {
			return this._createButton(x, mimeTypes.types[x].label);
		});
		
		return (
			<Grid>

	      <Row>
	        <Col sm={12}>
	        	<PageHeader>Har Viewer</PageHeader>
	        </Col>

	        <Col sm={3} smOffset={9}>
	        	<div>
	        		<label className="control-label"></label>
	        		<select className="form-control" onChange={this._sampleChanged.bind(this)}>
	        			<option value="">---</option>
        			</select>
	        	</div>
	        </Col>
	      </Row>

	      <Row>
	      	<Col sm={12}>
	      		<p>Pie Chart</p>
	      	</Col>
	      </Row>

	      <Row>
	      	<Col sm={8}>
	      		<ButtonGroup bsSize="small">
	      			{this._createButton('all', 'All')}
	      			{buttons}
      			</ButtonGroup>
	      	</Col>
	      </Row>

	      <Row>
	        <Col sm={12}>
	        	<Table rowsCount={this.props.entries.length}
	        				 width={this.state.tableWidth}
	        				 headerHeight={30}
	        				 height={this.state.tableHeight}
	        				 rowHeight={30}
	        				 rowGetter={this._getEntry.bind(this)}
	        				 isColumnResizing={this.state.isColumnResizing}
	        				 onColumnResizeEndCallback={this._onColumnResized.bind(this)}
    				>
	        	  <Column dataKey="url"
	        						width={this.state.columnWidths.url}
	        						isResizable={true}
	        						label="Url" 
	        						flexGrow={null} />
	        		<Column dataKey="size"
	        						width={this.state.columnWidths.size}
	        						isReszable={true}
	        						label="Size" />
  						<Column dataKey="time"
				  						width={this.state.columnWidths.time}
				  						minWidth={200}
				  						isReszable={true}
				  						label="Timeline" />
	        	</Table>
	        </Col>
	      </Row>

	    </Grid>
    ) // end return
	}; // end render

	_getEntry(index) {
		return this.props.entries[index];
	}

	_onColumnResized(newColumnWidth, datakey) {
		var columnWidths = this.state.columnWidths;
		columnWidths[datakey] = newColumnWidth;

		this.setState({ columnWidths: columnWidths, isColumnResizing: false });
	}

	// --------------------------------
	// Table Resizing
	// --------------------------------

	componentDidMount() {

		window.addEventListener('resize', _.debounce(this._onResize.bind(this), 50, {leading: true, trailing: true}));
		this._onResize();
	}

	_onResize() {
		var parent = React.findDOMNode(this).parentNode;

		this.setState({
			tableWidth: parent.clientWidth - GutterWidth,
			tableHeight: document.body.clientHeight - parent.offsetTop - GutterWidth * 0.5
		})
	}

}

HarViewer.defaultProps = { entries: [] };