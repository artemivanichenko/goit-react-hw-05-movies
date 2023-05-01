const { Link } = require('react-router-dom');

export const NotFound = () => {
  return (
    <div>
      Page 404, not found
      <Link to="/">Home</Link>
    </div>
  );
};
