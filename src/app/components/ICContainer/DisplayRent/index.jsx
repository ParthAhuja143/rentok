import { BsBuildingFillExclamation } from 'react-icons/bs'
import {usePalette} from 'react-palette'
import { connect } from 'react-redux';
import { setAppBackground } from '../../../redux/actions';
import { useEffect } from 'react';
import ImageLoader from '../../common/ImageLoader';

const DisplayRent = ({
  currentRent,
  setBackground,
  background
}) => {

  const {data, loading, error} = usePalette(`${currentRent && currentRent.photo}`)

  useEffect(() => {
    if(data){
      console.log(data)
      document.body.style.backgroundImage = `linear-gradient(135deg, ${data.darkVibrant} 0%, #000 100%)`;
      setBackground(data);
    }
  }, [data])

  useEffect(() => {
    if(background && Object.keys(background).length > 0){
      //document.body.style.background = `linear-gradient(135deg, #201606 0%, #000 100%);`;
    }
    else{
      //document.body.style.background = `linear-gradient(135deg, #201606 0%, #000 100%);`;
    }
  }, [background])

  return (
    <div>
      <div className="audio-info">
      <div className="text">
          <p className="title">{currentRent && (`₹` + currentRent.amount)}</p>
          <p>{currentRent && currentRent.date}</p>
        </div>
        <div className="audio-image">
          { currentRent && (currentRent.photo || "https://images.genius.com/e95f361c27487088fd9dddf8c967bf89.500x500x1.jpg") ? (
            <ImageLoader key={currentRent.photo || "https://images.genius.com/e95f361c27487088fd9dddf8c967bf89.500x500x1.jpg"} src={ currentRent.photo || "https://images.genius.com/e95f361c27487088fd9dddf8c967bf89.500x500x1.jpg"} alt="audio avatar" />
          ) : (
            <div className="icon-wrapper">
              <span className="audio-icon">
                <BsBuildingFillExclamation />
              </span>
            </div>
          )}
        </div>

        <div style={{margin: '10px'}}>
            <p>{currentRent && currentRent.description}</p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentRent: state.currentRent,
  background: state.background,
})

const mapDispatchToProps = (dispatch) => ({
  setBackground: (background) => dispatch(setAppBackground(background))
});

export default connect(mapStateToProps, mapDispatchToProps)(DisplayRent);