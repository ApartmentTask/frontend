import { useState } from 'react';
import { useRouter } from 'next/router';
import { postApartment } from '../lib/api';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';


const AddApartmentForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await postApartment({ name, description, price });
      router.push('/apartments');
      router.reload();
      onApartmentAdded();
    } catch (error) {
      console.error('Error adding apartment:', error);
    }
  };

  return (
    <div className='addApartmentContainer'>
    <div className='addApartment'>
        <h3>Add Apartment</h3>
    <form onSubmit={handleSubmit} className="mt-4">
    <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} />
    </div>
    <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea className="form-control" id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
    </div>
    <div className="form-group">
        <label htmlFor="price">Price</label>
        <input type="number" className="form-control" id="price" value={price} onChange={(e) => setPrice(e.target.value)} />
    </div>
    <br />
    <button type="submit" className="btn btn-primary">Add Apartment</button>
    </form>
    </div>
    </div>
  );
};

export default AddApartmentForm;
