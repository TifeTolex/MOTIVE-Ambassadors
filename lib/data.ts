/**
 * EDIT THIS FILE to manage ambassador credentials, status cards and commissions.
 * Keep this file server-side: do not import it into client components.
 *
 * IMPORTANT: Replace the sample passwords before putting the site online.
 */
export type AmbassadorStatus = "Active" | "Idle" | "Probation";

export type Ambassador = {
  username: string;
  password: string;
  displayName: string;
  status: AmbassadorStatus;
  statusText: string;
  statusColor: string;
  weeklyCommission: number;
  monthlyCommission: number;
};

export const ambassadors: Ambassador[] = [
  { username: "gbeminiyi", password: "GbeminiyiMotive", displayName: "GBEMINIYI", status: "Active", statusText: "ACTIVE", statusColor: "#24c77a", weeklyCommission: 0, monthlyCommission: 0 },
  { username: "joanna", password: "JoannaMotive", displayName: "JOANNA", status: "Active", statusText: "ACTIVE", statusColor: "#24c77a", weeklyCommission: 0, monthlyCommission: 0 },
  { username: "pecs", password: "PecsMotive", displayName: "PECS", status: "Active", statusText: "ACTIVE", statusColor: "#24c77a", weeklyCommission: 0, monthlyCommission: 0 },
  { username: "pleasanttt", password: "PleasantttMotive", displayName: "PLEASANTTT", status: "Active", statusText: "ACTIVE", statusColor: "#24c77a", weeklyCommission: 0, monthlyCommission: 0 },
  { username: "therhemaokolie", password: "TheRhemaOkolieMotive", displayName: "THE RHEMA OKOLIE", status: "Active", statusText: "ACTIVE", statusColor: "#24c77a", weeklyCommission: 0, monthlyCommission: 0 },
  { username: "saint_xr", password: "Saint_xrMotive", displayName: "SAINT_XR", status: "Active", statusText: "ACTIVE", statusColor: "#24c77a", weeklyCommission: 0, monthlyCommission: 0 },
  { username: "ambassador7", password: "Motive@107", displayName: "Ambassador 7", status: "Active", statusText: "ACTIVE", statusColor: "#24c77a", weeklyCommission: 0, monthlyCommission: 0 },
  { username: "ambassador8", password: "Motive@108", displayName: "Ambassador 8", status: "Active", statusText: "ACTIVE", statusColor: "#24c77a", weeklyCommission: 0, monthlyCommission: 0 },
  { username: "ambassador9", password: "Motive@109", displayName: "Ambassador 9", status: "Active", statusText: "ACTIVE", statusColor: "#24c77a", weeklyCommission: 0, monthlyCommission: 0 },
  { username: "ambassador10", password: "Motive@110", displayName: "Ambassador 10", status: "Active", statusText: "ACTIVE", statusColor: "#24c77a", weeklyCommission: 0, monthlyCommission: 0 },
  { username: "ambassador11", password: "Motive@111", displayName: "Ambassador 11", status: "Active", statusText: "ACTIVE", statusColor: "#24c77a", weeklyCommission: 0, monthlyCommission: 0 },
  { username: "ambassador12", password: "Motive@112", displayName: "Ambassador 12", status: "Active", statusText: "ACTIVE", statusColor: "#24c77a", weeklyCommission: 0, monthlyCommission: 0 },
  { username: "ambassador13", password: "Motive@113", displayName: "Ambassador 13", status: "Idle", statusText: "IDLE", statusColor: "#7b8494", weeklyCommission: 0, monthlyCommission: 0 },
  { username: "ambassador14", password: "Motive@114", displayName: "Ambassador 14", status: "Active", statusText: "ACTIVE", statusColor: "#24c77a", weeklyCommission: 0, monthlyCommission: 0 },
  { username: "ambassador15", password: "Motive@115", displayName: "Ambassador 15", status: "Probation", statusText: "PROBATION", statusColor: "#f0a43a", weeklyCommission: 0, monthlyCommission: 0 }
];

export const currency = "₦";
export const motiveSiteUrl = "https://motive-beige.vercel.app";
export const socials = {
  instagram: "https://www.instagram.com/",
  tiktok: "https://www.tiktok.com/",
  whatsapp: "https://www.whatsapp.com/"
};
