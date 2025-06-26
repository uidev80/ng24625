
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
    'index.csr.html': {size: 438, hash: 'a123cbffd3a772aa5fc9beb7b6a1971fee460f5b8303a8d019b97ae686730adc', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 951, hash: '8d6f08c190ca387b0b92036ed113daab72994764541ad4f75913330ddec35a8a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 11735, hash: '36a9082ef0d1ff20be26235612c5f2d4b5fc691801270546c0028eadb55d7c13', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
