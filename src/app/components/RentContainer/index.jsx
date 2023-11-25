//import { useLazyQuery, useQuery } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
//import { GET_SONGS } from '../../graphql/query/songs'
import {rentData} from '../../data/index';
import RentLog from '../common/RentLog'
import { AppState } from '../../redux/store';
import { setRentList } from '@/app/redux/actions';
//import Searchbar from '../Searchbar/Searchbar'
//import { setSongList } from '../../redux/actions'

const RentContainer = (props) => {

	const [search, setSearch] = useState('');
	const data = rentData;
	const [componentLoading, setComponentLoading] = useState(false);

	useEffect(() => {
		setComponentLoading(true);
		if(data){
			setTimeout(() => {
				props.setRentList(data);
				setComponentLoading(false);
			}, 1000)
		}
	}, [data])

  return (
    <div className="song-container">
		<h1>Previous Rents</h1>
		{ /** 
        <Searchbar 
		search={search}
		setSearch={setSearch}
        
		/>
        */}
		{
		 componentLoading ? 
		<>
			<RentLog loading={componentLoading}/>
			<RentLog loading={componentLoading}/>
			<RentLog loading={componentLoading}/>
			<RentLog loading={componentLoading}/>
			<RentLog loading={componentLoading}/>
			<RentLog loading={componentLoading}/>
			<RentLog loading={componentLoading}/>
		</>
		:
		data && data.map(rent => (
			<RentLog loading={componentLoading} rentLog={rent} key={rent.id}/>
		))
		}
</div>
  )
}

const mapStateToProps = (state) => ({
	//currentPlaylistUUID: state.currentPlaylistUUID,
	rentList: state.rentData,
});

const mapDispatchToProps = (disaptch) => ({
	setRentList: (rentList) => disaptch(setRentList(rentList))
})

export default connect(mapStateToProps, mapDispatchToProps)(RentContainer);