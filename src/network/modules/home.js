import instance from '../index';

export function getHomeGoodPriceInfo() {
  return instance.get('home/goodprice');
}

export function getHomeHighScoreInfo() {
  return instance.get('home/highscore');
}

export function getHomeDiscountInfo() {
  return instance.get('home/discount');
}
