const stringToDate = (s) =>
   parseInt((new Date().getTime() - new Date(s).getTime()) / 31557600000);

export { stringToDate };
