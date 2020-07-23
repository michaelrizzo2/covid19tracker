import axios from "axios";

const url="https://covid19.mathdor.id/api";

export const fetchData= async (country) =>{
    let changeAbleurl=url;
    if (country)
    {
        changeAbleurl=`${url}/countries/${country}`
    }

    try{
        const{
            data:{confirmed,recovered,deaths,lastupdate},

        }=await axios.get(changeAbleurl)
    return {confirmed,recovered,deaths,lastupdate}
    }

    catch(error)
    {
        console.log(error)
    }
    


}

export const fetchDailyData=async() => {
    try{
        const {data} =await axios.get(`${url}/daily`);
        const modifiedData=data.map(dailyData => ({confirmed:dailyData.confirmed.total,recovered:dailyData.recovered.total,deaths:dailyData.deaths.total,date:dailyData.reportDate}));
        return modifiedData;
    
    }
catch (error){}

};

export const fetchCountries = async () => {
try {
const {
    data: { countries },
    } = await axios.get(`${url}/countries`);
    return countries.map((country) => country.name);
    } catch (error) {
    console.log(error);
}
};