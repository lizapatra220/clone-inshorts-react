import React from 'react'
import PropTypes from 'prop-types'
import { Container } from '@material-ui/core'
import './NewsContent.css';
import NewsCard from '../NewsCard/NewsCard';


const NewsContent = ({loadMore,setloadMore,NewsArray,NewsResults}) => {
  return (<Container maxWidth='md'>
    <div className='Content'>
        <div className='downloadmessage'>
            <span className='downloadtext'>
                
                    For the best experience use inshorts app on your smartphone

                </span>
                <img 
                alt="app store"
                height="50%"
                src="https://assets.inshorts.com/website_assets/images/appstore.png"/>
                <img 
                  alt="play store"
                  height="50%"
                  src="https://assets.inshorts.com/website_assets/images/playstore.png"
                />
        </div>
        {
            NewsArray.map((NewsItem)=>
            <NewsCard NewsItem={NewsItem} key ={NewsItem.title} />
            )
        }
        {
          loadMore<=NewsResults &&(
            <>
            <hr/>
            <button className='loadMore' onClick={()=>setloadMore(loadMore+20)}>loadMore</button>
            </>
          )
        }

    
    </div>
  </Container>);
  
};



export default NewsContent