import { AuthService } from './auth/auth.service';
export declare class AppController {
    private authSerice;
    constructor(authSerice: AuthService);
    login(req: any): Promise<{
        access_token: string;
    }>;
    getProfile(req: any): any;
}
