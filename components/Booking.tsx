import React, { useState } from 'react';
import { CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import { CONTENT } from '../constants';

interface FormValues {
  name: string;
  phone: string;
  email: string;
  artist: string;
  description: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  description?: string;
}

const Booking: React.FC = () => {
  const [values, setValues] = useState<FormValues>({
    name: '',
    phone: '',
    email: '',
    artist: 'any',
    description: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    if (!values.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!values.phone.trim()) {
      newErrors.phone = "Phone is required";
      isValid = false;
    } else if (!/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im.test(values.phone)) {
      newErrors.phone = "Invalid phone number format";
      isValid = false;
    }

    if (!values.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      newErrors.email = "Invalid email address";
      isValid = false;
    }

    if (!values.description.trim()) {
      newErrors.description = "Please describe your project idea";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Simulate network request
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSubmitting(false);
      setIsSuccess(true);
      setValues({
        name: '',
        phone: '',
        email: '',
        artist: 'any',
        description: ''
      });
      
      setTimeout(() => setIsSuccess(false), 5000);
    }
  };

  return (
    <section id="booking" className="bg-neutral-950 text-white py-24 border-t border-gray-900">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Info Side */}
          <div className="lg:w-1/2">
            <h2 className="text-5xl md:text-7xl font-serif mb-8">{CONTENT.booking.title}</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">{CONTENT.booking.description}</p>
            
            <div className="space-y-4">
              <p className="text-xl font-light tracking-wide">
                <span className="block text-xs text-gray-600 uppercase tracking-widest mb-1">Visit Us</span>
                {CONTENT.booking.address}
              </p>
              <p className="text-xl font-light tracking-wide">
                <span className="block text-xs text-gray-600 uppercase tracking-widest mb-1">Call Us</span>
                {CONTENT.booking.phone}
              </p>
              <p className="text-xl font-light tracking-wide">
                <span className="block text-xs text-gray-600 uppercase tracking-widest mb-1">Email Us</span>
                <a href={`mailto:${CONTENT.booking.email}`} className="hover:text-gray-400 transition-colors border-b border-gray-600 pb-1">
                  {CONTENT.booking.email}
                </a>
              </p>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-1/2 bg-black border border-gray-900 p-8 md:p-12 relative min-h-[600px]">
            {isSuccess ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black z-10 animate-in fade-in duration-500">
                <CheckCircle2 className="text-green-500 w-16 h-16 mb-4" />
                <h3 className="text-2xl font-serif mb-2">Request Sent</h3>
                <p className="text-gray-400 text-center px-8">We have received your inquiry and will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-gray-500 flex justify-between items-center">
                      Name {errors.name && <span className="text-red-500 normal-case tracking-normal text-[10px] flex items-center gap-1"><AlertCircle size={10} /> Required</span>}
                    </label>
                    <input 
                      type="text" 
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      className={`w-full bg-neutral-900 border-b text-white p-3 focus:outline-none transition-colors ${errors.name ? 'border-red-500 focus:border-red-500' : 'border-gray-700 focus:border-white'}`} 
                    />
                  </div>
                  <div className="space-y-2">
                     <label className="text-xs uppercase tracking-widest text-gray-500 flex justify-between items-center">
                       Phone {errors.phone && <span className="text-red-500 normal-case tracking-normal text-[10px] flex items-center gap-1"><AlertCircle size={10} /> {errors.phone}</span>}
                     </label>
                     <input 
                       type="tel" 
                       name="phone"
                       value={values.phone}
                       onChange={handleChange}
                       className={`w-full bg-neutral-900 border-b text-white p-3 focus:outline-none transition-colors ${errors.phone ? 'border-red-500 focus:border-red-500' : 'border-gray-700 focus:border-white'}`} 
                      />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-500 flex justify-between items-center">
                    Email {errors.email && <span className="text-red-500 normal-case tracking-normal text-[10px] flex items-center gap-1"><AlertCircle size={10} /> {errors.email}</span>}
                  </label>
                  <input 
                    type="email" 
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    className={`w-full bg-neutral-900 border-b text-white p-3 focus:outline-none transition-colors ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-gray-700 focus:border-white'}`} 
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-500">Artist Preference</label>
                  <select 
                    name="artist"
                    value={values.artist}
                    onChange={handleChange}
                    className="w-full bg-neutral-900 border-b border-gray-700 text-white p-3 focus:outline-none focus:border-white transition-colors"
                  >
                    <option value="any">Any Artist</option>
                    <option value="david">David</option>
                    <option value="nina">Nina</option>
                    <option value="karli">Karli</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-500 flex justify-between items-center">
                    Project Description {errors.description && <span className="text-red-500 normal-case tracking-normal text-[10px] flex items-center gap-1"><AlertCircle size={10} /> Required</span>}
                  </label>
                  <textarea 
                    name="description"
                    rows={4} 
                    value={values.description}
                    onChange={handleChange}
                    className={`w-full bg-neutral-900 border-b text-white p-3 focus:outline-none transition-colors ${errors.description ? 'border-red-500 focus:border-red-500' : 'border-gray-700 focus:border-white'}`}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-white text-black font-bold py-4 mt-4 hover:bg-gray-200 disabled:bg-gray-500 disabled:cursor-not-allowed transition-colors uppercase tracking-widest text-sm flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin" size={18} /> Sending...
                    </>
                  ) : (
                    'Request Consultation'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-gray-900 text-center text-gray-600 text-xs tracking-widest uppercase">
          {CONTENT.footer.copyright}
        </div>
      </div>
    </section>
  );
};

export default Booking;