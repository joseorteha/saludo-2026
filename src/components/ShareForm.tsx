import React, { useState } from 'react';
import { Copy, Check, Sparkles, Users, Briefcase, User, Info, ExternalLink } from 'lucide-react';
import { createShareableUrl } from '../utils/urlParams';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { motion, AnimatePresence } from 'framer-motion';

export const ShareForm: React.FC = () => {
  const [recipient, setRecipient] = useState('');
  const [sender, setSender] = useState('');
  const [template, setTemplate] = useState('default');
  const [copied, setCopied] = useState(false);
  const [errors, setErrors] = useState({ recipient: '', sender: '' });
  const [showHelp, setShowHelp] = useState(false);

  const validate = () => {
    const newErrors = { recipient: '', sender: '' };
    let isValid = true;

    if (!recipient.trim()) {
      newErrors.recipient = 'Este campo es requerido';
      isValid = false;
    }
    if (!sender.trim()) {
      newErrors.sender = 'Este campo es requerido';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleCopy = async () => {
    if (!validate()) return;

    const url = createShareableUrl(recipient, sender, template);
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const templates = [
    { 
      id: 'default', 
      name: 'Clásico', 
      icon: Sparkles,
      gradient: 'from-blue-500 to-cyan-500',
      description: 'Mensaje tradicional'
    },
    { 
      id: 'romantic', 
      name: 'Romántico', 
      icon: Sparkles,
      gradient: 'from-pink-500 to-rose-500',
      description: 'Para tu amor'
    },
    { 
      id: 'friendly', 
      name: 'Amistoso', 
      icon: Users,
      gradient: 'from-green-500 to-emerald-500',
      description: 'Para amigos'
    },
    { 
      id: 'professional', 
      name: 'Formal', 
      icon: Briefcase,
      gradient: 'from-slate-600 to-slate-800',
      description: 'Para colegas'
    },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-6 md:py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="border-none shadow-2xl bg-gradient-to-br from-white to-slate-50 backdrop-blur">
          <CardHeader className="space-y-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-t-xl">
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl md:text-2xl flex items-center gap-2">
                <Sparkles className="w-6 h-6" />
                Crea tu Tarjeta
              </CardTitle>
              <Badge variant="secondary" className="bg-white/20 text-white border-none">
                Gratis
              </Badge>
            </div>
            <CardDescription className="text-slate-100">
              Personaliza y comparte tus mejores deseos de año nuevo
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6 pt-6">
            {/* Recipient Input */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                <User className="w-4 h-4 text-indigo-600" />
                Destinatario
              </label>
              <Input
                type="text"
                value={recipient}
                onChange={(e) => {
                  setRecipient(e.target.value);
                  setErrors({ ...errors, recipient: '' });
                }}
                className={errors.recipient ? 'border-red-500' : ''}
                placeholder="Ej: María, Mi amor, Familia López"
              />
              {errors.recipient && (
                <p className="text-red-500 text-xs flex items-center gap-1">
                  {errors.recipient}
                </p>
              )}
            </div>

            {/* Sender Input */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                <User className="w-4 h-4 text-purple-600" />
                Remitente
              </label>
              <Input
                type="text"
                value={sender}
                onChange={(e) => {
                  setSender(e.target.value);
                  setErrors({ ...errors, sender: '' });
                }}
                className={errors.sender ? 'border-red-500' : ''}
                placeholder="Ej: Juan, Tu mejor amigo"
              />
              {errors.sender && (
                <p className="text-red-500 text-xs flex items-center gap-1">
                  {errors.sender}
                </p>
              )}
            </div>

            {/* Template Selection */}
            <div className="space-y-3">
              <label className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                <Sparkles className="w-4 h-4 text-pink-600" />
                Estilo del mensaje
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {templates.map((t) => {
                  const Icon = t.icon;
                  return (
                    <motion.button
                      key={t.id}
                      onClick={() => setTemplate(t.id)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`relative p-4 rounded-xl border-2 transition-all ${
                        template === t.id
                          ? 'border-indigo-500 bg-indigo-50 shadow-lg'
                          : 'border-slate-200 bg-white hover:border-purple-300 hover:shadow-md'
                      }`}
                    >
                      <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${t.gradient} opacity-0 ${template === t.id ? 'opacity-10' : ''} transition-opacity`} />
                      <div className="relative space-y-2">
                        <Icon className={`w-6 h-6 mx-auto ${template === t.id ? 'text-indigo-600' : 'text-slate-400'}`} />
                        <div className="text-xs font-semibold">{t.name}</div>
                        <div className="text-[10px] text-slate-500">{t.description}</div>
                      </div>
                      {template === t.id && (
                        <motion.div
                          layoutId="selectedTemplate"
                          className="absolute -top-1 -right-1"
                        >
                          <Check className="w-5 h-5 text-white bg-indigo-600 rounded-full p-1" />
                        </motion.div>
                      )}
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Copy Button */}
            <Button
              onClick={handleCopy}
              disabled={copied}
              size="lg"
              className="w-full text-base font-bold shadow-lg hover:shadow-xl"
            >
              <AnimatePresence mode="wait">
                {copied ? (
                  <motion.div
                    key="copied"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    <Check className="w-5 h-5" />
                    ¡Enlace copiado!
                  </motion.div>
                ) : (
                  <motion.div
                    key="copy"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    <Copy className="w-5 h-5" />
                    Generar y Copiar Enlace
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>

            {/* Help Section */}
            <div className="pt-4 border-t border-slate-200">
              <button
                onClick={() => setShowHelp(!showHelp)}
                className="flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-purple-600 transition-colors mx-auto"
              >
                <Info className="w-4 h-4" />
                ¿Cómo funciona?
                <motion.span
                  animate={{ rotate: showHelp ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  ▼
                </motion.span>
              </button>

              <AnimatePresence>
                {showHelp && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 space-y-3 text-xs md:text-sm">
                      <div className="flex gap-3 items-start p-3 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs font-bold">1</div>
                        <div>
                          <p className="font-semibold text-slate-800">Personaliza</p>
                          <p className="text-slate-600">Completa los campos y elige el estilo del mensaje</p>
                        </div>
                      </div>
                      
                      <div className="flex gap-3 items-start p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center text-xs font-bold">2</div>
                        <div>
                          <p className="font-semibold text-slate-800">Genera tu enlace</p>
                          <p className="text-slate-600">Se creará un enlace único que se copiará al portapapeles</p>
                        </div>
                      </div>
                      
                      <div className="flex gap-3 items-start p-3 bg-gradient-to-r from-pink-50 to-rose-50 rounded-lg">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-pink-600 text-white flex items-center justify-center text-xs font-bold">3</div>
                        <div>
                          <p className="font-semibold text-slate-800">Comparte</p>
                          <p className="text-slate-600">Envía por WhatsApp, redes sociales o email</p>
                        </div>
                      </div>

                      <div className="p-3 bg-white border-l-4 border-indigo-500 rounded-r-lg">
                        <div className="flex items-start gap-2">
                          <Sparkles className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                          <p className="text-xs text-slate-600">
                            <strong className="text-indigo-700">Incluye:</strong> Animaciones, confeti, música de Spotify y diseño responsive
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};