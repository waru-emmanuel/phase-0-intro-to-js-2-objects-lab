// Write your solution in this file!

const employee = {
    //key:'value'
    name : 'Sam',
    streetAddress :'11 Broadway' 
};
function updateEmployeeWithKeyAndValue(employee,key,value){
   const newEmployee = {
    ...employee,
    [key]:value
   };
  return newEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    //monday.salad = "Caesar",
    //circle["diameter"] = 10;
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee,key){
    const newEmployee = {
        ...employee
        }
delete newEmployee[key];
return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee[key];
    return employee;
}