/*  
flow 
1. from dash home  to value passed to the dynamci card (statCard) then in that card 
2. want to show chart based on data so data passed from dash home to that 
3. from card to customer chart and customer chart return to statcard itself again 

*/
export const dashStats = [
  {
    id: 1,
    title: "Students",
    value: "1,240",
    growth: "+12%",
    type:"bar",
    data: [
      { month: "Jan", value: 500 },
      { month: "Feb", value: 370 },
      { month: "Mar", value: 950 },
      { month: "Apr", value: 540 },
      { month: "May", value: 940 },
      { month: "June", value: 340 },
      { month: "July", value: 740 },
    ],
  },
  {
    id: 2,
    title: "Courses",
    value: "320",
    growth: "+5%",
    type:"line",
    data: [
      { month: "Jan", value: 50 },
      { month: "Feb", value: 20 },
      { month: "Mar", value: 114 },
      { month: "Apr", value: 190 },
      { month: "May", value: 940 },
      { month: "June", value: 340 },
      { month: "July", value: 740 },
    ],
  },
  {
    id: 3,
    title: "Faculty",
    value: "85",
    growth: "+3%",
    type:"bar",
    data: [
      { month: "Jan", value: 20 },
      { month: "Feb", value: 30 },
      { month: "Mar", value: 25 },
      { month: "Apr", value: 35 },
      { month: "May", value: 40 },
      { month: "June", value: 140 },
      { month: "July", value: 70 },
    ],
  },
  {
    id: 4,
    title: "Revenue",
    value: "₹65,000",
    growth: "+18%",
    type:"line",
    data: [
      { month: "Jan", value: 10000 },
      { month: "Feb", value: 15000 },
      { month: "Mar", value: 12000 },
      { month: "Apr", value: 50000 },
      { month: "May", value: 12000 },
      { month: "June", value: 340000 },
      { month: "July", value: 74000 },
      { month: "August", value: 30000}
    ],
  },
];