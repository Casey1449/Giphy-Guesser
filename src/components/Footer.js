import React from 'react';
import '../styles/Footer.css';
import FooterContainer from '../containers/FooterContainer';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

const Footer = ({score, tags, answersSubmitted, startClick, submitClick}) => {

  const tallyScore = () =>
    (tags.filter(t => t.isInCorrectPosition).length) * 25;

  return (
    <footer>
      { answersSubmitted ?
          <button onClick={() => startClick(tallyScore())}>
            Next Round ▸▸
          </button>
        :
          <button onClick={ () => submitClick()}>
            Submit!
          </button>
      }
      <div className='score'>
        <h1>{score || 0}</h1>
      </div>
    </footer>
  );
};

export default FooterContainer(Footer);
