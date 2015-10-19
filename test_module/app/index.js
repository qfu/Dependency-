//This part is for testing purpose

if(ON_ADD){
    require('./src/add.test.js');
}else if(ON_SUB){
    require('./src/subtract.test.js');
}else{
    require('./src/subtract.test.js');
    require('./src/add.test.js');
}



//This part is for dependency purpose
/*var core = require('core_module/src/index');
console.log(core.mul(3,5));
console.log(core.div(3,5));
console.log(core.log(2,2));*/
