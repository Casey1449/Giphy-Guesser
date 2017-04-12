import React from 'react';
import '../styles/Footer.css';
import FooterContainer from '../containers/FooterContainer';

const Footer = ({score, tags, answersSubmitted, startClick, submitClick, newChallengeClick, listLength}) => {

  const tallyScore = () =>
    (tags.filter(t => t.isInCorrectPosition).length) * 25;

  const handleChallengeUpdate = num => {
    newChallengeClick(num);
  }

  return (
    <footer>
      <div className='button-widget'>
        <p style={{color: 'white'}}>Choose your challenge level</p>
        <div className='challenge-level'>
          <button
            className={`challenge-button active-${listLength === 3}`}
            onClick={()=>handleChallengeUpdate(3)}>
            3
          </button>
          <button
            className={`challenge-button active-${listLength === 4}`}
            onClick={()=>handleChallengeUpdate(4)}>
            4
          </button>
          <button
            id={3}
            className={`challenge-button active-${listLength === 5}`}
            onClick={()=>handleChallengeUpdate(5)}>
            5
          </button>
        </div>
      </div>
      { answersSubmitted ?
          <button onClick={() => startClick(listLength)}>
            Next Round ▸▸
          </button>
        :
          <button onClick={() => submitClick(tallyScore())}>
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
