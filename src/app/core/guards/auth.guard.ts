import { CanActivateFn, Router } from '@angular/router';import { inject } from '@angular/core';import { AuthStore } from '../auth/auth.store';import { UserRole } from '../auth/auth.models';
export const authGuard:CanActivateFn=()=>inject(AuthStore).isAuthenticated()||inject(Router).createUrlTree(['/login']);
export const roleGuard=(role:UserRole):CanActivateFn=>()=>inject(AuthStore).hasRole(role)||inject(Router).createUrlTree(['/access-denied']);
export const permissionGuard=(permission:string):CanActivateFn=>()=>inject(AuthStore).hasPermission(permission)||inject(Router).createUrlTree(['/access-denied']);
