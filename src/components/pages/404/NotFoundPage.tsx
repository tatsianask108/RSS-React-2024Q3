import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div style={{ color: 'white', fontSize: 50 }}>
      Page not found
      <br />
      <Link to="/">Go Home</Link>
    </div>
  );
};

export default NotFoundPage;
