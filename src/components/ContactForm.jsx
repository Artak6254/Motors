import { useState } from 'react';
import axios from '../axios';

export function ContactForm({ contactsLabel, contacts }) {
  const [contactVal, setContactVal] = useState({
    name: '', email: '', message: ''
  })

  const handleChange = (e) => {
    setContactVal({ ...contactVal, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('contactsInfo', contactVal);
    setContactVal({ name: '', text: '', email: '', message: '' });
  }

  return (
    <div className='flex flex-col h-[100vh] items-center'>
      <div className='my-6 mx-auto max-w-xl font-sans'>
        <h1 className='text-3xl font-extrabold text-center text-red-600'>Contact</h1>
        
        <h2 className='text-center text-3xl text-red-500 font-bold mt-24 mb-10'>
          {contactsLabel.title}
        </h2>

        <form onSubmit={handleSubmit} className='mt-8 space-y-4 w-full max-w-md'>
          <input
            type='text'
            placeholder={contacts.name}
            required
            name='name'
            value={contactVal.name}
            onChange={handleChange}
            className='w-full rounded-md border border-red-600 py-3 px-4 text-sm focus:outline-slate-700'
          />
          <input
            type='email'
            placeholder={contacts.email}
            name='email'
            value={contactVal.email}
            onChange={handleChange}
            className='w-full rounded-md border border-red-600 py-3 px-4 text-sm focus:outline-slate-700'
          />

          <textarea
            placeholder={contacts.message}
            name='message'
            value={contactVal.message}
            onChange={handleChange}
            rows='6'
            className='w-full rounded-md border border-red-600 py-3 px-4 text-sm resize-none focus:outline-slate-700'
          ></textarea>

          <button
            type='submit'
            className='border border-red-600 text-red-600 font-semibold rounded-md text-sm px-4 py-3 w-full transition-all group'
          >
            <span className='group-hover:border-b-2 group-hover:border-red-600 pb-0.5  transition-all'>{contacts.btn_text}</span>
          </button>
        </form>
      </div>
    </div>

  );
}
