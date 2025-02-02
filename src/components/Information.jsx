import React from "react";

function Information() {
  return (
    <div className="w-full bg-gray-100/50 text-black ">
      <section id="experience" className="py-10 px-20 mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-center  text-black text-shadow-sm mb-4">
          Information
        </h2>
        <h1 className="font-bold">ราคาบ้านพัก</h1>
            <h1>
              - จันทร์ - พฤหัส: 7,900 บาท/ 8ท่าน <br />
              - ศุกร์ - อาทิตย์: 8,900 บาท/ 8ท่าน <br />- วันนักขัต: 10,500 บาท/
              8ท่าน
            </h1>
            <div>
            <h1 className="font-bold">รายละเอียดเพิ่มเติม</h1>
            <h1>
              - เกินเสริมท่านละ 500 บาท
              <br />
              - พักได้สูงสุด 15 ท่าน <br />
              - โอนจองบ้านพักเต็มจำนวน 60%
              <br />
              - ค่าประกันบ้าน 5,000 บาท (จ่าย ณ วันเข้าพัก)
              <br />
              - หากโอนจองบ้านพักแล้ว ทางเราขอสงวนสิทธิ์ยกเลิกการจอง
              แต่สามารถเลื่อนวันเข้าพักได้**
              <br />
            </h1>
          </div>
      
          <div>
            <h1 className="font-bold">กฎระเบียบบ้านพัก</h1>
            <h1>
              🚫 ห้ามสูบบุหรี่ภายในตัวบ้านพัก
              <br />
              🚫 งดส่งเสียงดังหลัง 21:00 น. (ภายนอกบ้านพัก) <br />
              🚫 ห้ามเข้าพักเกินจำนวนที่จอง + กำหนดไว้
              <br />
              🚫 ห้ามนำสัตว์เลี้ยงเข้าบ้านพัก
              <br />
            </h1>
        </div>
      </section>
    </div>
  );
}

export default Information;
