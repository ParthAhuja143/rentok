import { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { setCurrentRent  } from '../../redux/actions';
import DisplayRent from './DisplayRent';

// import components

const ICContainer = (props) => {
  // states
  const [currentRent, setCurrentRent] = useState(null);

  const handleNext = () => {
    const rentIndex = props.rentList.findIndex((s) => props.rentList.id === s.id);

    if(rentIndex == -1){
      props.setCurrentRent(props.rentList[0]);
    }
    else{
      if(rentIndex >= props.rentList.length - 1){
        props.setCurrentRent(props.rentList[0]);
      }
      else{
        props.setCurrentRent(props.rentList[rentIndex + 1]);
      }
    }

  };

  useEffect(() => {
    if(props.currentRent){
      setCurrentRent(props.currentRent)
    }
  }, [props.currentRent])

  return (
    <>
      <div className="audio-player">
        <div className="inner">
          <DisplayRent
          />
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  currentRent: state.currentRent,
  rentList: state.rentList,
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentRent: (rent) => dispatch(setCurrentRent(rent))
})
export default connect(mapStateToProps, mapDispatchToProps)(ICContainer);