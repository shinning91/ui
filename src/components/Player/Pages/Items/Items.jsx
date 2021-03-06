import React from 'react';
import {
  connect,
} from 'react-redux';
import {
  getPlayerItems,
} from 'actions';
import {
  playerItems,
} from 'reducers';
import Table, {
  TableContainer,
} from 'components/Table';
import {
  TableFilterForm,
} from 'components/Form';
import playerItemsColumns from './playerItemsColumns';

const Items = ({
  data,
}) => (
  <div>
    <TableFilterForm />
    <TableContainer title="Items">
      <Table paginated columns={playerItemsColumns} data={data} />
    </TableContainer>
  </div>
);

const getData = (props) => {
  props.getPlayerItems(props.playerId, props.location.query);
};

class RequestLayer extends React.Component {
  componentDidMount() {
    getData(this.props);
  }

  componentWillUpdate(nextProps) {
    if (this.props.playerId !== nextProps.playerId || this.props.location.key !== nextProps.location.key) {
      getData(this.props);
    }
  }

  render() {
    return <Items {...this.props} />;
  }
}

const mapStateToProps = (state, { playerId }) => ({
  data: playerItems.getItemsList(state, playerId),
});

const mapDispatchToProps = dispatch => ({
  getPlayerItems: (playerId, options) => dispatch(getPlayerItems(playerId, options)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RequestLayer);
