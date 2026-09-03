export interface HoursLine {
  label: string;
  time: string;
}

export interface BranchHours {
  weekdays: string;
  saturday: string;
  sunday: string;
  /** When set, replaces the standard Mon–Fri / Sat / Sun lines */
  custom?: HoursLine[];
}

export function getBranchHoursLines(hours: BranchHours): HoursLine[] {
  if (hours.custom?.length) return hours.custom;
  return [
    { label: "Mon–Fri", time: hours.weekdays },
    { label: "Saturday", time: hours.saturday },
    { label: "Sunday", time: hours.sunday },
  ];
}

export function formatBranchHoursSummary(hours: BranchHours): string {
  return getBranchHoursLines(hours)
    .map((line) => `${line.label} ${line.time}`)
    .join(" · ");
}

export interface Branch {
  id: string;
  name: string;
  full: string;
  address: string;
  query: string;
  telephone?: string;
  voipTelephone?: string;
  mobile?: string;
  email: string;
  hours: BranchHours;
  offer?: string;
}

export const branches: Branch[] = [
  {
    id: "arundel-village",
    name: "Arundel Village",
    full: "Optinova Eye Care Arundel Village",
    address: "Shop S42 Arundel Village 1st Floor, 51 Quorn Ave Mount Pleasant, Harare",
    query: "51 Quorn Avenue, Arundel Village, Mount Pleasant, Harare",
    telephone: "(024) 2792547",
    mobile: "0719543248",
    email: "arundel@optinova.co.zw",
    hours: { weekdays: "08:00–17:00", saturday: "09:00–13:00", sunday: "Closed" },
    offer: "Free screening",
  },
  {
    id: "avondale",
    name: "Avondale",
    full: "Optinova Eye Care Avondale",
    address: "9 Lonsdale Avenue, Avondale, Harare",
    query: "9 Lonsdale Avenue, Avondale, Harare",
    telephone: "(024) 2791771 / 72",
    mobile: "0719543828",
    email: "avondale@optinova.co.zw",
    hours: { weekdays: "08:00–17:00", saturday: "09:00–13:00", sunday: "Closed" },
  },
  {
    id: "borrowdale",
    name: "Borrowdale",
    full: "Optinova Eye Care Borrowdale",
    address: "Shop 79 Sam Levy's Village, Borrowdale, Harare",
    query: "Shop 79 Sam Levy's Village, Borrowdale, Harare",
    telephone: "(024) 2886477",
    mobile: "0719543244",
    email: "borrowdale@optinova.co.zw",
    hours: { weekdays: "08:00–17:00", saturday: "09:00–13:00", sunday: "Closed" },
  },
  {
    id: "chitungwiza",
    name: "Chitungwiza",
    full: "Optinova Eye Care Chitungwiza",
    address: "Shop 28B Town Centre, Chitungwiza",
    query: "Chitungwiza Town Centre, Chitungwiza",
    telephone: "(02421) 27013",
    mobile: "0719542914",
    email: "ctc@optinova.co.zw",
    hours: { weekdays: "08:00–17:00", saturday: "09:00–13:00", sunday: "Closed" },
  },
  {
    id: "eastgate",
    name: "Eastgate",
    full: "Optinova Eye Care Eastgate Mall",
    address: "Eastgate Shopping Centre, First Floor, Harare",
    query: "Eastgate Shopping Centre, Harare",
    telephone: "(024) 2797555",
    mobile: "0719542920",
    email: "eastgate@optinova.co.zw",
    hours: { weekdays: "08:00–17:00", saturday: "09:00–13:00", sunday: "Closed" },
  },
  {
    id: "greenfields",
    name: "Greenfields",
    full: "Optinova Eye Care Greenfields",
    address: "Shop 9 Greenfields Mall, Belvedere, Harare",
    query: "Greenfields Mall, Belvedere, Harare",
    voipTelephone: "08688008806",
    email: "greenfields@optinova.co.zw",
    hours: { weekdays: "08:00–17:00", saturday: "09:00–13:00", sunday: "Closed" },
  },
  {
    id: "greenwood-park",
    name: "Greenwood Park",
    full: "Optinova Eye Care Greenwood Park",
    address: "175 Fife Avenue, Harare",
    query: "175 Fife Avenue, Harare",
    telephone: "(024) 700289 / 702793",
    email: "specs@gpeyecentre.com",
    hours: { weekdays: "08:00–17:00", saturday: "Closed", sunday: "Closed" },
  },
  {
    id: "highland-park",
    name: "Highland Park",
    full: "Optinova Eye Care Highland Park",
    address: "Suite 7 Highland Park Mall, Highlands, Harare",
    query: "Highland Park Mall, Highlands, Harare",
    voipTelephone: "08677210747",
    email: "highlands@optinova.co.zw",
    hours: { weekdays: "09:00–18:00", saturday: "09:00–13:00", sunday: "Closed" },
  },
  {
    id: "leopold-takawira",
    name: "Leopold Takawira",
    full: "Optinova Eye Care Leopold Takawira",
    address: "BB House South Wing, 125 Leopold Takawira Street, Harare",
    query: "125 Leopold Takawira Street, Harare",
    telephone: "(024) 2710121 / 2710150 / 2710165",
    mobile: "0719543829",
    email: "takawira@optinova.co.zw",
    hours: { weekdays: "08:00–17:00", saturday: "09:00–13:00", sunday: "Closed" },
  },
  {
    id: "newlands",
    name: "Newlands",
    full: "Optinova Eye Care Newlands",
    address: "Shop 2 Newlands Building, Newlands Shopping Centre, Harare",
    query: "Newlands Shopping Centre, Harare",
    telephone: "(024) 2795172",
    mobile: "0719543091",
    email: "newlands@optinova.co.zw",
    hours: { weekdays: "08:00–17:00", saturday: "09:00–13:00", sunday: "Closed" },
  },
  {
    id: "ngezi",
    name: "Ngezi",
    full: "Optinova Eye Care Zimplats Ngezi",
    address: "Ngezi Platinum Mine, Selous",
    query: "Ngezi Platinum Mine, Selous, Zimbabwe",
    mobile: "0771519125",
    email: "ngezi@optinova.co.zw",
    hours: {
      weekdays: "Closed",
      saturday: "Closed",
      sunday: "Closed",
      custom: [
        { label: "Wednesday", time: "09:00–16:00" },
        { label: "All other days", time: "Closed" },
      ],
    },
  },
];
