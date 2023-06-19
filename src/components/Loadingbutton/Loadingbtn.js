import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { sortJobs } from '../../redux/action';

function LoadingButton({ choose }) {
  const [isLoading, setLoading] = useState(false);
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(
       sortJobs(
        {
          choose
        }
       )
    )
    setLoading(true);

}
  useEffect(() => {
    function simulateNetworkRequest() {
      return new Promise((resolve) => setTimeout(resolve, 2000));
    }

    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);


  return (
    <Button
      variant="primary"
      disabled={isLoading}
      onClick={!isLoading ? handleClick : null}
    >
      {isLoading ? 'Sort …' : 'Click to sort'}
    </Button>
  );
}

export default LoadingButton;