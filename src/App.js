import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [salesBoy, setSalesBoy] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [items, setItems] = useState([
    { name: '', quantity: '', price: '', gst: '' }
  ]);

  const handleItemChange = (index, field, value) => {
    const updatedItems = [...items];
    updatedItems[index][field] = value;
    setItems(updatedItems);
  };

  const addItem = () => {
    setItems([...items, { name: '', quantity: '', price: '', gst: '' }]);
  };

  const formatPhoneNumber = (phone) => {
    const trimmed = phone.trim();
    return trimmed.startsWith('+') ? trimmed : '+91' + trimmed;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const orderData = {
      salesBoy,
      customer: {
        name: customerName,
        phone: formatPhoneNumber(customerPhone),
        address: customerAddress,
        email: customerEmail
      },
      orderItems: items.map(item => ({
        name: item.name,
        quantity: parseInt(item.quantity),
        price: parseFloat(item.price),
        gst: parseFloat(item.gst)
      })),
      notes
    };

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/submit-order`, orderData);
      alert('Order submitted successfully!');
      console.log(response.data);
    } catch (error) {
      console.error('Error submitting order:', error);
      alert('Failed to submit order.');
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Sales Order Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Sales Boy Name:</label><br />
          <input value={salesBoy} onChange={(e) => setSalesBoy(e.target.value)} required />
        </div>

        <div>
          <label>Customer Name:</label><br />
          <input value={customerName} onChange={(e) => setCustomerName(e.target.value)} required />
        </div>

        <div>
          <label>Customer Phone:</label><br />
          <input
            value={customerPhone}
            onChange={(e) => setCustomerPhone(e.target.value)}
            required
            placeholder="e.g. 9876543210"
          />
        </div>

        <div>
          <label>Customer Address:</label><br />
          <input
            value={customerAddress}
            onChange={(e) => setCustomerAddress(e.target.value)}
            required
            placeholder="e.g. Mumbai, MH"
          />
        </div>

        <div>
          <label>Customer Email (optional):</label><br />
          <input
            type="email"
            value={customerEmail}
            onChange={(e) => setCustomerEmail(e.target.value)}
            placeholder="e.g. customer@example.com"
          />
        </div>

        <h3>Items</h3>
        {items.map((item, index) => (
          <div key={index} style={{ marginBottom: 10 }}>
            <input
              placeholder="Item Name"
              value={item.name}
              onChange={(e) => handleItemChange(index, 'name', e.target.value)}
              required
            />
            <input
              placeholder="Quantity"
              type="number"
              value={item.quantity}
              onChange={(e) => handleItemChange(index, 'quantity', e.target.value)}
              required
              style={{ marginLeft: 5 }}
            />
            <input
              placeholder="Price"
              type="number"
              value={item.price}
              onChange={(e) => handleItemChange(index, 'price', e.target.value)}
              required
              style={{ marginLeft: 5 }}
            />
            <input
              placeholder="GST %"
              type="number"
              value={item.gst}
              onChange={(e) => handleItemChange(index, 'gst', e.target.value)}
              required
              style={{ marginLeft: 5 }}
            />
          </div>
        ))}

        <button type="button" onClick={addItem}>Add Item</button><br /><br />

        <div>
          <label>Notes (optional):</label><br />
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={3}
            style={{ width: '100%' }}
            placeholder="Any special instructions or notes"
          />
        </div><br />

        <button type="submit">Submit Order</button>
      </form>
    </div>
  );
}

export default App;
