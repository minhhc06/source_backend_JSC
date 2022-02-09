import { Repository } from "typeorm";
import { HistoryCoin } from "src/entities/history_coin.entity";
export declare class HistoryCoinRepository extends Repository<HistoryCoin> {
    createHistoryCoin(id: number): Promise<void>;
}
