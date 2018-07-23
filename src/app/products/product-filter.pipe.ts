import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './products.model';

@Pipe({
    name: 'productFilter'
})

export class ProductValueFilter implements PipeTransform {
    transform(value:IProduct[], filterBy: string){
        filterBy = filterBy ? filterBy.toLowerCase() : null;
        return filterBy ? value.filter((product : IProduct) => 
            product.name.toLowerCase().indexOf(filterBy) !== -1): value;
        }
    }
