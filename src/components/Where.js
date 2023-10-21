import React from 'react'
import where1 from '../assets/images/where-4.jpg'
import where2 from '../assets/images/where-5.jpg'
import where3 from '../assets/images/where-6.jpg'
function Where() {
	return (
		<div id='whenwhere' className='whenwhere section-padding bg-pink'>
			<div className='container'>
				<div className='row'>
					<div className='col-md-12 mb-30'>
						{' '}
						<span className='oliven-title-meta'>Questions</span>
						<h2 className='oliven-title'>When & Where</h2>{' '}
					</div>
				</div>
				<div className='row'>
					<div className='item col-12 col-md-4'>
						<div className='whenwhere-img'>
							{' '}
							<img src={where1} alt='' />
						</div>
						<div className='content'>
							<h5>Church Wedding Ceremony</h5>
							<p>
								<i className='ti-location-pin'></i> Chapel of San Pedro Calungsod SM Seaside Complex, Cebu City, Cebu
							</p>
							<p>
								<i className='ti-time'></i> <span>10:00am – 11:00pm</span>
							</p>
						</div>
					</div>
					<div className='item col-12 col-md-4'>
						<div className='whenwhere-img'>
							{' '}
							<img src={where2} alt='' />
						</div>
						<div className='content'>
							<h5>Reception Wedding Party</h5>
							<p>
								<i className='ti-location-pin'></i> Ballroom 2, Vivace Events Center by Ocean Park, SM Seaside Complex, South Road Properties,
								Mambaling, Cebu City
							</p>
							<p>
								<i className='ti-time'></i> <span>12:00pm</span>
							</p>
						</div>
					</div>
					<div className='item col-12 col-md-4'>
						<div className='whenwhere-img'>
							{' '}
							<img src={where3} alt='' />
						</div>
						<div className='content'>
							<h5>Accomodations</h5>
							<p>
								<i className='ti-direction-alt'></i> Hotel and distance from wedding party restaurant:
							</p>
							<p>
								<i className='ti-direction'></i>{' '}
								<a href='https://www.google.com/travel/search?q=hotel%20near%20sm%20seaside%20cebu&ts=CAESCgoCCAMKAggDEAAaHBIaEhQKBwjnDxAKGB4SBwjnDxAKGB8YATICEAAqBwoFOgNQSFA&ved=0CAAQ5JsGahgKEwiAzKn2qIaCAxUAAAAAHQAAAAAQ_AI&ictx=3&hl=en-PH&gl=ph&g2lb=2502548%2C2503771%2C2503781%2C4258168%2C4270442%2C4284970%2C4291517%2C4597339%2C4757164%2C4814050%2C4874190%2C4893075%2C4924070%2C4965990%2C4990494%2C10207532%2C72298667%2C72302247%2C72317059%2C72370226%2C72378200%2C72379816%2C72390435%2C72393625&ap=MAA&qs=CAAgACgB'>
									Hotels near SM Seaside Cebu
								</a>
								(7 min)
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Where
