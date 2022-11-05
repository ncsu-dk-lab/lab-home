export const routes = [
  {
    path: '/',
    component: '@/index',
    name: '首页',
  },
  {
    // path要和component名字一样，忽略大小写
    path: '/researchPage',
    component: '@/pages/researchPage/index',
    name: 'Research Page',
  },
  {
    path: '/publication',
    component: '@/pages/Publication/index',
    name: 'publications',
  },
  {
    path: '/activities',
    component: '@/pages/Activities/index',
    name: 'publications',
  },
];
export const menus = [
  {
    key: 'home',
    title: 'Home',
    path: '/',
  },
  {
    key: 'people',
    title: 'People',
    path: '/people',
  },
  {
    // path要和component名字一样
    key: 'Research',
    title: 'Research',
    path: '/researchPage',
  },
  {
    key: 'Publication',
    title: 'Publication',
    path: '/publication',
  },
  {
    key: 'Activities',
    title: 'Team Activities',
    path: '/activities',
  },
  {
    key: 'Seminar',
    title: 'Seminar',
    path: '/seminar',
  },
  {
    key: 'Teaching',
    title: 'Teaching',
    path: '/teaching',
  },
  {
    key: 'Services',
    title: 'Services',
    path: '/services',
  },

  // {
  //   key: 'work-show',
  //   title: '作业展示',
  //   children: [
  //     { key: 'work-show-assignment', title: '作业展示', path: '/assignment' },
  //   ],
  // },
];
