import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div style={{ backgroundColor: 'white' }}>
      Page not found
      <br />
      <Link to="/">Go Home</Link>
    </div>
  );
};

export default NotFoundPage;
