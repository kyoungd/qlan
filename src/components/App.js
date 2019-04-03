import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import setup from './setup';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  tableCellField: {
    paddingLeft: 0,
    paddingRight: 10
  },
  estimate: {
    fontSize: 18
  }
});

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

class OutlinedTextFields extends React.Component {
  state = {
    uNACompleteFixture: '',
    uNARetrofitKits: '',
    uNANoFixture: '',
    uANoFixture: '',
    uACompleteFixture: '',
    nNACompleteFixture: '',
    nNARetrofitKits: '',
    nNANoFixture: '',
    nANoFixture: '',
    nACompleteFixture: '',
    age: '',
  };

  subtotal = () => {
    const items = [
      'uNACompleteFixture',
      'uNARetrofitKits',
      'uNANoFixture',
      'uANoFixture',
      'uACompleteFixture',
      'nNACompleteFixture',
      'nNARetrofitKits',
      'nNANoFixture',
      'nANoFixture',
      'nACompleteFixture',
    ]

    let values = items.map(m => (this.state[m] === '' ? 0 : this.makeNumber(this.state[m])) * setup[m]);
    let value =  values.reduce((total, value) => total + value);
    return value;
  }

  ccyFormat = num => {
    return `${num.toFixed(2)}`;
  }

  numberWithCommas = x => {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  }

  makeNumber = x => {
    return x.replace(/[-+()\s,]/g, '');
  }

  isNumeric = (value) => {
    return /^-{0,1}\d+$/.test(value);
  }

  handleChange = name => event => {
    let val = this.makeNumber(event.target.value);
    if (val === '') {
      this.setState({
        [name]: '',
      });
    }
    else if (this.isNumeric(val)) {
      this.setState({
        [name]: this.numberWithCommas(val),
      });
    }
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell className={classes.tableCellField}>&nbsp;UNION</TableCell>
                <TableCell className={classes.tableCellField}>&nbsp;NON-UNION</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.tableCellField}>
                  <TextField
                    id="u1"
                    label="NA Complete Fixture"
                    value={this.state.uNACompleteFixture}
                    onChange={this.handleChange('uNACompleteFixture')}
                    type="text"
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    margin="normal"
                    variant="outlined"
                  />
                </TableCell>
                <TableCell className={classes.tableCellField}>
                  <TextField
                    id="n1"
                    label="NA Complete Fixture"
                    value={this.state.nNACompleteFixture}
                    onChange={this.handleChange('nNACompleteFixture')}
                    type="text"
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    margin="normal"
                    variant="outlined"
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.tableCellField}>
                  <TextField
                    id="u2"
                    label="NA Retrofit Kits"
                    value={this.state.uNARetrofitKits}
                    onChange={this.handleChange('uNARetrofitKits')}
                    type="text"
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    margin="normal"
                    variant="outlined"
                  />
                </TableCell>
                <TableCell className={classes.tableCellField}>
                  <TextField
                    id="n2"
                    label="NA Retrofit Kits"
                    value={this.state.nNARetrofitKits}
                    onChange={this.handleChange('nNARetrofitKits')}
                    type="text"
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    margin="normal"
                    variant="outlined"
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.tableCellField}>
                  <TextField
                    id="u3"
                    label="NA No Fixture"
                    value={this.state.uNANoFixture}
                    onChange={this.handleChange('uNANoFixture')}
                    type="text"
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    margin="normal"
                    variant="outlined"
                  />
                </TableCell>
                <TableCell className={classes.tableCellField}>
                  <TextField
                    id="n3"
                    label="NA No Fixture"
                    value={this.state.nNANoFixture}
                    onChange={this.handleChange('nNANoFixture')}
                    type="text"
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    margin="normal"
                    variant="outlined"
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.tableCellField}>
                  <TextField
                    id="u4"
                    label="A No Fixture"
                    value={this.state.uANoFixture}
                    onChange={this.handleChange('uANoFixture')}
                    type="text"
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    margin="normal"
                    variant="outlined"
                  />
                </TableCell>
                <TableCell className={classes.tableCellField}>
                  <TextField
                    id="n4"
                    label="A No Fixture"
                    value={this.state.nANoFixture}
                    onChange={this.handleChange('agnANoFixturee')}
                    type="text"
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    margin="normal"
                    variant="outlined"
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.tableCellField}>
                  <TextField
                    id="u5"
                    label="A Complete Fixture"
                    value={this.state.uACompleteFixture}
                    onChange={this.handleChange('uACompleteFixture')}
                    type="text"
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    margin="normal"
                    variant="outlined"
                  />
                </TableCell>
                <TableCell className={classes.tableCellField}>
                  <TextField
                    id="n5"
                    label="A Complete Fixture"
                    value={this.state.nACompleteFixture}
                    onChange={this.handleChange('nACompleteFixture')}
                    type="text"
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    margin="normal"
                    variant="outlined"
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="right">ESTIMATE</TableCell>
                <TableCell align="left" className={classes.estimate}>${this.numberWithCommas(this.ccyFormat(this.subtotal()))}</TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </Paper>
      </form>
    );
  }
}

OutlinedTextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedTextFields);
