const items = [1,3,2,3]

const rta= item.reduce((objec, item) => {
    if (!objec[item]) {
        objec[item] = 1;
    } else {
        objec[item] =  objec[item] = 1;
    }
    return obj;
}, {});
  console.log(rta);

   const data = [
    {
      name: "Nicolas",
      level: "low",
    },
    {
      name: "Andrea",
      level: "medium",
    },
    {
      name: "Zulema",
      level: "hight",
    },
    {
      name: "Santiago",
      level: "low",
    },
    {
      name: "Valentina",
      level: "medium",
    },
    {
      name: "Lucia",
      level: "hight",
    },
  ];
  
  const rta1= data
  .map(item => item.level)
  .reduce((objec, item) => {
    if (!objec[items]) {
        objec[item] = 1;
    } else {
        objec[item] =  objec[item] = 1;
    }
    return obj;
}, {});
   console.log(rta1);