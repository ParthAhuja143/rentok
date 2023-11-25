import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Skeleton from 'react-loading-skeleton';

const ImageLoader = ({ src, alt, className, circle, height, width }) => {
  const [loaded, setLoaded] = useState(false);

  const onLoad = () => {
    console.log('Image loaded successfully');
    setLoaded(true);
  };

  return (
    <>
      {!loaded && (
        <Skeleton
          circle={circle}
          height={height}
          width={width}
          className={className}
        />
      )}
      <img
        alt={alt || ''}
        className={`${className || ''} ${loaded ? 'is-img-loaded' : 'is-img-loading'}`}
        onLoad={onLoad}
        style={{ display: !loaded ? 'none' : undefined }}
        src={src}
      />
    </>
  );
};

ImageLoader.defaultProps = {
  alt: 'Image',
  circle: false,
  width: '100%',
  height: '100%',
};

ImageLoader.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  className: PropTypes.string,
  circle: PropTypes.bool,
  height: PropTypes.string,
  width: PropTypes.string,
};

export default ImageLoader;
