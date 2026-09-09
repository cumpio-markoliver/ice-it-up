export type Role='ADMIN'|'CASHIER'|'VIEWER';
export type OrderStatus='DRAFT'|'PENDING'|'COMPLETED'|'CANCELLED'|'VOIDED';
export type PaymentMethod='CASH'|'ONLINE';
export type ProductType='DIRECT_INVENTORY'|'COMPONENT_BASED'|'NON_INVENTORY';
export type Permission='orders.create'|'orders.complete'|'products.manage'|'inventory.manage'|'users.manage'|'reports.view'|'settings.manage';
