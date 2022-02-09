import { EntityRepository, Repository } from 'typeorm';
import { InternalServerErrorException , UploadedFile} from '@nestjs/common';
import { Discount } from 'src/entities/discount.entity';
import { DiscountDto } from './dto/discount.dto';

@EntityRepository(Discount)
export class DiscountRepository extends Repository<Discount> {

  async getDiscount(): Promise<Discount[]> {
    const query = this.createQueryBuilder('discount');

    try {
        const discountModel = await query.getMany();
        return discountModel;
        
      } catch (error) {
        // this.logger.error(`Failed to get tasks for user "${user.username}". Filters: ${JSON.stringify(filterDto)}`, 
        // error.stack);
        throw new InternalServerErrorException();
      }

}

async createDiscount(discountDto: DiscountDto) : Promise<Discount>{
    const { id_product, discount, name_discount  } = discountDto;

    const discountModel = this.create({
      id_product,
      discount,
      name_discount
    });

    await this.save(discountModel);
    return discountModel;
}

}