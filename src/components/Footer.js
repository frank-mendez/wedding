import React from 'react'
import Logo from '../assets/images/logo.png'
import Gcash from '../assets/images/logo1.png'
function Footer() {
	return (
		<div className='footer2'>
			<div className='oliven-narrow-content'>
				<div className='row'>
					<div className='col-md-12 text-center'>
						<h4>Gifts</h4>

						<img src={Gcash} alt='' />
						<p>
							The most important gift to us is having you share in our special day.
							<br /> But if you wish to contribute in some other way, we would love a few bucks to put in our pot for our honeymoon trip after tying
							the knot.
						</p>
						<h2>
							<a href='/'>
								<img src={Logo} alt='' />
								<span>
									Frank <small>&</small> Rhoie
								</span>
							</a>
						</h2>
						<p className='copyright'>December 8, 2023 – Cebu City, Philippines</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
