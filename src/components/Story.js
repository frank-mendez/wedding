import React from 'react'
import storyImage from '../assets/images/story1.jpg'
function Story() {
	return (
		<div id='story' className='story section-padding'>
			<div className='container'>
				<div className='row'>
					<div className='col-md-5 mb-30'>
						<div className='story-img animate-box'>
							<div className='img'>
								{' '}
								<img src={storyImage} className='img-fluid' alt='' />{' '}
							</div>
							<div className='story-img-2 story-wedding'></div>
						</div>
					</div>
					<div className='col-md-7 animate-box'>
						<h4 className='oliven-story-subtitle'>Our love.</h4>
						<h3 className='oliven-story-title'>Our Story</h3>
						<p>Saan aabot ang 200 pesos mo?</p>
						<p>It was Ash Wednesday 2014 at St. Michael's Cathedral.</p>
						<p>
							A memorable day for Frank and Rhoie, their first incidental date after Frank’s several attempts to ask her out. But God made other plans
							and they met at the church unplanned on an afternoon mass. Frank grabbed the opportunity to invite Rhoie once again to dine out. At
							first, Rhoie did not see Frank romantically and had prejudices towards him. But everything changed when Frank sincerely expressed his
							worries:
						</p>
						<p>“Ganahan kayko magkig dinner nimo pero 200 ra ako kwarta.”</p>
						<p>
							Those 200 pesos changed the whole narrative. Rhoie saw a more human and humble person than she assumed. With such honesty, Rhoie was
							able to open herself to a love that lasted this long, and this strong with the grace of the Lord. Funny as it may sound, God literally
							set them up to meet.
						</p>
						<p>
							Fast forward into the future, Frank and Rhoie's relationship bloomed. They got to know each other better, supported each other's
							ambitions, and flourished as professionals. They put God in the center of their relationship, and as they got closer to God, they got
							even closer to each other.
						</p>
						<p>
							Years of ups and downs passed. On July 9, 2022, Frank got down on one knee and asked for Rhoie's hand in marriage. Rhoie said, "Yes,"
							and now, they are moving forward to a new chapter of their love story.
						</p>
						<h4>It was the most valuable 200 pesos for them.</h4>
						<p>God, as their matchmaker, is able to multiply that 200 pesos into a lifetime of love.</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Story
