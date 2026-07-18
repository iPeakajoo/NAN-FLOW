# CODEX START PROMPT — NAN FLOW V2 VISION DEMO

คุณกำลังทำงานใน Repository ของ NAN FLOW V1

## Mission

สร้าง NAN FLOW V2 Vision Demo สำหรับใช้ Pitch วันนี้ โดยต้องไม่ทำลาย V1

## ก่อนเริ่ม

1. อ่านไฟล์ `NAN_FLOW_V2_DEMO_SPEC.md` ทั้งหมด
2. ตรวจสอบโครงสร้าง Repository
3. สรุป Technology Stack, Routes, Components และ Styling ที่มีอยู่
4. สร้าง Branch ใหม่ชื่อ `v2-vision-demo`
5. ห้ามแก้ Production Branch โดยตรง
6. ห้ามเพิ่ม Backend, Auth, Database หรือ External AI API

## สิ่งที่ต้องสร้าง

- Hero V2
- AI Traveler Persona Flow
- AI Journey Map พร้อม Score และคำอธิบาย
- Government Live Dashboard พร้อม Heat Map Mock และ AI Alert

## Implementation Strategy

- Reuse Component และ Theme จาก V1 ให้มากที่สุด
- ใช้ Mock Data
- ใช้ CSS/SVG/Canvas/Existing Map Library ที่ติดตั้งแล้ว
- หลีกเลี่ยงการเพิ่ม Dependency ใหม่
- หาก Map จริงใช้เวลานาน ให้ใช้ SVG หรือ Background Map Mock
- ทำให้ Demo กดเล่นได้ครบก่อนปรับ Animation

## ลำดับงาน

### Task 1 — Audit
รายงาน:
- Stack
- Routing
- Main Components
- Available Assets
- Risks

### Task 2 — Build Core Flow
สร้าง Flow:
Hero → Persona → Journey → Government

### Task 3 — Polish
เพิ่ม:
- Processing State
- Route Animation
- Heat Map Pulse
- Responsive Layout

### Task 4 — Verify
- Run lint
- Run typecheck
- Run build
- แก้ error ทั้งหมด
- สรุปไฟล์ที่แก้และวิธี Demo

## Guardrails

- ห้ามเพิ่ม Feature นอก Specification
- ห้ามเปลี่ยน Brand Identity ของ NAN FLOW
- ห้าม Copy UI ของ Airbnb หรือ Strava
- ห้ามลบ V1
- ห้ามใช้ข้อมูลจริงหรือกล่าวอ้างว่าเป็น Real-time Data
- ทุกข้อมูลใน Government Dashboard ต้องแสดงว่าเป็น Demo/Simulated Data

เริ่มจาก Task 1 และรายงานแผนก่อนแก้ไฟล์
