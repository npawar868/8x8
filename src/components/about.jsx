export const About = (props) => {
  return (
    <div id='about'>
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12 col-md-5'>
            {' '}
            <img src='img/0.jpg' className='img-responsive' alt='' />{' '}
          </div>
          <div className='col-xs-12 col-md-7'>
            <div className='about-text'>
              <h2>About Us</h2>
              <div>{props.data
                ? props.data.paragraph.map((p, i) => (
                  <p style={{margin:'10px'}} key={`${p}-${i}`}>{p}</p>
                ))
                : 'loading'}</div>
              <h3>Why Choose Us?</h3>
              <div className='list-style'>
                <div className='col-lg-6 col-sm-6 col-xs-12'>
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                        <li key={`${d}-${i}`}>{d}</li>
                      ))
                      : 'loading'}
                  </ul>
                </div>
                <div className='col-lg-6 col-sm-6 col-xs-12'>
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                        <li key={`${d}-${i}`}> {d}</li>
                      ))
                      : 'loading'}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
