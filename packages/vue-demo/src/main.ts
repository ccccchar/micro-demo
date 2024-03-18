import './public-path';
import { createApp } from 'vue'
import App from './App.vue'
import { routes } from './router'
import { createRouter, createWebHistory } from 'vue-router';
let app: any;
let router: any;

function render(props: any = {}) {
    const { container } = props;
    
    router = createRouter({
        history: createWebHistory((window as any).__POWERED_BY_QIANKUN__ ? '/app-vue/' : '/'),
        routes,
      })
    app = createApp(App).use(router);
    app.mount(container ? container.querySelector('#app') : '#app');
}

// 独立运行时
if (!(window as any).__POWERED_BY_QIANKUN__) {
    render();
  }
  
  export async function bootstrap() {
    console.log('[vue] vue app bootstraped');
  }
  export async function mount(props: any) {
    console.log('[vue] props from main framework', props);
    render(props);
  }
  export async function unmount() {
    app.unmount();
    app = null;
    router = null;
  }
