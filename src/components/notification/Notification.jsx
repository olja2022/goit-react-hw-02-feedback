import css from './Notification.module.css';
import PropTypes from 'prop-types';

const Notification = ({ title }) => (
  <p className={css.feedbackForm__notification}>{title}</p>
);

export default Notification;

Notification.propTypes = {
  title: PropTypes.string.isRequired,
};
