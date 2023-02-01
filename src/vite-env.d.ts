/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare module 'jr-qrcode';
declare module 'sortablejs';
declare module 'vue3-preview-image';
declare module 'vue3-print-nb';
