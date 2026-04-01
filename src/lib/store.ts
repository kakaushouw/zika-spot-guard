// Simple in-memory store for demo purposes
export interface Report {
  id: string;
  description: string;
  status: "pending" | "confirmed" | "resolved" | "discarded";
  date: string;
  lat: number;
  lng: number;
  imageUrl?: string;
}

const initialReports: Report[] = [
  { id: "1", description: "Água parada em pneu abandonado na Rua das Flores", status: "confirmed", date: "2026-03-28", lat: -23.55, lng: -46.63, imageUrl: "" },
  { id: "2", description: "Caixa d'água destampada no terreno baldio", status: "pending", date: "2026-03-30", lat: -23.56, lng: -46.64, imageUrl: "" },
  { id: "3", description: "Vaso com água acumulada na calçada", status: "resolved", date: "2026-03-25", lat: -23.54, lng: -46.62, imageUrl: "" },
  { id: "4", description: "Entulho com acúmulo de água", status: "discarded", date: "2026-03-20", lat: -23.555, lng: -46.635, imageUrl: "" },
];

let reports: Report[] = [...initialReports];
let listeners: (() => void)[] = [];

function notify() {
  listeners.forEach((l) => l());
}

export function getReports() {
  return reports;
}

export function addReport(report: Omit<Report, "id" | "status" | "date">) {
  const newReport: Report = {
    ...report,
    id: Date.now().toString(),
    status: "pending",
    date: new Date().toISOString().split("T")[0],
  };
  reports = [newReport, ...reports];
  notify();
  return newReport;
}

export function updateReportStatus(id: string, status: Report["status"]) {
  reports = reports.map((r) => (r.id === id ? { ...r, status } : r));
  notify();
}

export function subscribe(listener: () => void) {
  listeners.push(listener);
  return () => {
    listeners = listeners.filter((l) => l !== listener);
  };
}

export function useReports() {
  const [, setTick] = (await import("react")).useState(0);
  (await import("react")).useEffect(() => {
    return subscribe(() => setTick((t) => t + 1));
  }, []);
  return reports;
}
