import { Link } from 'react-router-dom';
import { useNavigateToTop } from '@hooks/useNavigateToTop';

/** Link to the top of a page so that the scroll position isn't persisted between pages. Use this instead of React's build-in @see {@link Link}. */
export const LinkToTop = ({ to, className, children }) => {
  const navigateToTop = useNavigateToTop();

  const navigateAndReset = (event) => {
    event.preventDefault();
    navigateToTop(to);
  };

  return (
    <Link className={className} onClick={navigateAndReset} to={to}>
      {children}
    </Link>
  );
};
