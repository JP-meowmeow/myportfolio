import React from "react";

function NearPlace({ language }) {
  return (
    <div className="text-black mt-5 w-4/5 md:w-full mx-auto">
      <h1 className="text-3xl font-bold text-center m-4">
        {language == "Thai" ? "สถานที่ใกล้เคียง" : "Near places"}
      </h1>
      {language == "Thai" ? (
        <div className="grid grid-cols-1 md:grid-cols-3 text-xl">
          <span>📍PK House</span>
          <span>📍ตลาดร่มบ่อสร้าง</span>
          <span>📍สี่แยกหลุยส์</span>
          <span>📍หลุยส์เครื่องเงิน</span>
          <span>📍ร้านกาแฟกระดาษ</span>
          <span>📍เรือนแพ 1</span>
          <span>📍กาดอุ้ยทา</span>
          <span>📍ร่มบ่อสร้าง</span>
          <span>📍น้ำพุร้อนสันกำแพง</span>
          <span>📍เขียงนาคาเฟ่</span>
          <span>📍ดัทชีฟาร์ม</span>
          <span>📍chiangmai circuit go-kart</span>
          <span>📍Maya เมญ่า</span>
          <span>📍ตำแม่ออน</span>
          <span>📍แม่กำปอง</span>
          <span>📍Jin an cafe</span>
          <span>📍อุทยานแห่งชาติแม่ตะไคร้</span>
          <span>📍อ่างเก็บน้ำห้วยลาน</span>
          <span>📍MAiAM</span>
          <span>📍Central festival Chiang Mai</span>
          <span>📍Central Airport</span>
          <span>📍The cave cafe&Eatery</span>
          <span>📍Chuen cafe</span>
          <span>📍Karin & Sho's</span>
          <span>📍ฉำฉา market</span>
          <span>📍โซลาวบ้านเจ๊</span>
          <span>📍ตลาดเจริญเจริญ</span>
          <span>📍โมเดิร์น</span>
          <span>📍บ้านรมณ์ดี 2</span>
          <span>📍เชียงใหม่</span>
          <span>📍บ้านพักเชียงใหม่</span>
          <span>📍บ้านพักรายวัน</span>
          <span>📍บ้านพักรายเดือน</span>
          <span>📍ที่พัก</span>
          <span>📍โรงแรม</span>
          <span>📍รีสอร์ท</span>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 text-xl">
          <span>📍PK House</span>
          <span>📍Rom Bo Sang Market</span>
          <span>📍Louis Intersection</span>
          <span>📍Louis Silver Shop</span>
          <span>📍Paper Cafe</span>
          <span>📍Houseboat 1</span>
          <span>📍Uy Ta Market</span>
          <span>📍Rom Bo Sang</span>
          <span>📍San Kamphaeng Hot Springs</span>
          <span>📍Kiang Na Cafe</span>
          <span>📍Dutch Farm</span>
          <span>📍Chiang Mai Circuit Go-Kart</span>
          <span>📍Maya Mall</span>
          <span>📍Mae On Market</span>
          <span>📍Mae Kampong</span>
          <span>📍Jin an Cafe</span>
          <span>📍Mae Takhrai National Park</span>
          <span>📍Huay Lan Reservoir</span>
          <span>📍MAIAM</span>
          <span>📍Central Festival Chiang Mai</span>
          <span>📍Central Airport</span>
          <span>📍The Cave Cafe & Eatery</span>
          <span>📍Chuen Cafe</span>
          <span>📍Karin & Sho's</span>
          <span>📍Cham Cha Market</span>
          <span>📍Solar Ban Je</span>
          <span>📍Charoen Charoen Market</span>
          <span>📍Modern</span>
          <span>📍Ban Rom Dee 2</span>
          <span>📍Chiang Mai</span>
          <span>📍Chiang Mai Accommodation</span>
          <span>📍Daily Rentals</span>
          <span>📍Monthly Rentals</span>
          <span>📍Accommodation</span>
          <span>📍Hotel</span>
          <span>📍Resort</span>
        </div>
      )}
    </div>
  );
}

export default NearPlace;
