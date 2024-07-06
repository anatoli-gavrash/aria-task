import { POSTS } from '../../constants';
import PostsItem from './posts-item';
import styles from './posts.module.scss';

const Posts: React.FC = () => {
  return (
    <ul className={styles.posts}>
      {POSTS.map((post, index) => {
        return <PostsItem key={`post-item-${index}`} item={post}/>
      })}
    </ul>
  );
};

export default Posts;
