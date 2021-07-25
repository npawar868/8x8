import { Carousel } from '3d-react-carousal';
// let slides = 
let slides = [
  <img styles={{ marginTop: '20px' }} height="400px" src="img/gallery/0.jpeg" alt="1" />,
  <img styles={{ marginTop: '20px' }} height="400px" src="img/gallery/1.jpeg" alt="1" />,
  <img styles={{ marginTop: '20px' }} height="400px" src="img/gallery/2.jpeg" alt="1" />,
  <img styles={{ marginTop: '20px' }} height="400px" src="img/gallery/3.jpeg" alt="1" />,
  <img styles={{ marginTop: '20px' }} height="400px" src="img/gallery/4.jpeg" alt="1" />,
  <img styles={{ marginTop: '20px' }} height="400px" src="img/gallery/5.jpeg" alt="1" />,
  <img styles={{ marginTop: '20px' }} height="400px" src="img/gallery/6.jpeg" alt="1" />,
  <img styles={{ marginTop: '20px' }} height="400px" src="img/gallery/7.jpeg" alt="1" />,
  <img styles={{ marginTop: '20px' }} height="400px" src="img/gallery/8.jpeg" alt="1" />,
  <img styles={{ marginTop: '20px' }} height="400px" src="img/gallery/10.jpeg" alt="1" />,
  <img styles={{ marginTop: '20px' }} height="400px" src="img/gallery/11.jpeg" alt="1" />,
  <img styles={{ marginTop: '20px' }} height="400px" src="img/gallery/12.jpeg" alt="1" />,
  <img styles={{ marginTop: '20px' }} height="400px" src="img/gallery/13.jpeg" alt="1" />,
  <img styles={{ marginTop: '20px' }} height="400px" src="img/gallery/14.jpeg" alt="1" />,
  <img styles={{ marginTop: '20px' }} height="400px" src="img/gallery/15.jpeg" alt="1" />,
  <img styles={{ marginTop: '20px' }} height="400px" src="img/gallery/16.jpeg" alt="1" />,
  <img styles={{ marginTop: '20px' }} height="400px" src="img/gallery/17.jpeg" alt="1" />,
  <img styles={{ marginTop: '20px' }} height="400px" src="img/gallery/18.jpeg" alt="1" />,
  <img styles={{ marginTop: '20px' }} height="400px" src="img/gallery/19.jpeg" alt="1" />,
  <img styles={{ marginTop: '20px' }} height="400px" src="img/gallery/20.jpeg" alt="1" />,
  <img styles={{ marginTop: '20px' }} height="400px" src="img/gallery/21.jpeg" alt="1" />,
  <img styles={{ marginTop: '20px' }} height="400px" src="img/gallery/22.jpeg" alt="1" />,
  <img styles={{ marginTop: '20px' }} height="400px" src="img/gallery/23.jpeg" alt="1" />,
  <img styles={{ marginTop: '20px' }} height="400px" src="img/gallery/24.jpeg" alt="1" />,
  <img styles={{ marginTop: '20px' }} height="400px" src="img/gallery/25.jpeg" alt="1" />,
  <img styles={{ marginTop: '20px' }} height="400px" src="img/gallery/26.jpeg" alt="1" />,
  <img styles={{ marginTop: '20px' }} height="400px" src="img/gallery/27.jpeg" alt="1" />,
  <img styles={{ marginTop: '20px' }} height="400px" src="img/gallery/28.jpeg" alt="1" />,
  <img styles={{ marginTop: '20px' }} height="400px" src="img/gallery/29.jpeg" alt="1" />,
  <img styles={{ marginTop: '20px' }} height="400px" src="img/gallery/30.jpeg" alt="1" />,
  <img styles={{ marginTop: '20px' }} height="400px" src="img/gallery/31.jpeg" alt="1" />,
  <img styles={{ marginTop: '20px' }} height="400px" src="img/gallery/32.jpeg" alt="1" />,
  <img styles={{ marginTop: '20px' }} height="400px" src="img/gallery/33.jpeg" alt="1" />,
  <img styles={{ marginTop: '20px' }} height="400px" src="img/gallery/34.jpeg" alt="1" />,
  <img styles={{ marginTop: '20px' }} height="400px" src="img/gallery/35.jpeg" alt="1" />,
  <img styles={{ marginTop: '20px' }} height="400px" src="img/gallery/36.jpeg" alt="1" />,
  <img styles={{ marginTop: '20px' }} height="400px" src="img/gallery/37.jpeg" alt="1" />,
  <img styles={{ marginTop: '20px' }} height="400px" src="img/gallery/38.jpeg" alt="1" />,
  <img styles={{ marginTop: '20px' }} height="400px" src="img/gallery/39.jpeg" alt="1" />,
  <img styles={{ marginTop: '20px' }} height="400px" src="img/gallery/40.jpeg" alt="1" />,
  <img styles={{ marginTop: '20px' }} height="400px" src="img/gallery/41.jpeg" alt="1" />,
  <img styles={{ marginTop: '20px' }} height="400px" src="img/gallery/42.jpeg" alt="1" />,
  <img styles={{ marginTop: '20px' }} height="400px" src="img/gallery/43.jpeg" alt="1" />,
]
export const Gallery = (props) => {
  return (
    <div id='gallery'>
      <Carousel styles={{ marginTop: '20px' }} slides={slides} autoplay={true} interval={7000} />
    </div>

    // <div id='portfolio' className='text-center'>
    //   <div className='container'>
    //     <div className='section-title'>
    //       <h2>Gallery</h2>
    //       <p>
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
    //         dapibus leonec.
    //       </p>
    //     </div>
    //     <div className='row'>
    //       <div className='portfolio-items'>
    //         <div className='col-sm-6 col-md-4 col-lg-4'>
    //           <div className='portfolio-item'>
    //             <div className='hover-bg'>
    //               {' '}
    //               <a
    //                 href='img/portfolio/01-large.jpg'
    //                 title='Project Title'
    //                 data-lightbox-gallery='gallery1'
    //               >
    //                 <div className='hover-text'>
    //                   <h4>Lorem Ipsum</h4>
    //                 </div>
    //                 <img
    //                   src='img/portfolio/01-small.jpg'
    //                   className='img-responsive'
    //                   alt='Project Title'
    //                 />{' '}
    //               </a>{' '}
    //             </div>
    //           </div>
    //         </div>
    //         <div className='col-sm-6 col-md-4 col-lg-4'>
    //           <div className='portfolio-item'>
    //             <div className='hover-bg'>
    //               {' '}
    //               <a
    //                 href='img/portfolio/02-large.jpg'
    //                 title='Project Title'
    //                 data-lightbox-gallery='gallery1'
    //               >
    //                 <div className='hover-text'>
    //                   <h4>Adipiscing Elit</h4>
    //                 </div>
    //                 <img
    //                   src='img/portfolio/02-small.jpg'
    //                   className='img-responsive'
    //                   alt='Project Title'
    //                 />{' '}
    //               </a>{' '}
    //             </div>
    //           </div>
    //         </div>
    //         <div className='col-sm-6 col-md-4 col-lg-4'>
    //           <div className='portfolio-item'>
    //             <div className='hover-bg'>
    //               {' '}
    //               <a
    //                 href='img/portfolio/03-large.jpg'
    //                 title='Project Title'
    //                 data-lightbox-gallery='gallery1'
    //               >
    //                 <div className='hover-text'>
    //                   <h4>Lorem Ipsum</h4>
    //                 </div>
    //                 <img
    //                   src='img/portfolio/03-small.jpg'
    //                   className='img-responsive'
    //                   alt='Project Title'
    //                 />{' '}
    //               </a>{' '}
    //             </div>
    //           </div>
    //         </div>
    //         <div className='col-sm-6 col-md-4 col-lg-4'>
    //           <div className='portfolio-item'>
    //             <div className='hover-bg'>
    //               {' '}
    //               <a
    //                 href='img/portfolio/04-large.jpg'
    //                 title='Project Title'
    //                 data-lightbox-gallery='gallery1'
    //               >
    //                 <div className='hover-text'>
    //                   <h4>Lorem Ipsum</h4>
    //                 </div>
    //                 <img
    //                   src='img/portfolio/04-small.jpg'
    //                   className='img-responsive'
    //                   alt='Project Title'
    //                 />{' '}
    //               </a>{' '}
    //             </div>
    //           </div>
    //         </div>
    //         <div className='col-sm-6 col-md-4 col-lg-4'>
    //           <div className='portfolio-item'>
    //             <div className='hover-bg'>
    //               {' '}
    //               <a
    //                 href='img/portfolio/05-large.jpg'
    //                 title='Project Title'
    //                 data-lightbox-gallery='gallery1'
    //               >
    //                 <div className='hover-text'>
    //                   <h4>Adipiscing Elit</h4>
    //                 </div>
    //                 <img
    //                   src='img/portfolio/05-small.jpg'
    //                   className='img-responsive'
    //                   alt='Project Title'
    //                 />{' '}
    //               </a>{' '}
    //             </div>
    //           </div>
    //         </div>
    //         <div className='col-sm-6 col-md-4 col-lg-4'>
    //           <div className='portfolio-item'>
    //             <div className='hover-bg'>
    //               {' '}
    //               <a
    //                 href='img/portfolio/06-large.jpg'
    //                 title='Project Title'
    //                 data-lightbox-gallery='gallery1'
    //               >
    //                 <div className='hover-text'>
    //                   <h4>Dolor Sit</h4>
    //                 </div>
    //                 <img
    //                   src='img/portfolio/06-small.jpg'
    //                   className='img-responsive'
    //                   alt='Project Title'
    //                 />{' '}
    //               </a>{' '}
    //             </div>
    //           </div>
    //         </div>
    //         <div className='col-sm-6 col-md-4 col-lg-4'>
    //           <div className='portfolio-item'>
    //             <div className='hover-bg'>
    //               {' '}
    //               <a
    //                 href='img/portfolio/07-large.jpg'
    //                 title='Project Title'
    //                 data-lightbox-gallery='gallery1'
    //               >
    //                 <div className='hover-text'>
    //                   <h4>Dolor Sit</h4>
    //                 </div>
    //                 <img
    //                   src='img/portfolio/07-small.jpg'
    //                   className='img-responsive'
    //                   alt='Project Title'
    //                 />{' '}
    //               </a>{' '}
    //             </div>
    //           </div>
    //         </div>
    //         <div className='col-sm-6 col-md-4 col-lg-4'>
    //           <div className='portfolio-item'>
    //             <div className='hover-bg'>
    //               {' '}
    //               <a
    //                 href='img/portfolio/08-large.jpg'
    //                 title='Project Title'
    //                 data-lightbox-gallery='gallery1'
    //               >
    //                 <div className='hover-text'>
    //                   <h4>Lorem Ipsum</h4>
    //                 </div>
    //                 <img
    //                   src='img/portfolio/08-small.jpg'
    //                   className='img-responsive'
    //                   alt='Project Title'
    //                 />{' '}
    //               </a>{' '}
    //             </div>
    //           </div>
    //         </div>
    //         <div className='col-sm-6 col-md-4 col-lg-4'>
    //           <div className='portfolio-item'>
    //             <div className='hover-bg'>
    //               {' '}
    //               <a
    //                 href='img/portfolio/09-large.jpg'
    //                 title='Project Title'
    //                 data-lightbox-gallery='gallery1'
    //               >
    //                 <div className='hover-text'>
    //                   <h4>Adipiscing Elit</h4>
    //                 </div>
    //                 <img
    //                   src='img/portfolio/09-small.jpg'
    //                   className='img-responsive'
    //                   alt='Project Title'
    //                 />{' '}
    //               </a>{' '}
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}
