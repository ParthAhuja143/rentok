/** @format */

import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { connect } from "react-redux";
import {setCurrentProperty, setCurrentScreen} from '../../redux/actions'
import { sideNavOptions } from "@/app/data";

const Sidenav = (props) => {

  const {setCurrentScreen, currentScreen} = props;
  const data = sideNavOptions;
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [subdomainColor, setSubdomainColor] = useState('gray');

  useEffect(() => {
    // Client-side logic to get subdomain from the URL
    const subdomain = window.location.hostname.split('.')[0];

    // Client-side logic to generate color palette based on subdomain
    const colorPalette = generateColorPalette(subdomain);

    setSubdomainColor(colorPalette.backgroundColor);
  }, []);

  const generateColorPalette = (subdomain) => {
    // Simple hashing logic for demo purposes
    const hash = subdomain
      .split('')
      .reduce((acc, char) => acc + char.charCodeAt(0), 0);

    // Generate color based on hash
    const backgroundColor = `hsl(${hash % 360}, 70%, 5%)`;
    console.log(backgroundColor)
    return { backgroundColor };
  };

  useEffect(() => {
    if(data){
      setTimeout(() => {
        setCurrentScreen(data[0]);
        setLoading(false);
      }, 1000)
    }
  }, [loading, data]);

  return (
    <>
    <button className="sideBarOpen" onClick={(e) => {setOpen(true)}}>{String.fromCharCode(9776)}</button>
    <div className={`sidebar ${open ? 'is-open' : 'is-closed'}`} style={{background: subdomainColor}}>
      <button className="sideBarClose" onClick={(e) => setOpen(false)}>{String.fromCharCode(215)}</button>
      <div className="sidebarContainer">
      <div className="sidebar_title">
        <b>RENTOK</b>
      </div>
        <div className="sidebar_options">
          {
            loading && (
              <>
                <div className="sidebar_option">
                  <div>{loading ? <Skeleton width={"90%"} height="40px" /> : 'Top Tracks'}</div>
                </div>
                <div className="sidebar_option">
                  <div>{loading ? <Skeleton width={"90%"} height="40px" /> : 'Favourites'}</div>
                </div>
                <div className="sidebar_option">
                  <div>{loading ? <Skeleton width={"90%"} height="40px" /> : 'Recently Played'}</div>
                </div>
              </>
            )
          }
          {
            data && data.map(screen => {
              return (
                <div 
                style={{cursor: 'pointer'}}
                key={screen} className={`sidebar_option ${currentScreen === screen && 'active'}`}
                onClick={(event) => {setCurrentScreen(screen) ; setOpen(false)}}
                >
                  <div>{loading ? <Skeleton width={"90%"} height="40px" /> : screen}</div>
                </div>
              )
            })
          }
        </div>
        {/*<div className='sidebar_options' style={{ marginTop: "30px" }}>
					{myPlaylists.map((playlist) => {
						if(!playlist.name || !playlist.icon){
							return (<></>)
						}
						return (
						<div className='sidebar_option'>
							<div className='sidebar_img' style={{ margin: "0px" }}>
								<img src={playlist.icon} />
							</div>
							<div>{playlist.name.length > 10 ? playlist.name.substr(0, 9) + "..." : playlist.name}</div>
						</div>
					)})}
                </div>*/}
      </div>
    </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  currentScreen: state.currentScreen,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentScreen: (screen) => dispatch(setCurrentScreen(screen))
})

export default connect(mapStateToProps, mapDispatchToProps)(Sidenav);
