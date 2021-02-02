import {capitalize} from '../../utilities'

export  const validate = (values) =>{
    let errors ={};
    let fields= ['name','code','price']
    fields.forEach((field,fieldKey)=>{
        if(!values[field] ){
            errors[field]= capitalize(field) + ' is a Required Field' 
        }
    })
    return errors;
}
