import React, { useState } from 'react';

const h = React.createElement;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation for Name, Email, and Message
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      alert("All fields are required. Please complete the form.");
      return;
    }

    const whatsappNumber = "60132347515";
    const messageBody = `NEW INQUIRY
Name: ${formData.name}
Email: ${formData.email}
Message: ${formData.message}`;

    const encodedMessage = encodeURIComponent(messageBody);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
  };

  return h('div', { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" },
    h('div', { className: "grid lg:grid-cols-2 gap-16" },
      h('div', null,
        h('span', { className: "text-brand-primary font-bold uppercase tracking-[0.3em] text-sm block mb-4" }, "Connect"),
        h('h2', { className: "text-4xl md:text-5xl font-black font-display text-white italic uppercase mb-8 leading-none" },
          "Start Your ", h('br'), h('span', { className: "text-brand-primary" }, "Transformation"), " Today"
        ),
        h('p', { className: "text-gray-400 mb-8 max-w-md leading-relaxed" },
          "Ready to join the elite? Send us a message via WhatsApp and our team will get back to you with your 7-day trial access."
        ),
        h('div', { className: "space-y-6" },
          h('div', { className: "flex items-center space-x-4" },
            h('div', { className: "w-12 h-12 bg-white/5 flex items-center justify-center rounded-lg border border-white/10" },
              h('svg', { className: "w-6 h-6 text-brand-primary", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" },
                h('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" }),
                h('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z" })
              )
            ),
            h('div', null,
              h('h4', { className: "text-white font-black uppercase tracking-widest text-xs" }, "HQ Location"),
              h('p', { className: "text-gray-500 text-sm font-bold tracking-wider" }, "123 Muscle Way, Downtown NY")
            )
          )
        )
      ),
      h('div', { className: "bg-brand-secondary p-8 md:p-12 rounded-lg border border-white/5 relative shadow-2xl overflow-hidden" },
        h('div', { className: "absolute top-0 right-0 w-32 h-32 bg-brand-primary/10 blur-3xl -mr-16 -mt-16" }),
        h('form', { className: "space-y-6 relative z-10", onSubmit: handleSubmit },
          h('div', { className: "grid md:grid-cols-2 gap-6" },
            h('div', { className: "space-y-2" },
              h('label', { className: "text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1" }, "Full Name"),
              h('input', { 
                type: "text", 
                name: "name",
                value: formData.name,
                onChange: handleInputChange,
                className: "w-full bg-black/40 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-brand-primary transition-all text-sm font-bold", 
                placeholder: "E.G. JOHN DOE",
                required: true
              })
            ),
            h('div', { className: "space-y-2" },
              h('label', { className: "text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1" }, "Email Address"),
              h('input', { 
                type: "email", 
                name: "email",
                value: formData.email,
                onChange: handleInputChange,
                className: "w-full bg-black/40 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-brand-primary transition-all text-sm font-bold", 
                placeholder: "EMAIL@EXAMPLE.COM",
                required: true
              })
            )
          ),
          h('div', { className: "space-y-2" },
            h('label', { className: "text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1" }, "Your Message"),
            h('textarea', { 
              rows: 4, 
              name: "message",
              value: formData.message,
              onChange: handleInputChange,
              className: "w-full bg-black/40 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-brand-primary transition-all text-sm font-bold", 
              placeholder: "TELL US YOUR FITNESS GOALS...",
              required: true
            })
          ),
          h('button', { 
            type: "submit", 
            className: "w-full py-4 bg-brand-primary hover:bg-red-700 text-white font-black uppercase tracking-[0.2em] transition-all rounded-sm shadow-lg shadow-brand-primary/20 flex items-center justify-center" 
          }, "Inquire via WhatsApp")
        )
      )
    )
  );
};

export default Contact;