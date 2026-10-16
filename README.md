# ASADA San Juan de Dios..

Landing pública hecha con Next.js, React y TypeScript. No utiliza base de datos ni contiene credenciales.

## Desarrollo local

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

## Producción

```bash
npm run lint
npm run build
```

El proyecto está configurado para Vercel. Importá el repositorio en Vercel y dejá el framework en Next.js; no ocupa variables de entorno para esta fase.

## Rutas

- `/`: portada pública.
- `/consulta`: aviso informativo; la consulta real se implementará después.
- `/login`: pantalla provisional para acceso administrativo.

La imagen del hero está en `public/images/hero-asada.webp`. El año del pie de página se obtiene dinámicamente con `new Date().getFullYear()`.
