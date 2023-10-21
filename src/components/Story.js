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
						<p>
							In the last months of Frank's 6 years tenure in the university he saw an active 3rd year pyschology student named Rhoie. He tried to
							invite her to church but she was not interested. But God made other plans and they met at the church unplanned. They decided to have
							dinner that night. They talked about their lives and their dreams. They talked about their families and their friends. They talked about
							their faith and their fears.
						</p>
						<p>As they became professionals, their goals and aspirations are always aligned to each other. To always put God and family first.</p>
						<p>
							Through the years of up and downs, they always find a way to make things work. They always find a way to make each other happy. They
							always find a way to make each other feel loved. They realized that their relationship is protected by God's grace and love.
						</p>
						<h4>Finally Frank proposed on July 9th, 2022 and Rhoie Said Yes!</h4>
						<p>If it is made by God then it is bound for God</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Story
