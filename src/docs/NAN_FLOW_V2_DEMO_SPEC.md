# NAN FLOW V2 — Vision Demo Specification

## เป้าหมาย

สร้าง Demo สำหรับ Pitch ที่ทำให้กรรมการ “เห็นอนาคต” ของ NAN FLOW ภายใน 1–2 นาที

Demo ต้องสื่อว่า NAN FLOW ไม่ใช่เว็บรวมสถานที่ท่องเที่ยว แต่เป็น:

> AI Journey & Tourism Intelligence Platform

## Core Story

```text
Traveler Input
→ AI วิเคราะห์ Persona
→ AI สร้าง Journey พร้อมคะแนนและเหตุผล
→ ผู้ใช้เห็นเส้นทางรายวันบนแผนที่
→ Journey Data ถูกสรุปเป็น Government Tourism Intelligence
```

---

# Scope ที่ต้องทำวันนี้

ทำเฉพาะ 4 ส่วน:

1. Hero V2
2. AI Traveler Persona
3. AI Journey Map
4. Government Live Dashboard

ใช้ Mock Data ทั้งหมด ห้ามทำ Backend, Auth, GPS จริง หรือ AI API จริงในรอบนี้

---

# 1. Hero V2

## เป้าหมาย

ทำให้ผู้ใช้เห็นทันทีว่า NAN FLOW ใช้ AI ออกแบบการเดินทาง และช่วยบริหารการกระจายนักท่องเที่ยว

## ข้อความหลัก

**AI Journey ที่เข้าใจคุณ  
และช่วยให้นักท่องเที่ยวไหลไปทั่วน่านอย่างเหมาะสม**

คำอธิบาย:

> NAN FLOW วิเคราะห์ตัวตน เวลา สภาพอากาศ และความหนาแน่น  
> เพื่อสร้างเส้นทางที่เหมาะกับนักท่องเที่ยว พร้อมสร้างโอกาสให้ชุมชน

## CTA

- สร้าง Journey ของฉัน
- ดู Tourism Intelligence

## Visual

ใช้ภาพ Hero เดิมเป็น Background ได้

เพิ่ม:

- จุดนักท่องเที่ยวเคลื่อนไหวบนแผนที่หรือเส้นทาง
- Floating Journey Card
- Badge: AI Match 96%
- Badge: Low Crowd
- Badge: High Local Impact

## Interaction

- ปุ่ม “สร้าง Journey ของฉัน” ไปหน้า Persona
- ปุ่ม “ดู Tourism Intelligence” ไป Government Dashboard

---

# 2. AI Traveler Persona

## เป้าหมาย

ทำให้ผู้ใช้รู้สึกว่า AI กำลังทำความเข้าใจเขา ไม่ใช่แค่ Filter ข้อมูล

## Step 1: Quick Questions

ใช้คำถามแบบเลือกตอบ ไม่เกิน 6 ข้อ

1. เดินทางกับใคร
   - คนเดียว
   - คู่รัก
   - ครอบครัว
   - กลุ่มเพื่อน

2. มีเวลาเท่าไร
   - 1 วัน
   - 2 วัน
   - 3 วัน

3. สิ่งที่สนใจ
   - ธรรมชาติ
   - วัฒนธรรม
   - คาเฟ่และอาหาร
   - ชุมชน
   - ผจญภัย

4. จังหวะการเดินทาง
   - สบาย ๆ
   - สมดุล
   - เก็บหลายจุด

5. ระดับกิจกรรม
   - ง่าย
   - ปานกลาง
   - ท้าทาย

6. ต้องการหลีกเลี่ยงพื้นที่คนเยอะหรือไม่
   - ใช่
   - ไม่จำเป็น

## Step 2: AI Processing State

แสดง Animation 2–3 วินาที

ข้อความ:

**AI กำลังทำความเข้าใจการเดินทางของคุณ**

Checklist:

- วิเคราะห์ความสนใจ
- วิเคราะห์เวลาและจังหวะการเที่ยว
- ตรวจสอบสภาพอากาศจำลอง
- ตรวจสอบความหนาแน่นจำลอง
- ค้นหาโอกาสสนับสนุนชุมชน

## Step 3: Persona Result

ชื่อ Persona:

> Slow Nature Explorer

คำอธิบาย:

> คุณชอบธรรมชาติ พื้นที่สงบ และการเดินทางที่ไม่เร่งรีบ  
> เหมาะกับเส้นทางระดับง่ายที่เชื่อมคาเฟ่และชุมชนท้องถิ่น

Interest Profile:

- Nature 45%
- Community 30%
- Coffee & Food 15%
- Landmark 10%

ปุ่ม:

> สร้าง AI Journey จาก Persona นี้

---

# 3. AI Journey Map

## เป้าหมาย

ทำให้กรรมการเห็นว่า AI ไม่ได้แนะนำ “รายการสถานที่” แต่สร้าง Journey พร้อมเหตุผล

## Journey Header

ชื่อ:

> เส้นทางหมอก ชุมชน และกาแฟเมืองปัว

ข้อมูล:

- AI Match: 96%
- Distance: 78 km
- Duration: 7 hr
- Difficulty: Easy
- Crowd Level: Low
- Community Impact: High

## AI Explanation

หัวข้อ:

**ทำไม AI เลือก Journey นี้**

ข้อความ:

