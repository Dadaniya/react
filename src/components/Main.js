require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let yeomanImage = require('../images/yeoman.png');

let imagesDatas=require('../data.json');
/*
*get image url
 */
imageDatas=imageDatas.map(function(value,index){
  value.url=require('../images/'+value.fileName);
  return value;
})
class GalleryByReactApp extends React.Component {
  render() {
    return (
      <section className="stage">
        <section className="img-sec">

        </section>
        <nav className="controller-nav"></nav>
      </section>
    );
  }
}

GalleryByReactApp.defaultProps = {
};

export default GalleryByReactApp;
