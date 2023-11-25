import React, { useState } from 'react'
import Skeleton from 'react-loading-skeleton';
import { connect } from 'react-redux';
import ImageLoader from '../ImageLoader';
import { setCurrentRent } from '@/app/redux/actions';

const RentLog = ({loading, rentLog, setCurrentRent}) => {

	const handleClick = (event) => {
		if(loading) return;
		setCurrentRent(rentLog);
	}
	
  return (
	<div style={{cursor: 'pointer'}} className="row" onClick={handleClick}>
		<div className="small iconSpace">
			<div className="icon playing">

			</div>
			<div className="icon pause">
				<div className="bar"></div><div className="bar"></div>
			</div>
		</div>
		<div className="small">
			{
				loading ? 
				<Skeleton
				circle
				height={'48px'}
				width={"48px"}
				className='rent-icon'
				/>
				:
				<ImageLoader 
				className={'song-icon'}  
				src={!loading && rentLog.photo || "https://images.genius.com/e95f361c27487088fd9dddf8c967bf89.500x500x1.jpg"} 
				alt="Image"
				width={"48px"}
				height={"48px"}
				/>
			}
		</div>
		<div className="songTitle">
            <div className="big">{loading ? <Skeleton width={"100%"} /> : rentLog.date}</div>
            <div className='small'>{loading ? <Skeleton width={"70%"} /> : rentLog.type }</div>
        </div>
		<div className="small">
			 {!loading && (`₹` + rentLog.amount)}
		</div>
	</div>
  )
}

const mapDispatchToProps = (dispatch) => ({
	setCurrentRent: (rent) => dispatch(setCurrentRent(rent))
});

export default connect(null, mapDispatchToProps)(RentLog);