import { useEffect, useState } from 'react';
import { getApartments } from '../../lib/api';
import AddApartmentForm from '../../components/AddApartmentForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style.css';

const Apartments = () => {
  const [apartments, setApartments] = useState([]);

  const handleApartmentAdded = () => {
    router.reload();
  };

  useEffect(() => {
    const fetchApartments = async () => {
      const data = await getApartments();
      setApartments(data);
    };
    fetchApartments();
  }, []);

  return (
    <div className='home-page'>
    <div className="container mt-4">
    <h1 className="text-center mb-4">Apartment Listing</h1>
    <div className="row">
      <div className="col-md-6">
        <h2>Listed Apartments</h2>
        <div className="apartment-list">
          {apartments.map((apartment) => (
            <div key={apartment._id} className="apartment-item">
              <h4><a href={`/apartments/${apartment._id}`}>{apartment.name}</a></h4>
              <p>Price: ${apartment.price}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="col-md-6">
          <AddApartmentForm />
        </div>
      </div>
    </div>
    </div>
    );
};

export default Apartments;
