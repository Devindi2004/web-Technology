import student_db  from "../db/DB.js";
import StudentDTO from "../dto/StudentDTO";


//===================Add Student============================

const addStudent = (f_name,l_name,address) => {
    let student_obj = new StudentDTO(f_name, l_name, address);
    student_db.push(student_obj);
}


//===================Delete Student============================

const deleteStudent = (index) => {
    student_db.splice(index,1);
}


//===================Get Student============================

const get_student = () => {
    return student_db;

}

//===================Get Student============================

 const get_student_detail = () => {
    return student_db;

}


//===================Update Student============================


export {addStudent, deleteStudent, get_student,get_student_detail};
