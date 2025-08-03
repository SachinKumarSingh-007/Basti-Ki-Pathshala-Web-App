
import React, { useState } from 'react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Input from '../components/ui/Input';

const DonatePage: React.FC = () => {
  const [amount, setAmount] = useState(25);
  const [customAmount, setCustomAmount] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleAmountClick = (value: number) => {
    setAmount(value);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valStr = e.target.value;
    setCustomAmount(valStr);
    const val = parseInt(valStr, 10);
    if (!isNaN(val) && val > 0) {
      setAmount(val);
    } else if (valStr === '') {
        setAmount(0);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (amount <= 0) return;
    setIsSuccess(true);
  };
  
  if (isSuccess) {
    return (
        <Card className="max-w-xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-primary-dark mb-4">Thank You for Your Generosity!</h2>
            <p className="text-neutral-700">Your support helps us continue our mission of providing education to children in need. Every contribution, big or small, makes a huge impact.</p>
            <Button onClick={() => { setIsSuccess(false); setAmount(25); }} className="mt-6">Make another donation</Button>
        </Card>
    );
  }

  return (
    <Card className="max-w-xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-primary-dark mb-2">Support Our Cause</h2>
      <p className="text-center text-neutral-600 mb-8">Your donation empowers children with the gift of education and a brighter future.</p>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
            <label className="block text-sm font-medium text-neutral-700 mb-2">Select an amount</label>
            <div className="grid grid-cols-3 gap-4">
            {[10, 25, 50].map(val => (
                <button key={val} type="button" onClick={() => handleAmountClick(val)} className={`p-4 rounded-md text-center font-bold border-2 transition ${amount === val && customAmount === '' ? 'bg-primary-light text-white border-primary-dark' : 'bg-neutral-100 hover:bg-neutral-200 border-neutral-300'}`}>
                ${val}
                </button>
            ))}
            </div>
        </div>
        
        <Input 
          id="customAmount"
          label="Or enter a custom amount"
          type="number"
          placeholder="e.g., 100"
          value={customAmount}
          onChange={handleCustomAmountChange}
          min="1"
        />

        <div className="text-center pt-4">
          <Button type="submit" variant="primary" className="w-full text-lg py-3" disabled={amount <= 0}>
            Donate ${amount > 0 ? amount : ''} Now
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default DonatePage;
