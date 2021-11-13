<script setup lang="ts"></script>
<template>
  <section id="hotel_info_card">
    <div class="headline">
      <div class="detail">
        <div class="title">
          <h1 class="hotel_name">
            上海岳麓花园酒店
          </h1>
          <div class="star">
            <i class="el-icon-star-on"></i>
          </div>
          <div class="star">
            <i class="el-icon-star-on"></i>
          </div>
          <div class="star">
            <i class="el-icon-star-on"></i>
          </div>
          <div class="star">
            <i class="el-icon-star-on"></i>
          </div>
        </div>
        <div class="address">
          <div class="position">
            <div style="display: inline-block;vertical-align: baseline;line-height: 22px;"><i class="el-icon-location"></i></div>
            <span class="position_info">
              <span class="position_text">中国，上海，嘉定区，马陆镇宝安公路3138-3148号</span>
<!--              <span class="position_show_more">显示地图</span>-->
            </span>
          </div>
<!--          <div class="desc">-->
<!--            <div style="display: inline-block;vertical-align: baseline;line-height: 22px;"><i class="el-icon-office-building"></i></div>-->
<!--            <span class="desc_context">开业：2018 上海悦麓花园酒店位于上海嘉定区马陆镇宝安公路与横沥河交汇处，距上海虹桥国家会展中心约14公里，属上海虹桥商务中心约15分钟快速直达辐射范围内。</span>-->
<!--&lt;!&ndash;            <span class="desc_show_more">查看更多</span>&ndash;&gt;-->
<!--          </div>-->
        </div>
      </div>
      <div class="price_container">
        <div class="select_room">
          选择房间
        </div>
      </div>
    </div>
    <div class="content">
      <div class="head_album">
        <div class="album_box" style="position: absolute;top: 0;bottom: 0;right: 0;left: 0">
          <div class="big_pic">
            <div style="position: absolute; inset: 0;padding-bottom: 8px">
              <img class="bigpic_img" alt="酒店图片" src="//ak-d.tripcdn.com/images/fd/hotel/g3/M07/8F/43/CggYGVX55jyAWTnGAA0-M7m4m2s797_R_600_400_R5_D.jpg" style="height: 100%;width: 100%">
            </div>
<!--            <div class="focus_mask">-->
<!--              <span class="more_pics">查看全部的377张图片</span>-->
<!--            </div>-->
<!--            <div class="collect">-->
<!--              <i class="el-icon-star-on"></i>-->
<!--            </div>-->
          </div>
          <div class="child_box">
            <div class="album_item">
              <div class="m_pic" style="width: 100%; height: 100%">
                <div class="m_pic_item" id="pic1"></div>
              </div>
            </div>
            <div class="album_item">
              <div class="m_pic" style="width: 100%; height: 100%">
                <div class="m_pic_item" id="pic2"></div>
              </div>
            </div>
            <div class="album_item">
              <div class="m_pic" style="width: 100%; height: 100%">
                <div class="m_pic_item" id="pic3"></div>
              </div>
            </div>
            <div class="album_item">
              <div class="m_pic" style="width: 100%; height: 100%">
                <div class="m_pic_item" id="pic4"></div>
              </div>
            </div>
            <div class="album_item">
              <div class="m_pic" style="width: 100%; height: 100%">
                <div class="m_pic_item" id="pic5"></div>
              </div>
            </div>
            <div class="album_item">
              <div class="m_pic" style="width: 100%; height: 100%">
                <div class="m_pic_item" id="pic6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="head_context">
        <div class="review_container">
          <div class="review_container_tab" style="width: 98%;">
            <div class="review_info" style="display: flex;justify-content: flex-start;align-items: center;margin-bottom: 4px">
              <div class="review_sum" style="width: calc(55% - 4px);display: flex;flex-direction: column">
                <p style="margin-bottom: 8px;margin-top: 0">
                  <span class="score_box">
                    <b class="score_value" style="color: #fff;font-size: 20px;margin-right: 2px">4.4</b>
                    <span style="font-size: 16px;line-height: 22px;color: #fff;font-weight: 500;opacity: .6;">分</span>
                  </span>
                  <span class="score_text">很好</span>
                </p>
                <p class="review_all" style="margin-bottom: 10px;margin-top: 10px">显示全部522条评论</p>
                <p class="review_quality" style="margin-bottom:4px;margin-top: 8px">
                  环境优雅、房间很大
                </p>
              </div>
              <div class="review_box" style="position: relative;width: 45%;right:0">
                <div class="review_bubble"></div>
                <div class="review_content">
                  <div class="review_content_context">
                    <span class="review_keyword">
                      酒店有地中海风格，与别墅区连为一体。房间比较大，有独立风格。有儿童游乐场，在游泳池旁边，很适合出去玩。就是吃饭要好好找找。都说大学城附近有，也没找到，顿顿到熟悉的地方吃农家乐。酒店有地中海风格，与别墅区连为一体。房间比较大，有独立风格。有儿童游乐场，在游泳池旁边，很适合出去玩。就是吃饭要好好找找。都说大学城附近有，也没找到，顿顿到熟悉的地方吃农家乐。</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div class="traffic_container">
          <span class="hotel_desc">
            开业：2018 上海悦麓花园酒店位于上海嘉定区马陆镇宝安公路与横沥河交汇处，距上海虹桥国家会展中心约14公里，属上海虹桥商务中心约15分钟快速直达辐射范围内。
          </span>
