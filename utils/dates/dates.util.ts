export const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export const convertDateTimeToDate = (inputDateTime: string | number | Date): string =>  {
  const dateObject = new Date(inputDateTime);
  const year = dateObject.getFullYear();
  const month = String(dateObject.getMonth() + 1).padStart(2, '0'); // Month is zero-based
  const day = String(dateObject.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}