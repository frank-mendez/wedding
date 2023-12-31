import React from 'react'
import Bride from '../assets/images/bride.png'
import Groom from '../assets/images/groom1.jpg'
function Bridegroom() {
	return (
		<div id='couple' className='bridegroom clear section-padding bg-pink'>
			<div className='container'>
				<div className='row mb-60'>
					<div className='col-md-6'>
						<div className='item toright mb-30 animate-box' data-animate-effect='fadeInLeft'>
							<div className='img'>
								{' '}
								<img src={Bride} alt='' />{' '}
							</div>
							<div className='info valign'>
								<div className='full-width'>
									<h6>
										Rhoie Jhannarie Omlero <i className='ti-heart'></i>
									</h6>{' '}
									<span>The Bride</span>
									<p>Rhoie is an extroverted person who loves to adopt lonely and sad introverts</p>
									<div className='social'>
										<div className='full-width'>
											<a href='#0' className='icon'>
												{' '}
												<i className='ti-facebook'></i>{' '}
											</a>
											<a href='#0' className='icon'>
												{' '}
												<i className='ti-twitter'></i>{' '}
											</a>
											<a href='#0' className='icon'>
												{' '}
												<i className='ti-instagram'></i>{' '}
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='col-md-6'>
						<div className='item mb-30 animate-box' data-animate-effect='fadeInRight'>
							<div className='img'>
								{' '}
								<img src={Groom} alt='' />{' '}
							</div>
							<div className='info valign'>
								<div className='full-width'>
									<h6>
										Frank Mendez <i className='ti-heart'></i>
									</h6>{' '}
									<span>The Groom</span>
									<p>Frank is THE introvert</p>
									<div className='social'>
										<div className='full-width'>
											<a href='#0' className='icon'>
												{' '}
												<i className='ti-facebook'></i>{' '}
											</a>
											<a href='#0' className='icon'>
												{' '}
												<i className='ti-twitter'></i>{' '}
											</a>
											<a href='#0' className='icon'>
												{' '}
												<i className='ti-instagram'></i>{' '}
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='row'>
					<div className='col-md-12 text-center animate-box' data-animate-effect='fadeInUp'>
						<h3 className='oliven-couple-title'>We are getting married!</h3>
						<h4 className='oliven-couple-subtitle'>December 8, 2023 — Cebu City, Philippines</h4>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Bridegroom
