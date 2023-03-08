




export const сheckStaticData = data => data.reduce((acc, cur) => {
    if (acc[cur.label]) {
      
        acc[cur.label] += cur.percentage;
    } else {
        acc[cur.label] = cur.percentage;
    }
    return acc;
}, {});


console.log(result);