> Journey นี้ตรงกับ Persona ของคุณ 96%  
> เพราะเหมาะกับการเดินทางแบบไม่เร่งรีบ มีพื้นที่ธรรมชาติสูง  
> หลีกเลี่ยงจุดที่กำลังหนาแน่น และเชื่อมร้านค้ากับชุมชนที่ยังมีนักท่องเที่ยวน้อย

## Map

ใช้ Map Mockup หรือแผนที่เดิมของโปรเจกต์

แสดง Route:

A → B → C → D

ตัวอย่าง Stops:

1. จุดชมวิว 1715
2. ร้านกาแฟชุมชน
3. หมู่บ้านท้องถิ่น
4. ที่พักหรือจุดชมพระอาทิตย์ตก

## Daily Timeline

### Day 1

- 08:00 จุดชมวิว
- 10:30 ร้านกาแฟชุมชน
- 13:00 อาหารท้องถิ่น
- 15:00 กิจกรรมชุมชน
- 17:30 จุดชมพระอาทิตย์ตก

## UI Behavior

- คลิก Stop แล้ว Highlight จุดบน Map
- Hover/Click Journey Score แสดงคำอธิบาย
- มีปุ่ม “ดู Government Impact”

---

# 4. Government Live Dashboard

## เป้าหมาย

เปลี่ยน Dashboard จากกราฟนิ่งให้เป็นภาพการเคลื่อนไหวของนักท่องเที่ยว

## Main Map

แสดงจังหวัดน่านหรือแผนที่จำลอง

Legend:

- แดง = หนาแน่นสูง
- ส้ม = เริ่มหนาแน่น
- เขียว = ยังรองรับนักท่องเที่ยวได้
- จุด/เส้นเคลื่อนไหว = Journey Movement

## KPI Mock

- Travelers Today: 1,284
- Active Journeys: 327
- Distribution Score: 74/100
- Community Stops: 86
- High Density Areas: 3

## Filters

- วันนี้
- สัปดาห์นี้
- Persona
- พื้นที่
- ฤดูกาล

## AI Alert

หัวข้อ:

> AI Tourism Alert

ข้อความ:

> ปัวมีความหนาแน่นเพิ่มขึ้น 28% ในช่วงบ่าย  
> แนะนำส่งเสริมเส้นทางเวียงสา–นาน้อยสำหรับ Persona กลุ่ม Nature & Culture

## Opportunity Insight

> นาน้อยมีความสนใจเพิ่มขึ้น 18%  
> แต่ Community Capacity ยังรองรับนักท่องเที่ยวได้

## Animation

- Pulse บนจุด Heat Map
- จุดเดินทางเคลื่อนบนเส้น Route
- KPI Counter Animation
- Alert ปรากฏหลังเปิด Dashboard

---

# Demo Flow สำหรับ Pitch

เวลา Demo ไม่เกิน 2 นาที

```text
เปิด Hero
→ กดสร้าง Journey
→ เลือกคำตอบ Persona อย่างรวดเร็ว
→ แสดง AI Processing
→ เปิด Persona Result
→ กด Generate Journey
→ แสดง Map + Score + AI Explanation
→ เปิด Government Dashboard
→ แสดง Heat Map + AI Alert
```

---

# Design Direction

## Style

- Premium
- Modern
- Tourism Intelligence
- Dark transparent glass cards
- Accent สีเขียวของ NAN FLOW
- ใช้ภาพน่านและแผนที่เป็น Visual หลัก

## ห้าม

- Copy UI ของ Airbnb หรือ Strava โดยตรง
- ใส่ Social Feed, Like, Badge หรือ Gamification
- เพิ่ม Feature ใหม่ที่ไม่อยู่ใน Demo Flow
- ทำหน้าเยอะเกินจำเป็น
- ทำ Backend ในวันนี้

---

# Suggested Routes

```text
/
Hero V2

/persona
AI Questions + Persona Result

/journey
AI Journey Map

/government
Government Live Dashboard
```

สามารถทำเป็นหน้าเดียวและใช้ Section/State เปลี่ยนแทน Route ได้ หากโครงสร้างเดิมแก้ยาก

---

# Mock Data

```ts
const persona = {
  name: "Slow Nature Explorer",
  match: 96,
  interests: {
    nature: 45,
    community: 30,
    coffee: 15,
    landmark: 10,
  },
};

const journey = {
  title: "เส้นทางหมอก ชุมชน และกาแฟเมืองปัว",
  match: 96,
  distanceKm: 78,
  durationHours: 7,
  difficulty: "Easy",
  crowd: "Low",
  communityImpact: "High",
};

const government = {
  travelersToday: 1284,
  activeJourneys: 327,
  distributionScore: 74,
  communityStops: 86,
  highDensityAreas: 3,
};
```

---

# Definition of Done

Demo ถือว่าเสร็จเมื่อ:

- Hero มี 2 CTA และไปแต่ละ Flow ได้
- Persona Questions กดเลือกได้
- มี AI Processing State
- แสดง Persona Result
- Generate Journey แล้วเห็น Map, Route, Score และ AI Explanation
- Government Dashboard มี Heat Map Mock, KPI และ AI Alert
- Responsive บน Laptop
- Demo Flow ทำได้ครบภายใน 2 นาที
- Deploy สำเร็จโดยไม่กระทบ V1

---

# Priority

1. Journey Map + Score
2. Government Heat Map
3. Persona AI Experience
4. Hero Polish

ถ้าเวลาไม่พอ ให้ลด Animation ก่อน ห้ามตัด Journey หรือ Government Dashboard
