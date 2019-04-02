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
  table: {
    minWidth: 600,
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
    uNACompleteFixture: 0,
    uNARetrofitKits: 0,
    uNANoFixture: 0,
    uANoFixture: 0,
    uACompleteFixture: 0,
    nNACompleteFixture: 0,
    nNARetrofitKits: 0,
    nNANoFixture: 0,
    nANoFixture: 0,
    nACompleteFixture: 0,
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

    console.log(this.state['uNACompleteFixture']);
    console.log(setup['uNACompleteFixture']);
    let values = items.map(m => this.state[m] * setup[m]);
    let value =  values.reduce((total, value) => total + value);
    console.log('---------------', value);
    return value;
  }

  ccyFormat = num => {
    return `${num.toFixed(2)}`;
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>UNION</TableCell>
                <TableCell>NON-UNION</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <TextField
                    id="u1"
                    label="NA Complete Fixture"
                    value={this.state.uNACompleteFixture}
                    onChange={this.handleChange('uNACompleteFixture')}
                    type="number"
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    margin="normal"
                    variant="outlined"
                  />
                </TableCell>
                <TableCell align="left">
                  <TextField
                    id="n1"
                    label="NA Complete Fixture"
                    value={this.state.nNACompleteFixture}
                    onChange={this.handleChange('nNACompleteFixture')}
                    type="number"
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
                <TableCell>
                  <TextField
                    id="u2"
                    label="NA Retrofit Kits"
                    value={this.state.uNARetrofitKits}
                    onChange={this.handleChange('uNARetrofitKits')}
                    type="number"
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    margin="normal"
                    variant="outlined"
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    id="n2"
                    label="NA Retrofit Kits"
                    value={this.state.nNARetrofitKits}
                    onChange={this.handleChange('nNARetrofitKits')}
                    type="number"
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
                <TableCell>
                  <TextField
                    id="u3"
                    label="NA No Fixture"
                    value={this.state.uNANoFixture}
                    onChange={this.handleChange('uNANoFixture')}
                    type="number"
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    margin="normal"
                    variant="outlined"
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    id="n3"
                    label="NA No Fixture"
                    value={this.state.nNANoFixture}
                    onChange={this.handleChange('nNANoFixture')}
                    type="number"
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
                <TableCell>
                  <TextField
                    id="u4"
                    label="A No Fixture"
                    value={this.state.uANoFixture}
                    onChange={this.handleChange('uANoFixture')}
                    type="number"
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    margin="normal"
                    variant="outlined"
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    id="n4"
                    label="A No Fixture"
                    value={this.state.nANoFixture}
                    onChange={this.handleChange('agnANoFixturee')}
                    type="number"
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
                <TableCell>
                  <TextField
                    id="u5"
                    label="A Complete Fixture"
                    value={this.state.uACompleteFixture}
                    onChange={this.handleChange('uACompleteFixture')}
                    type="number"
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    margin="normal"
                    variant="outlined"
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    id="n5"
                    label="A Complete Fixture"
                    value={this.state.nACompleteFixture}
                    onChange={this.handleChange('nACompleteFixture')}
                    type="number"
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
                <TableCell align="right">Subtotal</TableCell>
                <TableCell align="left">{this.ccyFormat(this.subtotal())}</TableCell>
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
