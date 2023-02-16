import { useStoreState } from 'easy-peasy';

const Footer = () => {
  const today = new Date();
  const postCount = useStoreState((state) => state.postCount);

  return (
    
    <footer className='Footer'>
      <h1>{postCount} Blog Posts</h1>
          <p>Copyright &copy; {today.getFullYear()}</p>
      </footer>
  )
}

export default Footer
