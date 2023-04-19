import { Button, Stack } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown, faComment, faCreditCard, faSave, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import postImageExample from '../components/images/example4.jpg';
import postImageExample2 from '../components/images/example3.jpg';
import './posts.css';
import { useQuery } from '@tanstack/react-query';
import { makeRequest } from '../axios';

function timeSince(date) {
    const seconds = Math.floor((new Date() - new Date(date)) / 1000);
    let interval = Math.floor(seconds / 31536000);

    if (interval >= 1) {
      return "posted " + interval + " year" + (interval > 1 ? "s" : "") + " ago";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval >= 1) {
      return "posted " + interval + " month" + (interval > 1 ? "s" : "") + " ago";
    }
    interval = Math.floor(seconds / 86400);
    if (interval >= 1) {
      return "posted " + interval + " day" + (interval > 1 ? "s" : "") + " ago";
    }
    interval = Math.floor(seconds / 3600);
    if (interval >= 1) {
      return "posted " + interval + " hour" + (interval > 1 ? "s" : "") + " ago";
    }
    interval = Math.floor(seconds / 60);
    if (interval >= 1) {
      return "posted " + interval + " minute" + (interval > 1 ? "s" : "") + " ago";
    }
    return "posted " + Math.floor(seconds) + " second" + (seconds > 1 ? "s" : "") + " ago";
  }

function goPage () {
  window.open('/post/1', "_self")
}

function Post({ post }) {
  const postCreatedAt = post.createdAt;
  return (
    <div onClick={goPage} className='post-container'>
      <h1>{post.title}</h1>
      <label>{timeSince(postCreatedAt)} by {post.username}</label>
      <div dangerouslySetInnerHTML={{ __html: post.desc }}></div>
      <div className='postcontent'>
        <div className='likecontainer'>
          <FontAwesomeIcon icon={faThumbsUp} /> <br />
          <label>{0}</label>
          <br /><FontAwesomeIcon icon={faThumbsDown} />
        </div>
        <div>
          {
          <img className='post-image' src={postImageExample} alt='example' />}
        </div>
      </div>
      <Stack className='poststats' direction='horizontal' gap='4'>
        <Button className='btn btn-dark bg-black'>
          <FontAwesomeIcon icon={faComment} /> {0} Comments
        </Button>
        <Button className='btn btn-dark bg-black'>
          <FontAwesomeIcon icon={faCreditCard} /> Augment
        </Button>
        <Button className='btn btn-dark bg-black'>
          <FontAwesomeIcon icon={faSave} /> Save
        </Button>
        <Button className='btn btn-dark bg-black'>
          <FontAwesomeIcon icon={faEllipsis} />
        </Button>
      </Stack>
    </div>
  );
}

function PostList() {
  const { isLoading, error, data } = useQuery({
    queryKey: ['posts'],
    queryFn: () =>
      makeRequest.get('/posts').then((res) => res.data)
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Something went wrong!</div>;
  }

  return (
    <div className='post-list'>
      {data.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
}

export default PostList;
