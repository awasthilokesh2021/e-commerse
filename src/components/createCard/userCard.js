import React from 'react'

const userCard = () => {

    const [formData, setFormData] = useState({
        title: '',
        image: '',
        price: 0,
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Fetch POST request to send form data to server
        try {
          const response = await fetch('/generate-card', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          const data = await response.json();
          console.log(data); // Handle the response data as needed
        } catch (error) {
          console.error('Error:', error);
        }
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Product Title"
        value={formData.title}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="image"
        placeholder="Image URL"
        value={formData.image}
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="price"
        placeholder="Price"
        value={formData.price}
        onChange={handleInputChange}
      />
      <button type="submit" style={{ backgroundColor: 'blue', padding: '2px' }}>
        Generate Card
      </button>
    </form>
    </div>
  )
}

export default userCard