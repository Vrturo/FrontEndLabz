require('fixed-data-table/dist/fixed-data-table.css')

import React from 'react';
import _ from 'lodash';
import {Grid, Row, Col, PageHeader, Button, ButtonGroup, Input} from 'react-bootstrap';

import FixedDataTable from 'fixed-data-table';
const Table = FixedDataTable.Table;
const Column = FixedDataTable.Column;

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
    	tableWidths: 1000,
    	tableHeight: 500
    };
	}

	render() {
		return (
			<Grid>

	      <Row>
	        <Col sm={12}>
	        	<PageHeader>Har Viewer</PageHeader>
	        </Col>
	      </Row>

	      <Row>
	        <Col sm={12}>
	        	<Table rowsCount={this.props.entries.length}
	        				 width={this.state.tableWidths}
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

}

HarViewer.defaultProps = { entries: [] };