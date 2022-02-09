import { User } from './user.entity';
export declare class HistoryCoin {
    id: number;
    id_user: number;
    coin: number;
    created_at: Date;
    updated_at: Date;
    user: User;
}
