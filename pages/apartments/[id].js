import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getApartmentById } from '../../lib/api';
import '../../style.css';

const ApartmentDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [apartment, setApartment] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchApartment = async () => {
        const data = await getApartmentById(id);
        setApartment(data);
      };
      fetchApartment();
    }
  }, [id]);

  if (!apartment) {
    return <div>Loading...</div>;
  }

  return (
    <div className='anApartment'>
      <h1>{apartment.name}</h1>
      <h4>Description: {apartment.description}</h4>
      <h4>Price: {apartment.price}</h4>
    </div>
  );
};

export default ApartmentDetails;
