export const monthOptions = [
  { value: "January", id: 1 },
  { value: "February", id: 2 },
  { value: "March", id: 3 },
  { value: "April", id: 4 },
  { value: "May", id: 5 },
  { value: "June", id: 6 },
  { value: "July", id: 7 },
  { value: "August", id: 8 },
  { value: "September", id: 9 },
  { value: "October", id: 10 },
  { value: "November", id: 11 },
  { value: "December", id: 12 },
];

export const days31 = Array.from({ length: 31 }, (_, i) => ({ value: i + 1 }));

export const years = [
  { value: "1990", id: 1 },
  { value: "1991", id: 2 },
  { value: "1992", id: 3 },
  { value: "1993", id: 4 },
  { value: "1994", id: 5 },
  { value: "1995", id: 6 },
  { value: "1996", id: 7 },
  { value: "1997", id: 8 },
  { value: "1998", id: 9 },
  { value: "1999", id: 10 },
  { value: "2000", id: 11 },
];

export const posts = [
  {
    meta: {
      comments: 11,
      reposts: 20,
      likes: 10,
      views: 111,
    },
    post: {
      text: "Hey! This is my first tweet.",
      postedBy: {
        userName: "@vijayshree",
        userFullName: "vijayashree k",
      },
    },
  },
];

export const HOME = "home";
export const PROFILE = "profile";
export const CREATE_ACCOUNT = "createAccount";
