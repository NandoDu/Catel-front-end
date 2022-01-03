const hotelStarMap = {'Five': 5, 'Four': 4, 'Three': 3, 'Two': 2, 'One': 1};
const roomTypeMap = {
  'BigBed': '大床房',
  'DoubleBed': '标准双床房',
  'Family': '家庭/亲子房',
  'Business': '商务套房',
  'Luxury': '豪华套房',
  'Single': '单人房',
  'Tatami': '榻榻米',
  'Studio': '影音房',
};
const couponTypeMap = {'Multiple': '多间优惠券', 'Vip': '会员优惠券', 'Reduction': '满减优惠券'};
const disabledDate = (select: Date) => {
  const current = new Date();
  return (current && select.getTime() < current.getTime() - 3600 * 1000 * 24 || select.getTime() > current.getTime() + 3600 * 1000 * 180 * 24);
};


export {roomTypeMap, hotelStarMap, couponTypeMap, disabledDate};