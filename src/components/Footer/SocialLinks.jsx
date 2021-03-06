import React from 'react';
import IconButton from 'material-ui/IconButton';
import strings from 'lang';
import { IconGithub, IconTwitter, IconDiscord } from '../Icons';
import styles from './Footer.css';

export default () => (
  <div className={styles.SocialLinks}>
    <IconButton
      target="_blank"
      rel="noopener noreferrer"
      className={styles.iconButton}
      tooltipPosition="top-center"
      tooltip={strings.app_github}
      href="//github.com/odota"
    >
      <IconGithub />
    </IconButton>
    <IconButton
      target="_blank"
      rel="noopener noreferrer"
      className={styles.iconButton}
      tooltipPosition="top-center"
      tooltip={strings.app_twitter}
      href="//twitter.com/opendota"
    >
      <IconTwitter />
    </IconButton>
    <IconButton
      target="_blank"
      rel="noopener noreferrer"
      className={styles.iconButton}
      tooltipPosition="top-center"
      href="//discord.gg/0o5SQGbXuWCNDcaF"
      tooltip={strings.app_discord}
    >
      <IconDiscord />
    </IconButton>
  </div>
);
