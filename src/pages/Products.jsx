import { Link } from 'react-router-dom';

export const Products = () => (
  <div> Products !!!
    {['pr-1', 'pr-2', 'pr-3', 'pr-4', 'pr-5', 'pr-6'].map(pr => (
      <Link key={pr} to={`${pr}`}>
        {pr}
      </Link>
    ))}
  </div>
);
