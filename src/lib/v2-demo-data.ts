export const v2DemoData = {
  hero: {
    title: "AI Journey ที่เข้าใจคุณ\nและช่วยให้นักท่องเที่ยวไหลไปทั่วน่านอย่างเหมาะสม",
    description:
      "NAN FLOW วิเคราะห์ตัวตน เวลา สภาพอากาศ และความหนาแน่น\nเพื่อสร้างเส้นทางที่เหมาะกับนักท่องเที่ยว พร้อมสร้างโอกาสให้ชุมชน",
    ctas: {
      journey: "สร้าง Journey ของฉัน",
      intelligence: "ดู Tourism Intelligence",
    },
    badges: ["AI Match 96%", "Low Crowd", "High Local Impact"],
  },
  persona: {
    questions: [
      {
        id: "companion",
        label: "เดินทางกับใคร",
        options: ["คนเดียว", "คู่รัก", "ครอบครัว", "กลุ่มเพื่อน"],
      },
      {
        id: "days",
        label: "มีเวลากี่วัน",
        options: ["1 วัน", "2 วัน", "3 วัน"],
      },
      {
        id: "interest",
        label: "สนใจอะไร",
        options: ["ธรรมชาติ", "วัฒนธรรม", "คาเฟ่และอาหาร", "ชุมชน", "ผจญภัย"],
      },
      {
        id: "pace",
        label: "จังหวะการเที่ยว",
        options: ["สบาย ๆ", "สมดุล", "เก็บหลายจุด"],
      },
      {
        id: "crowd",
        label: "ต้องการหลีกเลี่ยงคนเยอะหรือไม่",
        options: ["ใช่", "ไม่จำเป็น"],
      },
    ],
    processingSteps: [
      "วิเคราะห์ความสนใจ",
      "วิเคราะห์เวลาและจังหวะ",
      "ตรวจสอบสภาพอากาศ",
      "ตรวจสอบความหนาแน่น",
      "ค้นหาโอกาสสนับสนุนชุมชน",
    ],
    result: {
      name: "Slow Nature Explorer",
      description:
        "คุณชอบธรรมชาติ พื้นที่สงบ และการเดินทางแบบไม่เร่งรีบ\nเหมาะกับเส้นทางระดับง่ายที่เชื่อมคาเฟ่และชุมชนท้องถิ่น",
      profile: [
        { label: "Nature", value: 45 },
        { label: "Community", value: 30 },
        { label: "Coffee & Food", value: 15 },
        { label: "Landmark", value: 10 },
      ],
      cta: "สร้าง AI Journey จาก Persona นี้",
    },
  },
  journey: {
    title: "เส้นทางหมอก ชุมชน และกาแฟเมืองปัว",
    summary:
      "Journey นี้ตรงกับ Persona ของคุณ 96%\nเหมาะกับการเดินทางแบบไม่เร่งรีบ หลีกเลี่ยงจุดที่กำลังหนาแน่น\nและเชื่อมร้านค้ากับชุมชนที่ยังมีนักท่องเที่ยวน้อย",
    metrics: [
      { label: "AI Match", value: "96%" },
      { label: "Distance", value: "78 km" },
      { label: "Duration", value: "7 hr" },
      { label: "Difficulty", value: "Easy" },
      { label: "Crowd", value: "Low" },
      { label: "Community Impact", value: "High" },
    ],
    stops: [
      { id: "a", letter: "A", name: "จุดชมวิว 1715", time: "08:00", x: 14, y: 28 },
      { id: "b", letter: "B", name: "ร้านกาแฟชุมชน", time: "10:30", x: 38, y: 40 },
      { id: "c", letter: "C", name: "หมู่บ้านท้องถิ่น", time: "13:00", x: 60, y: 58 },
      { id: "d", letter: "D", name: "จุดชมพระอาทิตย์ตก", time: "17:30", x: 82, y: 31 },
    ],
    timeline: [
      { time: "08:00", label: "จุดชมวิว" },
      { time: "10:30", label: "ร้านกาแฟชุมชน" },
      { time: "13:00", label: "อาหารท้องถิ่น" },
      { time: "15:00", label: "กิจกรรมชุมชน" },
      { time: "17:30", label: "จุดชมพระอาทิตย์ตก" },
    ],
  },
  government: {
    header: "Tourism Intelligence — Nan Province",
    badge: "Simulated Data",
    filters: ["วันนี้", "สัปดาห์นี้", "Persona", "พื้นที่"],
    activeFilterLabel: "Filter Demo",
    kpis: [
      { label: "Travelers Today", value: "1,284" },
      { label: "Active Journeys", value: "327" },
      { label: "Distribution Score", value: "74/100" },
      { label: "Community Stops", value: "86" },
      { label: "High Density Areas", value: "3" },
    ],
    alert:
      "ปัวมีความหนาแน่นเพิ่มขึ้น 28% ในช่วงบ่าย\nแนะนำส่งเสริมเส้นทางเวียงสา–นาน้อย\nสำหรับ Persona กลุ่ม Nature & Culture",
    opportunity:
      "นาน้อยมีความสนใจเพิ่มขึ้น 18%\nและ Community Capacity ยังรองรับนักท่องเที่ยวได้",
    mapLegend: [
      { label: "หนาแน่นสูง", tone: "high" },
      { label: "เริ่มหนาแน่น", tone: "medium" },
      { label: "ยังรองรับได้", tone: "low" },
    ],
    mapPoints: [
      { id: "nan", name: "เมืองน่าน", x: 23, y: 32, tone: "high" },
      { id: "pua", name: "ปัว", x: 42, y: 24, tone: "high" },
      { id: "bokluea", name: "บ่อเกลือ", x: 60, y: 42, tone: "medium" },
      { id: "wiangsa", name: "เวียงสา", x: 36, y: 60, tone: "low" },
      { id: "nanoy", name: "นาน้อย", x: 67, y: 66, tone: "low" },
    ],
  },
} as const

export type V2Question = (typeof v2DemoData.persona.questions)[number]
export type V2JourneyStop = (typeof v2DemoData.journey.stops)[number]
export type V2GovernmentFilter = (typeof v2DemoData.government.filters)[number]
export type V2GovernmentMapPoint = (typeof v2DemoData.government.mapPoints)[number]
