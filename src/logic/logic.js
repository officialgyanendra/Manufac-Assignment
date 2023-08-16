
export const processData = (data) => {

    let meanArrList = [];
    let gammaMeanArrList = [];
    let medianArrayList = [];
    let gammaMedianArrayList = [];
    let modeArraylist = [];
    let gammaModeArraylist = [];
    let alchohalType = []
    const separatedArrays = {};

    //Creating object of array based on Alchohal
    data.forEach(item => {
        const category = item.Alcohol;
        if (!separatedArrays[category]) {
            separatedArrays[category] = [];
        }
        separatedArrays[category].push(item);
    });

     //Calculating mean 

    const mean = (val, type) => {
        const flavanoidsMeanValue = val.reduce((a,b)=>parseFloat(a)+parseFloat(b));
        const actualMean = flavanoidsMeanValue / (val.length);
        if(type!=='gamma'){
            return meanArrList.push(actualMean);
        }else {
            return gammaMeanArrList.push(actualMean);
        }
    }
    //Calculating median 

    const median = (val, type) => {
        let medianResult;
        const sortFlav = val.sort((a, b) => parseFloat(a) - parseFloat(b));
        const middleIndex = Math.floor((sortFlav.length) / 2);
        //For even length of array
        if (sortFlav.length % 2 === 0) {
            medianResult = ((sortFlav[middleIndex ] + sortFlav[middleIndex + 1]) / 2);
            if(type!=='gamma'){
                return medianArrayList.push(medianResult)
            }else{
                return gammaMedianArrayList.push(medianResult)
            }
        } 
        //For odd Length of array
        else {
            medianResult = (sortFlav[middleIndex+1]);
            if(type!=='gamma'){
                //Return for Flavanoids
                return medianArrayList.push(parseFloat(medianResult));
            }else{
                //Return for gamma
                return gammaMedianArrayList.push(parseFloat(medianResult))
            }
        }
    }
    //Calculating Mode 

    const mode = (val, type) => {
        let max = 0, count = 0;
        for (let alcohol of val) {
            if (mode[alcohol]) {
                mode[alcohol]++;
            } else {
                mode[alcohol] = 1;
            }

            if (count < mode[alcohol]) {
                max = alcohol;
                count = mode[alcohol];
            }
        }
        if(type!=='gamma'){
           return modeArraylist.push(max);
        }else {
            return gammaModeArraylist.push(max);
        }
    }
   
    // Calculating mean, median and mode for Flavanoids and Gamma on the basis Alchohal type

    Object.keys(separatedArrays).forEach((category) => {
        alchohalType.push(category)
        const itemsInCategory = separatedArrays[category];
        const FlavanoidsArray = [];
        itemsInCategory.map((el)=> FlavanoidsArray.push(el.Flavanoids))
        mean(FlavanoidsArray, '');
        median(FlavanoidsArray, '');
        mode(FlavanoidsArray, '');

        let gammaArray = itemsInCategory.map((e)=> {
            let gammaValue = (e.Ash*e.Hue)/e.Magnesium
            return (gammaValue);
        })
        mean(gammaArray,"gamma");
        median(gammaArray,"gamma");
        mode(gammaArray,"gamma");
    })
    
    // Returning an array of Flavanoids and Gamma for mean, edian and mode accordingly

    return [alchohalType, meanArrList, medianArrayList, modeArraylist, gammaMeanArrList, gammaMedianArrayList, gammaModeArraylist];
}