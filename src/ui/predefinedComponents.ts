import { App, defineAsyncComponent } from 'vue'
import NotFound from '@/ui/components/NotFound.vue'
import DynamicVc from '@/ui/components/util/DynamicVc.vue'


export const SYNC_COMP = {
  notFound: {
    name: 'not-found',
    component: NotFound
  },
  dynamicVc: {
    name: 'dynamic-vc',
    component: DynamicVc
  }
}

export const ASYNC_COMP = {
  projectDetail: {
    name: 'project-detail',
    component: () => import(/* webpackChunkName: "vue-project-detail" */ '@/ui/components/project/ProjectDetail.vue'),
  },
  technologyDetail: {
    name: 'technology-detail',
    component: () => import(/* webpackChunkName: "vue-technology-detail" */ '@/ui/components/technology/TechnologyDetail.vue'),
  },
  home: {
    name: 'home',
    component: () => import(/* webpackChunkName: "vue-home" */ '@/ui/components/Home.vue'),
  },
  projects: {
    name: 'projects',
    component: () => import(/* webpackChunkName: "vue-projects" */ '@/ui/components/project/Projects.vue'),
  },
  technologies: {
    name: 'technologies',
    component: () => import(/* webpackChunkName: "vue-technologies" */ '@/ui/components/technology/Technologies.vue'),
  },
  contentEditor: {
    name: 'contentEditor',
    component: () => import(/* webpackChunkName: "vue-content-editor" */ '@/ui/components/ContentEditor.vue'),
  },
  contentRequired: {
    name: 'contentRequired',
    component: () => import(/* webpackChunkName: "vue-content-required" */ '@/ui/components/util/ContentRequired.vue')
  },
  notFound: {
    name: 'notFound',
    component: () => import(/* webpackChunkName: "vue-not-found" */ '@/ui/components/NotFound.vue')
  }
}

export function addToApp(app: App) {
  for (const componentDef of Object.values(SYNC_COMP)) {
    app.component(componentDef.name, componentDef.component)
  }
  for (const componentDef of Object.values(ASYNC_COMP)) {
    app.component(componentDef.name, defineAsyncComponent(componentDef.component as any))
  }
}