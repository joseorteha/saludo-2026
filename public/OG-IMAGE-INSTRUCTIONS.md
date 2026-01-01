# Imagen de Vista Previa para Redes Sociales

## 📸 Crear imagen `og-image.jpg`

Para que tu enlace se vea perfecto en WhatsApp, Facebook, Twitter, etc., necesitas una imagen de 1200x630 píxeles.

### Opción 1: Usar Canva (Recomendado - Fácil)

1. Ve a [Canva.com](https://canva.com)
2. Busca "Facebook Post" o crea diseño personalizado de 1200x630px
3. Diseña tu imagen con:
   - Título: "¡Feliz Año Nuevo 2026! 🎉"
   - Fondo: Gradiente azul-púrpura-rosa
   - Añade emojis: 🎊 ✨ 🎈 🎆
   - Texto: "Haz clic para ver tu tarjeta personalizada"
4. Descarga como JPG
5. Renombra el archivo a `og-image.jpg`
6. Colócalo en la carpeta `public/`

### Opción 2: Usar herramientas de diseño

- **Figma**: Crea un frame de 1200x630px
- **Photoshop**: Nuevo documento 1200x630px, 72 DPI
- **GIMP**: Gratis, mismo tamaño

### Opción 3: Usar una imagen existente

Puedes usar una imagen de celebración de Año Nuevo:
- Descarga de [Unsplash](https://unsplash.com/s/photos/new-year)
- Redimensiona a 1200x630px
- Guarda como `og-image.jpg` en `public/`

### 📋 Requisitos importantes:

- **Tamaño exacto**: 1200x630 píxeles
- **Formato**: JPG o PNG
- **Peso**: Menos de 300KB para carga rápida
- **Nombre**: `og-image.jpg`
- **Ubicación**: `public/og-image.jpg`

### ✅ Verificar que funciona:

Después de subir la imagen:

1. **WhatsApp**: Comparte el enlace y verás la vista previa
2. **Facebook Debugger**: https://developers.facebook.com/tools/debug/
3. **Twitter Card Validator**: https://cards-dev.twitter.com/validator

### 💡 Tip:

Si actualizas la imagen, limpia el caché:
- Facebook: Usa el debugger y haz clic en "Scrape Again"
- WhatsApp: Puede tardar hasta 24 horas en actualizar
