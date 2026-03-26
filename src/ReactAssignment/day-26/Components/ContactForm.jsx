import React, { useRef } from 'react'

const ContactForm = () => {
    const NameRef=useRef(null)
    const TextareaRef=useRef(null)
    const handleSubmit = (e) => {
    e.preventDefault();

    const name = NameRef.current.value;
    const message = TextareaRef.current.value;

    console.log("Name:", name);
    console.log("Message:", message);

    
    NameRef.current.value = '';
    TextareaRef.current.value = '';
  };

  return (
    <><>
  <div className="border border-black p-5 w-50 rounded mx-auto mb-5">
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      
      <input
        type="text"
        placeholder="name"
        ref={NameRef}
        className="border p-2 rounded"
      />

      <textarea
        ref={TextareaRef}
        placeholder="enter the message"
        className="border p-2 rounded"
      />

      <input
        type="submit"
        className="bg-blue-500 text-white p-2 rounded cursor-pointer"
      />
      
    </form>
  </div>
</>
  
    </>
  )
}

export default ContactForm
