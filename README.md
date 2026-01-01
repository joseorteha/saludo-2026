# 🎉 Feliz Año Nuevo 2026

<div align="center">

![New Year 2026](https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=800&h=400&fit=crop)

**Crea y comparte tarjetas de Año Nuevo personalizadas con música, animaciones y confetti**

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

[Ver Demo en Vivo](https://jose-ortega-dev.netlify.app/) • [Reportar Bug](https://github.com/joseorteha/saludo-2026/issues) • [Solicitar Función](https://github.com/joseorteha/saludo-2026/issues)

</div>

---

## ✨ Características

- 🎨 **4 Plantillas de Mensajes**: Clásico, Romántico, Amistoso y Profesional
- 🎵 **Reproductor de Música**: Integración con YouTube con controles de reproducción
- 🎊 **Animaciones con Confetti**: Emojis festivos cayendo con animaciones suaves
- 📱 **Diseño Responsivo**: Optimizado para móviles, tablets y escritorio
- 🎭 **Animaciones Framer Motion**: Transiciones y efectos visuales profesionales
- 🔗 **URLs Personalizables**: Genera enlaces únicos para cada destinatario
- 🎨 **Paleta de Colores Moderna**: Gradientes azul-púrpura-rosa
- ⚡ **Rendimiento Optimizado**: Build con Vite para carga ultra-rápida

---

## 🎬 Demo

### Vista Principal
![Demo Principal](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzBkNzE4ZWQ0NjI4Mjk2ZGE3ZjVlNjA5MDI2ZmQ1OTEyNDYwZTM5YiZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/26tPplGWjN0xLybiU/giphy.gif)

### Formulario de Personalización
![Formulario](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGY4YjRlMzg0OWI5ZWVlYTg5ZGJiZmQ3YmI5ZjVkYjQ5ZWI2ZjM1ZSZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/l0HlHJGHe3yAMhdQY/giphy.gif)

### Reproductor de Música
![Música](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWI3ZjI2YzE5YWJlZjA1ZjE5ZjU5MmE4ZjE5YzI5MzY5YzA4YTBjZCZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/xUPGcEw56dJj3fJFJe/giphy.gif)

---

## 🚀 Inicio Rápido

### Requisitos Previos

- Node.js 18.0 o superior
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/joseorteha/saludo-2026.git

# Entrar al directorio
cd saludo-2026

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

El sitio estará disponible en `http://localhost:5173`

### Build para Producción

```bash
npm run build
npm run preview
```

---

## 📖 Uso

### Opción 1: Formulario Web (Fácil)

1. Abre la aplicación en tu navegador
2. Completa el formulario con:
   - **Destinatario**: Nombre de quien recibirá el saludo
   - **Remitente**: Tu nombre o mensaje personalizado
   - **Estilo**: Elige entre 4 plantillas de mensajes
3. Haz clic en **"Generar y Copiar Enlace"**
4. Comparte el enlace por WhatsApp, Facebook, Instagram, etc.

### Opción 2: Parámetros URL (Avanzado)

Crea URLs personalizadas directamente:

#### Parámetros Disponibles

| Parámetro | Alias | Descripción | Por Defecto |
|-----------|-------|-------------|-------------|
| `name` | `n` | Nombre del destinatario | `Amig@` |
| `author` | `a` | Nombre del remitente | `Jose` |
| `template` | `t` | Estilo del mensaje | `default` |

#### Plantillas Disponibles

- `default`: Mensaje clásico de año nuevo
- `romantic`: Mensaje romántico para tu pareja
- `friendly`: Mensaje casual para amigos
- `professional`: Mensaje formal para colegas

#### Ejemplos de URLs

```bash
# Ejemplo básico
https://tu-sitio.com/?n=María&a=Juan

# Con plantilla romántica
https://tu-sitio.com/?n=Mi amor&a=Tu novio&t=romantic

# Con plantilla amistosa
https://tu-sitio.com/?name=Carlos&author=Tu amigo&template=friendly

# Con plantilla profesional
https://tu-sitio.com/?n=Equipo&a=Gerencia&t=professional
```

> 💡 **Tip**: Los espacios en la URL se codifican automáticamente. Puedes escribirlos normalmente.

---

## 🎨 Personalización

### Cambiar la Música

Edita `src/components/MusicPlayer.tsx`:

```typescript
const MUSIC_CONFIG = {
  type: 'youtube', // o 'spotify'
  youtubeId: 'TU_VIDEO_ID', // ID del video de YouTube
  spotifyId: 'TU_CANCION_ID', // ID de la canción de Spotify
};
```

### Modificar Colores

Edita `tailwind.config.js` para cambiar la paleta de colores:

```javascript
theme: {
  extend: {
    colors: {
      // Tus colores personalizados
    }
  }
}
```

### Agregar Nuevas Plantillas

En `src/components/NewYearGreeting.tsx`, agrega nuevos mensajes:

```typescript
const messages = {
  // ... mensajes existentes
  tuPlantilla: {
    title: `¡Tu Título!`,
    body: [
      "Tu primer párrafo",
      "Tu segundo párrafo"
    ]
  }
};
```

---

## 🛠️ Tecnologías Utilizadas

- **React 18.3.1** - Biblioteca UI
- **TypeScript 5.5.3** - Tipado estático
- **Vite 5.4.2** - Build tool y dev server
- **Tailwind CSS 3.4.1** - Framework de estilos
- **Framer Motion** - Biblioteca de animaciones
- **Lucide React** - Iconos modernos
- **React Router DOM** - Enrutamiento
- **Class Variance Authority** - Gestión de variantes de componentes

---

## 📂 Estructura del Proyecto

```
saludo-2026/
├── src/
│   ├── components/
│   │   ├── ui/              # Componentes UI reutilizables
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   └── badge.tsx
│   │   ├── Confetti.tsx     # Animación de confetti
│   │   ├── Footer.tsx       # Pie de página
│   │   ├── MusicPlayer.tsx  # Reproductor de música
│   │   ├── NewYearGreeting.tsx  # Tarjeta principal
│   │   ├── ShareForm.tsx    # Formulario de personalización
│   │   └── YearAnimation.tsx    # Animación del año
│   ├── pages/
│   │   └── Readme.tsx       # Página de información
│   ├── utils/
│   │   └── urlParams.ts     # Utilidades para URLs
│   ├── lib/
│   │   └── utils.ts         # Funciones auxiliares
│   ├── App.tsx              # Componente principal
│   ├── main.tsx             # Punto de entrada
│   └── index.css            # Estilos globales
├── public/                  # Archivos estáticos
├── index.html              # HTML principal
├── package.json            # Dependencias
├── tailwind.config.js      # Configuración de Tailwind
├── tsconfig.json           # Configuración de TypeScript
└── vite.config.ts          # Configuración de Vite
```

---

## 🤝 Contribuir

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el proyecto
2. Crea una rama para tu función (`git checkout -b feature/NuevaFuncion`)
3. Commit tus cambios (`git commit -m 'Agregar nueva función'`)
4. Push a la rama (`git push origin feature/NuevaFuncion`)
5. Abre un Pull Request

---

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

## 👤 Autor

**Jose Ortega**

- Website: [jose-ortega-dev.netlify.app](https://jose-ortega-dev.netlify.app/)
- GitHub: [@joseorteha](https://github.com/joseorteha)
- Facebook: [JoseOrtega.dev](https://www.facebook.com/JoseOrtega.dev/)

---

## ⭐ Agradecimientos

- Código base inspirado en el proyecto de [Alejandro Bolaño](https://github.com/alejandrobolano/New-Year)
- Iconos por [Lucide Icons](https://lucide.dev/)
- Animaciones por [Framer Motion](https://www.framer.com/motion/)
- Imágenes de [Unsplash](https://unsplash.com/)

---

<div align="center">

**¡Dale una ⭐ si este proyecto te ayudó!**

© 2026 Jose Ortega. Todos los derechos reservados.

</div>
