import React from 'react';
import { Sparkles, PartyPopper, Rocket, Heart, Gift, Star, Crown, Award } from 'lucide-react';
import { getCurrentYear } from '../utils/urlParams';
import { motion } from 'framer-motion';

interface NewYearGreetingProps {
  recipient: string;
  sender: string;
  template?: string;
}

export const NewYearGreeting: React.FC<NewYearGreetingProps> = ({ 
  recipient, 
  sender, 
  template = 'default' 
}) => {
  const currentYear = getCurrentYear();
  
  const capitalizeFirstLetter = (str: string): string => {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const messages = {
    default: {
      title: `¡Feliz ${currentYear}!`,
      body: [
        "Que este nuevo año te traiga infinitas posibilidades y momentos inolvidables.",
        "Que cada día esté lleno de éxitos, alegría y nuevas aventuras. Que tus sueños se hagan realidad y que la felicidad sea tu compañera constante en este viaje llamado " + currentYear + "."
      ]
    },
    romantic: {
      title: `¡Feliz Año Nuevo, mi amor!`,
      body: [
        "En este nuevo año que comienza, quiero que sepas que eres lo mejor que me ha pasado.",
        "Que este " + currentYear + " nos traiga más momentos juntos, más sonrisas compartidas y más amor. Eres mi razón de ser feliz cada día. Te amo con todo mi corazón."
      ]
    },
    friendly: {
      title: `¡Feliz ${currentYear}, amig@!`,
      body: [
        "¡Un nuevo año lleno de aventuras nos espera! Gracias por ser parte de mi vida y por todos los momentos increíbles que hemos compartido.",
        "Que este " + currentYear + " venga cargado de risas, buenos momentos y muchas más memorias juntos. ¡Brindemos por nuestra amistad!"
      ]
    },
    professional: {
      title: `Feliz Año Nuevo ${currentYear}`,
      body: [
        "En este nuevo año, le deseo éxito en todos sus proyectos y metas profesionales.",
        "Que " + currentYear + " traiga nuevas oportunidades de crecimiento, logros significativos y momentos de satisfacción en su carrera. Mis mejores deseos para usted y su familia."
      ]
    }
  };

  const currentMessage = messages[template as keyof typeof messages] || messages.default;

  const icons = [
    { Icon: Sparkles, color: 'text-yellow-500', delay: 0 },
    { Icon: Heart, color: 'text-red-500', delay: 0.1 },
    { Icon: Gift, color: 'text-green-500', delay: 0.2 },
    { Icon: Star, color: 'text-blue-500', delay: 0.3 },
  ];

  return (
    <div className="text-center space-y-6 md:space-y-10">
      {/* Icons Grid */}
      <div className="flex justify-center items-center gap-4 md:gap-6 mb-6">
        {icons.map(({ Icon, color, delay }, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: delay
            }}
            whileHover={{ scale: 1.2, rotate: 10 }}
          >
            <Icon className={`w-8 h-8 md:w-10 md:h-10 ${color}`} />
          </motion.div>
        ))}
      </div>
      
      {/* Title */}
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 px-2"
      >
        {currentMessage.title}
      </motion.h1>
      
      {/* Recipient Name */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="mb-8"
      >
        <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
          {capitalizeFirstLetter(recipient)}
        </p>
      </motion.div>
      
      {/* Message Body */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="space-y-6 text-base sm:text-lg md:text-xl text-slate-700 max-w-3xl mx-auto px-4 md:px-8"
      >
        {currentMessage.body.map((paragraph, index) => (
          <motion.p 
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.4 + (index * 0.2) }}
            className="leading-relaxed bg-white/50 backdrop-blur-sm p-4 md:p-6 rounded-2xl shadow-sm border border-slate-100"
          >
            {paragraph}
          </motion.p>
        ))}
        
        {/* Sender */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2 }}
          className="pt-6"
        >
          <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full shadow-lg">
            <p className="text-lg sm:text-xl md:text-2xl font-bold flex items-center gap-2">
              <Heart className="w-5 h-5" />
              {capitalizeFirstLetter(sender)}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};