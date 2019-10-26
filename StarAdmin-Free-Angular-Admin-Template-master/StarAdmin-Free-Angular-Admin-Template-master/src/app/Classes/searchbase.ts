import {ListAdvisor} from './list-advisor';
import {ListRegion} from './list-region';
import {ListPropertys} from './list-propertys';
import {ListStatus} from './list-status';
import {ListArea} from './list-area';
import {ListPrice} from './list-price';
import {Decorat} from './decorat';


export class SearchBase {
  public listAdvisor: ListAdvisor[];
  public listRegion: ListRegion[];
  public listPropertys: ListPropertys[];
  public listStatus: ListStatus[];
  public listArea: ListArea[];
  public listPrice: ListPrice[];
  public listDecorat: Decorat[];
}
