# LongTent
หลงเต็นท์ปักษ์ใต้ | Web Application เกี่ยวกับการจองลานกางเต็นท์ในภาคใต้ โดยสามารถเช็คประวัติ แก้ไขประวัติ และจองได้
# Description
หลงเต็นปักษ์ใต้ บริการจองลานกางเต็นท์และที่พักรูปแบบต่างๆที่ทำให้คุณได้ใกล้ชิดกับธรรมชาติที่เข้ามาทำให้ประสบการณ์การแคมป์ของคนไทยดีกว่าที่เคยมี คุณสามารถค้นหาลานกางเต็นท์พร้อมข้อมูลที่พักและบริการต่างๆที่คุณถูกใจได้เลยบนเว็บไซต์
# Requirements
Requirements มาจากสมาชิกภายในกลุ่ม [หลงเต็นท์ - LongTent camping club Thailand](https://www.google.com/url?sa=t&source=web&rct=j&url=https://m.facebook.com/groups/510213325834810/&ved=2ahUKEwivkYL6ubf8AhVRleYKHTteCcAQFnoECBEQAQ&usg=AOvVaw3gIYXAqrPwcDceN_9i3G24) 
หลักๆที่น่าสนใจคือ สมาชิกบางส่วนมักสอบถามเรื่องลานกางเต็นท์ที่รองรับรถบ้าน ทำให้ผู้จัดทำสนใจในประเด็นนี้
# Data Dictionary | Camping
| Attribute  | คำอธิบาย | คีย์ | ขนาด | Unique | Not null | ตัวอย่างข้อมูล |
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- |
| id  | รหัสสถานที่กางเต็นท์  | PK  | INT  | Y  | Y  | 1  |
| Name  | ชื่อสถานที่กางเต็นท์  |   | TEXT(250)  | Y  | Y  | อุทยานแห่งชาติเขาสก อำเภอพนม จังหวัดสุราษฎร์ธานี |
| Description  | คำอธิบายสถานที่กางเต็นท์  |   | TEXT(250)  |   | Y  | อุทยานแห่งชาติเขาสกดินแดนศูนย์กลางของ “ขุนเขาแห่งป่าฝน” เป็นผืนป่าดิบชื้นผืนใหญ่ที่สุดและมีความสำคัญของภาคใต้ |
| Admission  | จำนวนรองรับ  |   | INT  |   | Y  | 250  |

# Data Dictionary | Zone
| Attribute  | คำอธิบาย | คีย์ | ขนาด | Unique | Not null | ตัวอย่างข้อมูล |
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- |
| id  | รหัสโซนกางเต็นท์  | PK  | INT  |   | Y  | 1  |
| Name  | ชื่อโซนกางเต็นท์  |   | TEXT(250)  | Y  | Y  | โซนที่ทำการอุทยานแห่งชาติ (โซนคลองสก) |
| Car  | สถานะการจอดรถบ้าน  |   | Booleen  |   | Y  | true |
| Camping_id  | รหัสสถานที่กางเต็นท์  | PK, FK(Camping)  | INT  |   | Y  | 1  |

# Data Dictionary | Users_Booking
| Attribute  | คำอธิบาย | คีย์ | ขนาด | Unique | Not null | ตัวอย่างข้อมูล |
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- |
| id  | รหัสการจองลานกางเต็นท์  | PK  | INT  | Y  | Y  | 1  |
| Location  | ชื่อสถานที่กางเต็นท์  | FK(Camping)  | TEXT(250)  |   | Y  | อุทยานแห่งชาติเขาสก อำเภอพนม จังหวัดสุราษฎร์ธานี |
| Zone  | ชื่อโซนกางเต็นท์  | FK(Zone) | TEXT(250)  |   | Y  | โซนที่ทำการอุทยานแห่งชาติ (โซนคลองสก) |
| E-Mail  | อีเมล์  |   | TEXT(250)  |   | Y  | kritdanai2015@gmail.com |
| Tel  | เบอร์โทรศัพท์  |   | TEXT(10)  |   | Y  | 0639451810 |
| DateEntry  | วันเข้าพัก  |   | DATE  |   | Y  | 2023-01-09 |
| DateExit  | วันออก  |   | DATE  |   | Y  | 2023-01-10 |
| Price  | ค่าธรรมเนียม  |   | Float  |   | Y  | 345 |

# Data Dictionary | Detail_Booking
| Attribute  | คำอธิบาย | คีย์ | ขนาด | Unique | Not null | ตัวอย่างข้อมูล |
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- |
| id  | รหัสการจองลานกางเต็นท์  | PK, FK(Users_Booking)  | INT  | Y  | Y  | 1  |
| Adult  | จำนวนผู้ใหญ่  |   | INT  |   | Y  | 1  |
| Children  | จำนวนเด็ก  |   | INT  |   | Y  | 1  |
| RV  | จำนวนรถบ้านชนิดที่ไม่ลากจูง  |   | INT  |   | Y  | 1  |
| RVS  | จำนวนรถบ้านชนิดที่ลากจูง  |   | INT  |   | Y  | 1  |
| RVT  | จำนวนรถบ้านชนิดเต็นท์หลังคารถหรือที่มีลักษณะใกล้เคียง  |   | INT  |   | Y  | 1  |
| Tent3  | จำนวนเต็นท์ขนาด 3 คนนอน  |   | INT  |   | Y  | 1  |
| Tent2  | จำนวนเต็นท์ขนาด 2 คนนอน  |   | INT  |   | Y  | 1  |
| Sleeping_Bag  | จำนวนถุงนอน  |   | INT  |   | Y  | 1  |
| Blanket  | จำนวนผ้าห่ม  |   | INT  |   | Y  | 1  |
| Sleeping_Pad  | จำนวนแผ่นรองนอน  |   | INT  |   | Y  | 1  |
| Mat  | จำนวนเสื่อ  |   | INT  |   | Y  | 1  |
| Pillow  | จำนวนหมอน  |   | INT  |   | Y  | 1  |
| Canvas  | จำนวนผ้าใบ  |   | INT  |   | Y  | 1  |


# CRUD:C Create
![Home - Computure](https://github.com/KritdanaiKa/LongTent/blob/main/LongTentPictue/C1.png)
![Home - Computure](https://github.com/KritdanaiKa/LongTent/blob/main/LongTentPictue/C2.png)
![Home - Computure](https://github.com/KritdanaiKa/LongTent/blob/main/LongTentPictue/C3.png)
![Home - Computure](https://github.com/KritdanaiKa/LongTent/blob/main/LongTentPictue/C4.png)
![Home - Computure](https://github.com/KritdanaiKa/LongTent/blob/main/LongTentPictue/C5.png)
# CRUD:R Read
![Home - Computure](https://github.com/KritdanaiKa/LongTent/blob/main/LongTentPictue/R1.png)
![Home - Computure](https://github.com/KritdanaiKa/LongTent/blob/main/LongTentPictue/R2.png)
![Home - Computure](https://github.com/KritdanaiKa/LongTent/blob/main/LongTentPictue/R3.png)
# CRUD:U Update 

# CRUD:D Delete

# Responsive Website Design
เราสามารถแบ่งการรองรับ Responsive ได้ 3 รูปแบบ ได้แก่<br />
1. รูปแบบ Computer ![Home - Computure](https://github.com/KritdanaiKa/LongTent/blob/main/LongTentPictue/Home%20-%20Computer.PNG)
2. รูปแบบ Ipad Air<br />
2.1 แนวตั้ง<br /> ![Home - Ipad1](https://github.com/KritdanaiKa/LongTent/blob/main/LongTentPictue/Home%20-%20Ipad%20%E0%B8%95%E0%B8%B1%E0%B9%89%E0%B8%87.PNG) <br />
2.2 แนวนอน<br /> ![Home - Ipad2](https://github.com/KritdanaiKa/LongTent/blob/main/LongTentPictue/Home%20-%20Ipad%20%E0%B8%99%E0%B8%AD%E0%B8%99.PNG) <br />
3. รูปแบบ Iphone 12 Pro<br />
3.1 แนวตั้ง<br /> ![Home - Iphone1](https://github.com/KritdanaiKa/LongTent/blob/main/LongTentPictue/Home%20-%20Iphone%20%E0%B8%95%E0%B8%B1%E0%B9%89%E0%B8%87.PNG) <br />
3.2 แนวนอน<br /> ![Home - Iphone2](https://github.com/KritdanaiKa/LongTent/blob/main/LongTentPictue/Home%20-%20Iphone%20%E0%B8%99%E0%B8%AD%E0%B8%99.PNG) <br />

# Bootstrap 5

# Demo
[![DEMO หลงเต็นท์ปักษ์ใต้ | Web Application สำหรับจองลานกางเต็นท์ในภาคใต้](https://freeiconshop.com/wp-content/uploads/edd/youtube-flat.png)](https://www.youtube.com/watch?v=VWrKMYKeweU "Everything Is AWESOME")
# Members
1. 64100662 กฤษณ์ดนัย แก้วมาก
2. 64106065	ธันยพร	จู่ทิ่น
3. 64125743	นริตา	สว่างแสง

