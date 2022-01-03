const hotelStarMap = {'Five': 5, 'Four': 4, 'Three': 3, 'Two': 2, 'One': 1};
const bizRegionMap = {'XiDan': '西单', 'DongDan': '东单'};
const roomTypeMap = {'BigBed': '大床房', 'DoubleBed': '双床房', 'Family': '家庭房'};
const couponTypeMap = {'Multiple': '多间优惠券', 'Vip': '会员优惠券', 'Reduction': '满减优惠券'};
const reverseBizRegionMap = {'西单': 'XiDan', '东单': 'DongDan'};
const disabledDate = (select: Date) => {
  const current = new Date();
  return (current && select.getTime() < current.getTime() - 3600 * 1000 * 24 || select.getTime() > current.getTime() + 3600 * 1000 * 180 * 24);
};


export {roomTypeMap, hotelStarMap, bizRegionMap, couponTypeMap, reverseBizRegionMap, disabledDate};