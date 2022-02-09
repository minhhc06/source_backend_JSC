import { Discount } from './discount.entity';
import { ProductImage } from './product_image.entity';
import { ProductCategory } from './product_category.entity';
import { OrderItem } from './order_item.entity';
import { Cart } from './cart.entity';
import { Order } from './order.entity';
export declare class Product {
    id: number;
    name: string;
    price: number;
    quantity: number;
    about: string;
    brand: string;
    material: string;
    made_in: string;
    expiry: Date;
    preserve: string;
    type_skin: string;
    created_at: Date;
    updated_at: Date;
    discounts: Discount[];
    productImages: ProductImage[];
    productCategory: ProductCategory;
    orderItem: OrderItem;
    order: Order;
    cart: Cart;
}
