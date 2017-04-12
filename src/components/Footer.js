import React from 'react';
import '../styles/Footer.css';
import FooterContainer from '../containers/FooterContainer';

const Footer = ({score, tags, answersSubmitted, startClick, submitClick}) => {

  const tallyScore = () =>
    (tags.filter(t => t.isInCorrectPosition).length) * 25;

  return (
    <footer>
      { answersSubmitted ?
          <button onClick={() => startClick()}>
            Next Round ▸▸
          </button>
        :
          <button onClick={ () => submitClick(tallyScore())}>
            Submit!
          </button>
      }
      <div className='score'>
        <h1 key={'score-key'}>{score || 0}</h1>
      </div>
    </footer>
  );
};

export default FooterContainer(Footer);
