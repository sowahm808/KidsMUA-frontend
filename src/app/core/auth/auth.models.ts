export const ROLES=['student','parent','champion','church','admin'] as const; export type UserRole=typeof ROLES[number];
export type AccountStatus='active'|'consent_pending'|'approval_pending'|'verification_pending'|'suspended'|'mfa_required';
export interface AuthUser{id:string;displayName:string;email:string;roles:UserRole[];permissions:string[];status:AccountStatus;consentComplete:boolean;}
export interface LoginRequest{email:string;password:string;mfaCode?:string;csrfToken?:string;} export interface AuthResponse{accessToken:string;expiresAt:string;user:AuthUser;}
