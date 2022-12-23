import instance from '../index';

export function getHomeGoodPriceInfo() {
  return instance.get('home/goodprice');
}
