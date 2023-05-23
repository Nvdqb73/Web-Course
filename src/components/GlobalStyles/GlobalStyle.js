import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import './GlobalStyle.scss';

function GlobalStyles({ children }) {
    return children;
}

GlobalStyles.propTypes = {
    children: PropTypes.node.isRequired,
};

export default GlobalStyles;
