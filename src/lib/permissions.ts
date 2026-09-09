import type {Permission,Role} from './types';
const matrix:Record<Role,Permission[]>={ADMIN:['orders.create','orders.complete','products.manage','inventory.manage','users.manage','reports.view','settings.manage'],CASHIER:['orders.create','orders.complete'],VIEWER:['reports.view']};
export const can=(role:Role,p:Permission)=>matrix[role].includes(p);
