export const helper = () => {};

export const getFormattedDate = (date: string) => {
  let monthList = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  let dateTime = new Date(date);

  let fullYear = dateTime.getFullYear();
  let month = dateTime.getMonth();
  let day = dateTime.getDate();
  let dayString = String(day);
  if (day < 10 && day > 0) {
    dayString = `0${day}`;
  }

  let hour = dateTime.getHours();
  let minute = dateTime.getMinutes();

  return `${dayString} ${monthList[month]} ${fullYear} ${hour}:${minute}`;
};

//const emailRegex = /\S+@\S+\.\S+/;
// const validateEmail = (event: { target: { value: any } }) => {
//   const email = event.target.value;
//   if (emailRegex.test(email)) {
//     setIsValid(true);
//     setMessage("You Just Entered a Valid Email!");
//   } else {
//     setIsValid(false);
//     setMessage("Please Enter a Valid Email!");
//   }
// }
