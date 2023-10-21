import React, { useState } from 'react'
import axios from 'axios'

function RSVP() {
	const [name, setName] = useState('')
	const [message, setMessage] = useState('')
	const [sent, setSent] = useState(false)

	const handleSubmit = async (e) => {
		e.preventDefault()
		axios({
			method: 'post',
			url: 'https://v1.nocodeapi.com/frankmendez/google_sheets/HHIVFSebGpfXymOQ',
			params: { tabId: 'ConfirmedRSVP' },
			data: [[name, message]],
		})
			.then(function (response) {
				// handle success
				console.log('response.data', response.data)
				setSent(true)
			})
			.catch(function (error) {
				// handle error
				console.log(error)
			})
	}

	return (
		<div id='rsvp' className='section-padding bg-img bg-fixed'>
			<div className='container'>
				<div className='row justify-content-center'>
					<div className='col-md-6 bg-white p-40'>
						{' '}
						<span className='oliven-title-meta text-center'>Will you attend?</span>
						<h2 className='oliven-title text-center'>R.S.V.P</h2>
						<br />
						<form onSubmit={handleSubmit} className='row'>
							{sent ? (
								<>
									<div className='col-md-12'>
										<div className='form-group'>
											<h3>Thank you for your RSVP!</h3>
										</div>
									</div>
								</>
							) : (
								<>
									<div className='col-md-12'>
										<div className='form-group'>
											<input
												type='text'
												value={name}
												onChange={(e) => setName(e.target.value)}
												className='form-control'
												placeholder='Name'
												required
											/>{' '}
										</div>
									</div>
									<div className='col-md-12'>
										<div className='form-group'>
											<textarea
												value={message}
												onChange={(e) => setMessage(e.target.value)}
												name='message'
												id='message'
												cols='30'
												rows='7'
												className='form-control'
												placeholder='Message'
											></textarea>
										</div>
									</div>
									<div className='col-md-12'>
										<div className='form-group'>
											<input type='submit' className='btn buttono' value='SEND' />{' '}
										</div>
									</div>
								</>
							)}
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default RSVP
