import React from 'react';
import '../styles/Footer.css';
import FooterContainer from '../containers/FooterContainer';

const Footer = (props) => {

  const tallyScore = () =>
    (props.tags.filter(t => t.isInCorrectPosition).length) * 25;

  return (
    <footer>
      <h1>75</h1>
      <button
        onClick={ () => props.submitClick(tallyScore()) }
      >
        Submit!
      </button>
    </footer>
  );
};

export default FooterContainer(Footer);
