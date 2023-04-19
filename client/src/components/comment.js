import React from 'react'
import exampleImage from '../components/images/example1.jpg'


function Comment() {
    return (
        <div>
            <div className='comment-container'>
                <div className='comment'>
                    <div className='createprofileicon'>
                        <img src={exampleImage} alt="Profile Icon" className="neon-icon" />
                    </div>
                    <div className='commentinfo'>
                        <h6>Yaron</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comment
