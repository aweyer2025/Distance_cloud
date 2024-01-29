const feet = (value) => (value*0.3048);
const meter = (value) => (value*3.28084);
const mile = (value) => (value*1.60934);
const km = (value) => (value*0.621371)

const calculate = (unit, value) =>{
    if (unit == 'feet'){
        return feet(value)
    }
    if (unit == 'meter'){
        return meter(value)
    }
    if (unit == 'mile'){
        return mile(value)
    }
    if (unit == 'km'){
        return km(value)
    }
};


exports.cloudDisCal = (req,res) => {
    let unit = req.query.unit;
    let value = req.query.value;
    res.status(200).send(`${calculate(unit,value)}`);
};


