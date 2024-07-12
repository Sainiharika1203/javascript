let years=[2004,2000,2003,2008,2005,2006,2020,2024];
let leapyears=years.filter((year)=> year%4==0&&(year%100!=0)||year%400==0)
   document.write(leapyears);

