import React from 'react';
import { Card, CardActions } from 'material-ui/Card';
import PlayerName from './PlayerName';
import PlayerMMR from './PlayerMMR';
import PlayerRecord from './PlayerRecord';
import styles from './PlayerHeader.css';

export default ({ playerId }) => (
  <Card>
    <div className={styles.container}>
      <PlayerName playerId={playerId} style={{ width: '40%' }} />
      <CardActions>
        <PlayerRecord playerId={playerId} />
        <PlayerMMR playerId={playerId} />
      </CardActions>
    </div>
  </Card>
);
