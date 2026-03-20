import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, CheckCircle } from 'lucide-react';

const DemoModal = ({ isOpen, onClose }) => {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setForm({ name: '', email: '', company: '', message: '' });
      setErrors({});
      setSubmitted(false);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      newErrors.email = 'Enter a valid email address';
    }
    if (!form.company.trim()) newErrors.company = 'Company is required';
    if (!form.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    console.log('Demo request submitted:', form);
    setSubmitted(true);
  };

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const inputClasses =
    'w-full bg-transparent text-white text-[14px] px-4 py-3 border border-white/20 outline-none placeholder:text-white/30 focus:border-white/40 transition-colors';

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[60] flex items-start justify-center pt-[10vh] px-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/95 backdrop-blur-md" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-lg border border-white/10 bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
              <div>
                <h2 className="text-white text-[18px] font-medium tracking-tight">
                  Request a Demo
                </h2>
                <p className="text-white/40 text-[13px] mt-1">
                  Tell us about your needs and we will set up a walkthrough.
                </p>
              </div>
              <button
                onClick={onClose}
                className="text-white/40 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" strokeWidth={1.5} />
              </button>
            </div>

            {/* Body */}
            <div className="px-6 py-6">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="text-center py-8"
                  >
                    <CheckCircle className="w-10 h-10 text-white mx-auto mb-4" strokeWidth={1} />
                    <h3 className="text-white text-[16px] font-medium mb-2">
                      Request received.
                    </h3>
                    <p className="text-white/50 text-[14px] mb-1">
                      We'll be in touch. Usually within 48 hours.
                    </p>
                    <a href="mailto:hello@madeofcuriosity.com" className="text-white/40 text-[13px] hover:text-white transition-colors">hello@madeofcuriosity.com</a>
                    <button
                      onClick={onClose}
                      className="mt-6 inline-flex items-center gap-2 bg-white text-black text-[13px] font-medium px-6 py-2.5 hover:bg-white/90 transition-colors"
                    >
                      Close
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    {/* Name */}
                    <div>
                      <input
                        type="text"
                        value={form.name}
                        onChange={handleChange('name')}
                        placeholder="Name"
                        className={inputClasses}
                      />
                      {errors.name && (
                        <p className="text-red-400 text-[12px] mt-1">{errors.name}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <input
                        type="email"
                        value={form.email}
                        onChange={handleChange('email')}
                        placeholder="Email"
                        className={inputClasses}
                      />
                      {errors.email && (
                        <p className="text-red-400 text-[12px] mt-1">{errors.email}</p>
                      )}
                    </div>

                    {/* Company */}
                    <div>
                      <input
                        type="text"
                        value={form.company}
                        onChange={handleChange('company')}
                        placeholder="Company"
                        className={inputClasses}
                      />
                      {errors.company && (
                        <p className="text-red-400 text-[12px] mt-1">{errors.company}</p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <textarea
                        value={form.message}
                        onChange={handleChange('message')}
                        placeholder="Tell us what you're looking for..."
                        rows={4}
                        className={`${inputClasses} resize-none`}
                      />
                      {errors.message && (
                        <p className="text-red-400 text-[12px] mt-1">{errors.message}</p>
                      )}
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 bg-white text-black text-[13px] font-medium px-6 py-3 hover:bg-white/90 transition-colors"
                    >
                      Submit Request
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DemoModal;
