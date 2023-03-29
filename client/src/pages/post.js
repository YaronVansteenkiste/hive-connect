import { Button, Stack } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown, faComment, faCreditCard, faSave, faEllipsis } from '@fortawesome/free-solid-svg-icons';

import postImageExample from '../components/images/example4.jpg'
import postImageExample2 from '../components/images/example3.jpg'

import './post.css'


function Post() {

  const posttitle = 'Test post'
  const posttitle2 = 'Test post2'

  return (
    <div className='post-list'>
      <div className="post-container">
        <h3>{posttitle}</h3>
        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h6>
        <div className='postcontent'>
          <div className='likecontainer'>
            <FontAwesomeIcon icon={faThumbsUp} /> <br></br>
            <label>
              1539
            </label>
            <br></br><FontAwesomeIcon icon={faThumbsDown} />
          </div>
          <div>
            <img className='post-image' src={postImageExample} alt="example" />
          </div>
        </div>

        <Stack className='poststats' direction='horizontal' gap='4'>
          <Button className="btn btn-dark bg-black"><FontAwesomeIcon icon={faComment} /> 123 Comments</Button>
          <Button className="btn btn-dark bg-black"><FontAwesomeIcon icon={faCreditCard} /> Augment</Button>
          <Button className="btn btn-dark bg-black"><FontAwesomeIcon icon={faSave} /> Save</Button>
          <Button className="btn btn-dark bg-black"><FontAwesomeIcon icon={faEllipsis} /></Button>
        </Stack>
      </div>
      <div className="post-container">
        <h3>{posttitle2}</h3>
        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h6>
        <div className='postcontent'>
          <div className='likecontainer'>
            <FontAwesomeIcon icon={faThumbsUp} /> <br></br>
            <label>
              1539
            </label>
            <br></br><FontAwesomeIcon icon={faThumbsDown} />
          </div>
          <div>
            <img className='post-image' src={postImageExample2} alt="example" />
          </div>
        </div>

        <Stack className='poststats' direction='horizontal' gap='4'>
          <Button className="btn btn-dark bg-black"><FontAwesomeIcon icon={faComment} /> 123 Comments</Button>
          <Button className="btn btn-dark bg-black"><FontAwesomeIcon icon={faCreditCard} /> Augment</Button>
          <Button className="btn btn-dark bg-black"><FontAwesomeIcon icon={faSave} /> Save</Button>
          <Button className="btn btn-dark bg-black"><FontAwesomeIcon icon={faEllipsis} /></Button>
        </Stack>
      </div>
    </div>




  )
}

export default Post;