<!--          <div class="map_icon"></div>-->
<!--          <div class="map_detail">-->
<!--            <div>-->
<!--              <ul class="traffic_list" style="display: flex;justify-content: flex-start;list-style: none;padding-left: 10px">-->
<!--                <li style="margin-right: 30px;list-style: none;display: list-item">-->
<!--                  <span style="font-size: 20px;">-->
<!--                    <i class="el-icon-s-promotion"></i>-->
<!--                    <span class="item_distance">49.18公里</span>-->
<!--                  </span>-->
<!--                </li>-->
<!--                <li style="margin-right: 30px;list-style: none">-->
<!--                  <span style="font-size: 20px">-->
<!--                    <i class="el-icon-truck"></i>-->
<!--                    <span class="item_distance">31.77公里</span>-->
<!--                  </span>-->
<!--                </li>-->
<!--              </ul>-->
<!--              <div class="traffic_desc" style="overflow: hidden;margin-bottom: 4px;padding-left: 10px">-->
<!--                <div class="traffic_desc_text">附近1公里内有3个景点，距离市中心45.6千米</div>-->
<!--              </div>-->
<!--              <div>-->
<!--                <span class="map_show_more">-->
<!--                  查看地图-->
<!--                </span>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
        </div>
        <div class="amenity_container">
          <div class="amenity_list">
            <span class="amenity_item">棋牌室</span>
            <span class="amenity_item">
              <span class="mr_4"> |</span>
              24小时大堂经理
            </span>
            <span class="amenity_item">
              <span class="mr_4"> |</span>
              会议厅
            </span>
          </div>
          <div class="amenity_show_more" style="text-align: right">
            <span class="amenity-link">
              显示所有设施
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
section{
  width:1160px;
}
body{
  font: 12px/1.5 Helvetica Neue,Helvetica,Arial,sans-serif;
}
.headline{
  display: flex;
}
.content{
  display: flex;
  margin: 0;
  padding: 4px;
}
.head_album{
  display: flex;
  width: 100%;
  position: relative;
  max-width: 57%;
  padding-bottom: 25%;
  height: 0;
}
.head_album .big_pic{
  position: relative;
  width: 59.8%;
  height: 100%;
  display: inline-block;
  cursor: pointer;
}
.head_album .child_box{
  display: inline-block;
  width: 40.2%;
  height: 100%;
}
.focus_mask{
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;
  background-image: linear-gradient(180deg,transparent,rgba(15,41,77,.5));
}
.focus_mask .more_pics{
  position: absolute;
  right: 16px;
  bottom: 14px;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
}
.collect{
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 16px;
  top: 16px;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0 1px 8px 0 rgba(0,0,0,.13);
  cursor: pointer;
  font-size: 30px;
  color: gray;
}
.child_box .album_item{
  background-size: cover;
  cursor: pointer;
  width: 50%;
  height: 33.3%;
  float: left;
  padding-left: 8px;
  padding-bottom: 8px;
  box-sizing: border-box;
}
.album_item .m_pic{
  display: inline-flex;
  opacity: 1;
  transition: all .45s cubic-bezier(.645,.045,.355,1) 0s;
  justify-content: center;
  align-items: center;
}
.m_pic .m_pic_item{
  background-size: cover;
  width: 100%;
  font-family: PingFangSC-Regular,serif;
  color: rgb(255, 255, 255);
  font-size: 12px;
  text-align: center;
  height: 100%;
  /*background-image: url("//ak-d.tripcdn.com/images/020011200082g4a9a08D4_R_200_150_R5_D.jpg");*/
  background-position: center center;
  background-repeat: no-repeat no-repeat;
}
#pic1{
  background-image: url("//ak-d.tripcdn.com/images/020011200082g4a9a08D4_R_200_150_R5_D.jpg");
}
#pic2{
  background-image: url("//ak-d.tripcdn.com/images/20070k000000bcvg79B6B_R_200_150_R5_D.jpg");
}
#pic3{
  background-image: url("//ak-d.tripcdn.com/images/0205d1200081to4imF6B9_R_200_150_R5_D.jpg");
}
#pic4{
  background-image: url("//ak-d.tripcdn.com/images/0204h1200082k5mb52B78_R_200_150_R5_D.jpg");
}
#pic5{
  background-image: url("//ak-d.tripcdn.com/images/0204h1200081tq5ic5F4B_R_200_150_R5_D.jpg");
}
#pic6{
  background-image: url("//ak-d.tripcdn.com/images/fd/hotel/g2/M03/2B/E3/Cghzf1TccJCAG_ZUAAvd3wXU1Yg329_R_200_150_R5_D.jpg");
}
.head_context{
  max-width: 43%;
  flex: auto;
  padding: 0 0 0 16px;
  position: relative;
}
.review_container{
  display: flex;
  align-items: center;
  /*padding-bottom: 12px;*/
  border-bottom: 2px solid #f0f2f5;
  /*margin-bottom: 12px;*/
  /*max-width: 460px;*/
  justify-content: flex-start;
  /*margin-left: 12px;*/
}
.score_box{
  background-color: #4978ce;
  padding: 3px 8px;
  border-radius: 2px;
  font-size: 22px;
  line-height: 22px;
  color: hsla(0,0%,100%,.6);
  font-weight: 700;
  cursor: pointer;
  white-space: nowrap;
  display: inline-block;
}
.score_text{
  color: #4978ce;
  font-size: 20px;
  margin-left: 8px;
  font-weight: 700;
  position: relative;
  top: 1px;
}
.review_all{
  margin-bottom: 4px;
  font-size: 14px;
  color: #287dfa;
  font-weight: 700;
  cursor: pointer;
  white-space: nowrap;
}
.review_quality{
  margin-bottom: 4px;
  font-size: 14px;
  color: #06aebd;
  font-weight: 400;
  white-space: nowrap;
}
.review_bubble{
  padding: 8px;
  transform: rotate(45deg);
  background-color: #eaf1fc;
  position: absolute;
  left: -4px;
  top: 20px;
}
.review_content{
  /*background: #f5f9ff;*/
  background: #eaf1fc;
  height: 54px;
  /*max-width: 198px;*/
  margin-left: 20px;
  position: relative;
  overflow: hidden;
  outline: 15px solid #eaf1fc;
  /*outline: 15px solid lightsteelblue;*/
}
.review_content:before{
  float: left;
  width: 100px;
  content: "";
  height: 54px;
}
.review_content:after{
  float: right;
  content: "...";
  height: 18px;
  line-height: 18px;
  width: 30px;
  position: relative;
  left: calc(100% - 100px);
  top: -18px;
  text-align: right;
}
.review_content_context{
  float: right;
  margin-left: -100px;
  width: 100%;
  word-break: break-all;
  line-height: 18px;
  font-size: 14px;
  color: #455873;
  letter-spacing: 0;
  font-family: PingFangSC-Regular,serif;
}
.traffic_container{
  display: flex;
  justify-content: space-between;
  /*padding-bottom: 12px;*/
  border-bottom: 2px solid #f0f2f5;
  /*margin-bottom: 12px;*/
  /*padding-left: 12px;*/
  /*margin-left: 12px;*/
  /*max-width: 460px;*/
  cursor: pointer;
}
.traffic_container .hotel_desc{
  display: block;
  justify-content: space-between;
  margin: 13px 3px 13px 0;
  font-size: 18px;
  letter-spacing: 0;
  text-align: left;
  line-height: 30px;
  word-break: break-all;
  width: 100%;
  color: #455873;
  font-family: PingFangSC-Regular,serif;
}
.map_icon{
  background: url("src/asset/虚假的地图.jpg") 50%/cover;
  max-width: 98px;
  height: 98px;
  width: 24%;
  cursor: pointer;
}
.map_detail{
  max-width: 346px;
  width: 76%;
  display: flex;
  flex-direction: column;
}
.item_distance{
  font-size: 14px;
  color: #0f294d;
  letter-spacing: 0;
  text-align: left;
  line-height: 18px;
  margin-left: 4px;
  cursor: pointer;
  border-bottom: 2px dotted #0f294d;
}
.traffic_desc_text{
  font-size: 14px;
  color: #8592a6;
  letter-spacing: 0;
  text-align: left;
  line-height: 22px;
  float: right;
  margin-left: -100px;
  word-break: break-all;
  width: 100%;
}
.traffic_desc:after{
  float: right;
  content: "...";
  height: 22px;
  line-height: 22px;
  width: 30px;
  position: relative;
  left: calc(100% - 100px);
  top: -22px;
  text-align: right;
}
.map_show_more{
  font-size: 14px;
  color: #287dfa;
  letter-spacing: 0;
  text-align: left;
  line-height: 18px;
  cursor: pointer;
  font-weight: 700;
  padding-left: 10px;
}
.amenity_container{
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  overflow: hidden;
  /*vertical-align: sub;*/
  height: 28px;
  /*margin-top: 10px;*/
  /*padding-top: 10px;*/
  /*padding-left: 10px;*/
  /*margin-right:12px;*/
}
.amenity_list{
  flex-shrink: 0;
  max-width: 330px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.amenity_item{
  display: inline-block;
  font-size: 14px;
  color: #0f294d;
  letter-spacing: 0;
  text-align: left;
  line-height: 18px;
  padding-right: 6px;
  align-items: baseline;
}
.amenity-link{
  font-size: 14px;
  color: #287dfa;
  letter-spacing: 0;
  line-height: 18px;
  cursor: pointer;
  font-weight: 700;
}
.detail{
  flex:auto;
  max-width: 57%;
  padding:4px;
}
.price_container{
  flex: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 4px;
  align-items: flex-end;
}
.price_container .select_room{
  padding: 8px 16px;
  background: #287dfa;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
}
.title{
  width: 100%;
  margin-bottom: 6px;
}
.title .hotel_name{
  font-size: 24px;
  color:#0f294d;
  display: inline;
  margin-right: 8px;
}
.title .star{
  display: inline;
  color:#ff9501;
  font-size: 20px;
  /*font-size: 16px;*/
  /*line-height: 20px;*/
  /*font-family: smarticon,sans-serif!important;*/
  /*font-style: normal;*/
  /*vertical-align: baseline;*/
  /*font-weight:400;*/
}
.address .position{
  display: inline-block;
  margin-bottom: 6px;
  align-items: baseline;
  justify-content: center;
  text-align: center;
}
/*.address .desc{*/
/*  display: flex;*/
/*  align-items: baseline;*/
/*  font-size: 14px;*/
/*}*/
.position_info{
  font-size: 14px;
  color: #455873;
  letter-spacing: 0;
  text-align: left;
  line-height: 22px;
  margin-left: 1px;
  padding-left: 1px;
  display: inline-block;
  align-items: baseline;
  justify-content: center;
}
/*.position_show_more,.desc_show_more{*/
/*  font-size: 14px;*/
/*  color: #287dfa;*/
/*  font-weight: 700;*/
/*  cursor: pointer;*/
/*  word-break: keep-all;*/
/*  padding-left: 6px;*/
/*}*/
.desc_context{
  line-height: 22px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 0 1 auto;
  text-align: left;
  letter-spacing: 0;
  color: #455873;
  margin-right: 4px;
  margin-left: 1px;
  padding-left: 1px;
}
</style>