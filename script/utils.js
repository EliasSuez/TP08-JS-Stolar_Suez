const stringToDate = (s) =>
   parseInt((new Date().getTime() - new Date(s).getTime()) / 31557600000);

const sumaElementosRegExp = (text, regExp) => {
   return text
      .match(regExp)
      .map((e) => e.substring(1))
      .reduce((a, b) => parseFloat(a) + parseFloat(b));
};

export { stringToDate, sumaElementosRegExp };
