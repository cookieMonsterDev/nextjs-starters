import styles from "../page.module.css";

interface PostProps {
  params: {
    postId: string;
  };
}

const Post = async ({ params }: PostProps) => {

  return (
    <main className={styles.main}> 
      <div>{params.postId}</div>
    </main>
  );
};

export default Post;
