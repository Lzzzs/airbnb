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

export function getHomeHotreCommendInfo() {
  return instance.get('home/hotrecommenddest');
}

export function getHomeLongForInfo() {
  return instance.get('home/longfor');
}

export function getHomePlusInfo() {
  return instance.get('home/plus');
}
