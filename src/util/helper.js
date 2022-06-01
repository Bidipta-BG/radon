const printDate= function(){
    // var date= new Date()
    console.log('Todays date and time is: '+ new Date() + '\n')
};

const printMonth= function(){
    const date=new Date()
    console.log('Current month is: '+ date.getMonth() + '\n')
};

const getBatchInfo= function(){
    console.log('Roadon, W3D1, the topic for today is Nodejs module system')
    console.log('\n')
};

module.exports.Date= printDate
module.exports.Month= printMonth
module.exports.batch= getBatchInfo