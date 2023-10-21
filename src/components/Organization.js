import React from 'react'

function Organization() {
	return (
		<div id='organization' className='organization section-padding bg-pink'>
			<div className='container'>
				<div className='row'>
					<div className='col-md-12 mb-30'>
						<span className='oliven-title-meta'>Wedding</span>
						<h2 className='oliven-title'>Organization</h2>
					</div>
				</div>
				<div className='row bord-box bg-img' data-background='images/slider.jpg'>
					<div className='col-md-3 item-box'>
						<h2 className='custom-font numb'>01</h2>
						<h6 className='title'>Church Ceremony</h6>
						<p>Presiding Priest: Rev Fr. Carmelo V. Pocdol Chapel of San Pedro Calungsod SM Seaside Complex, Cebu City, Cebu</p>
					</div>
					<div className='col-md-3 item-box'>
						<h2 className='custom-font numb'>02</h2>
						<h6 className='title'>Reception</h6>
						<p> Ballroom 2, Vivace Events Center by Ocean Park, SM Seaside Complex, South Road Properties, Mambaling, Cebu City</p>
					</div>
					<div className='col-md-3 item-box'>
						<h2 className='custom-font numb'>03</h2>
						<h6 className='title'>Program</h6>
						<p>Wedding Coordinator: Carlo Abaquita Weddings. Host: Lore Santillan. Photo: Aljun photography, Video: Life in motion Cebu </p>
					</div>
					<div className='col-md-3 item-box'>
						<h2 className='custom-font numb'>04</h2>
						<h6 className='title'>After Party</h6>
						<p>After party venue will be announced during the reception. DJ and drinks will be provided once the program proper has ended</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Organization
