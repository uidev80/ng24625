
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/ng24526/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/ng24526"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 438, hash: '5c550cea6ab1e5b5322f3458924dbaab9ff9ee8b989eef0b6e7bbf0524dc48ec', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 951, hash: 'ae9f684f433e6c46d3bcffc8e085e83c0218284e7558ceae3aa32feb0be458d1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 11735, hash: '381c8be843b18a9a102c376cde493fd3eb597940b657df3675b7077d95b17b54', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
