import { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

export function ContactForm() {
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/mdekpjpj";

  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Actualiza el estado cuando el usuario escribe en las cajas de texto
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Maneja el envío del formulario mediante una petición HTTP POST
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' }); // Limpia las cajas de texto
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-800 border border-gray-700 p-6 rounded-lg space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
          Tu Nombre
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="Escribe tu nombre"
          className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-400"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
          Tu Correo Electrónico
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="nombre@ejemplo.com"
          className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-400"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          required
          value={formData.message}
          onChange={handleChange}
          placeholder="¿En qué te puedo ayudar?"
          className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-400"
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 text-white font-medium py-3 rounded-lg transition"
      >
        {status === 'submitting' ? (
          'Enviando mensaje...'
        ) : (
          <>
            <Send className="w-4 h-4" /> Enviar Mensaje
          </>
        )}
      </button>

      {/* Mensajes de retroalimentación para el usuario */}
      {status === 'success' && (
        <div className="flex items-center gap-2 text-green-400 text-sm bg-green-950/50 border border-green-800 p-3 rounded-lg">
          <CheckCircle className="w-5 h-5 flex-shrink-0" />
          <span>¡Mensaje enviado con éxito! Te responderé lo antes posible.</span>
        </div>
      )}

      {status === 'error' && (
        <div className="flex items-center gap-2 text-red-400 text-sm bg-red-950/50 border border-red-800 p-3 rounded-lg">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <span>Hubo un problema al enviar tu mensaje. Por favor intenta de nuevo.</span>
        </div>
      )}
    </form>
  );
}