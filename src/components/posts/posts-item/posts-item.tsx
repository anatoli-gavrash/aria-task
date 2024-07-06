import { Post } from '../../../types';
import styles from './posts-item.module.scss';

interface PostsItemProps {
  item: Post
}

const PostsItem: React.FC<PostsItemProps> = (props) => {
  const {avatarUrl, name, nickname, message} = props.item;

  return (
    <li className={styles.posts_item}>
      <div className={styles.posts_item__user}>
        <div className={styles.posts_item__user_avatar}>
          <img className={styles.posts_item__user_avatar_img} src={avatarUrl} alt={name}/>
        </div>
        <div className={styles.posts_item__user_data}>
          <p className={styles.posts_item__user_data_name}>{name}</p>
          <p className={styles.posts_item__user_data_nickname}>{nickname}</p>
        </div>
      </div>
      <p className={styles.posts_item__message}>{message}</p>
    </li>
  );
};

export default PostsItem;
