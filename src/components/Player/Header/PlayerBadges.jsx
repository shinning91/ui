import React from 'react';
import { connect } from 'react-redux';
import ReactTooltip from 'react-tooltip';
import { player } from 'reducers';
import Error from 'components/Error';
import Spinner from 'components/Spinner';
import { IconCheese, IconSteam, IconEye, IconEyeInactive, IconTrophy } from 'components/Icons';
import strings from 'lang';
import styles from './PlayerBadges.css';

export const PlayerBadgesIcons = ({ loading, error, cheese, tracked, steamLink, officialPlayerName }) => {
  const getPlayerBadges = () => {
    if (error) return <Error />;
    if (loading) return <Spinner />;
    return (
      <div className={styles.playerBadges}>
        <div className={styles.iconButton}>
          <a rel="noopener noreferrer" target="_blank" href={steamLink}>
            <IconSteam
              data-tip data-for="steamLink"
              className={styles.icon}
            />
            <ReactTooltip id="steamLink" place="top" type="light" effect="solid">
              {strings.app_steam_profile}
            </ReactTooltip>
          </a>
        </div>
        {officialPlayerName && (
          <div className={styles.iconButton}>
            <IconTrophy
              data-tip data-for="proPlayer"
              className={styles.icon}
            />
            <ReactTooltip id="proPlayer" place="top" type="light" effect="solid">
              {`${strings.app_confirmed_as} ${officialPlayerName}`}
            </ReactTooltip>
          </div>
        )}
        {Math.round(new Date().getTime() / 1000.0) >= Number(tracked) ? (
          <div className={styles.iconButton}>
            <IconEyeInactive
              data-tip data-for="untracked"
              className={styles.icon}
              style={{ height: 22, fill: 'darkgray', marginTop: 4 }}
            />
            <ReactTooltip id="untracked" place="top" type="light" effect="solid">
              {strings.app_untracked}
            </ReactTooltip>
          </div>
          ) : (<div className={styles.iconButton}>
            <IconEye
              data-tip data-for="tracked"
              className={styles.icon}
              style={{ height: 22, marginTop: 4 }}
            />
            <ReactTooltip id="tracked" place="top" type="light" effect="solid">
              {strings.app_tracked}
            </ReactTooltip>
          </div>
        )}
        {cheese > 0 && (
          <div className={styles.iconButton}>
            <IconCheese
              data-tip data-for="cheese"
              className={`${styles.cheese} ${styles.icon}`}
              style={{ height: 18 }}
            />
            <ReactTooltip id="cheese" place="top" type="light" effect="solid">
              {`${cheese} ${strings.app_cheese_bought}`}
            </ReactTooltip>
          </div>
        )}
      </div>
    );
  };

  return getPlayerBadges();
};

const mapStateToProps = (state, ownProps) => ({
  loading: player.getLoading(state, ownProps.playerId),
  error: player.getError(state, ownProps.playerId),
  cheese: player.getCheese(state, ownProps.playerId),
  tracked: player.getTrackedUntil(state, ownProps.playerId),
  steamLink: player.getSteamLink(state, ownProps.playerId),
  officialPlayerName: player.getOfficialPlayerName(state, ownProps.playerId),
});


export default connect(mapStateToProps)(PlayerBadgesIcons);
