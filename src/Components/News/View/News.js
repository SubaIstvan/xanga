import React from 'react';
import Layout from '../../Layout/View/Layout';
import './News.css';
import '../../../assets/fb/flaticon.css';


const news = () => {
    return(
        <Layout>
            <div className='full_news'>
            <div className='container'>
                <div className='row no-gutters'>
                    <div className='col'>
                        <div className='news'>
                            <div className='news_titles'>
                                <p id='title1'>NEWS</p>
                                <p id='title2'>Follow us on Facebook</p>
                            </div>
                            <div className='news_text'>
                                <p id='loremipsum'>
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                                    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit
                                </p>
                                <div className='fb_elements'>
                                    <i className='flaticon-facebook' />
                                <p id='fb'>
                                    https://www.facebook.com/XangaInvestmentDevelopmentGroup
                                </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div className="fb-page" data-href="https://www.facebook.com/XangaInvestmentDevelopmentGroup"
                             data-tabs="timeline" data-width="" data-height="" data-small-header="false"
                             data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true">
                            <blockquote cite="https://www.facebook.com/XangaInvestmentDevelopmentGroup"
                                        className="fb-xfbml-parse-ignore"><a
                                href="https://www.facebook.com/XangaInvestmentDevelopmentGroup">Xanga
                                Investment &amp; Development Group</a></blockquote>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </Layout>
    );
}
export default news;