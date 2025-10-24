import student_db from "../db/DB.js";
import {addStudent, deleteStudent, get_student,get_student_detail} from "../model/StudentModel.js";
import StudentDTO from "../dto/StudentDTO.js";


// ==================== Add Student =======================

const load_student_table = (obj) => {
    $("#student_tbl_body").empty();

    let student_list = get_student();

    student_db.map((obj,index)=>{

        let tbl_row  = `<tr> <td>${obj.f_name}</td> <td>${obj.l_name}</td> <td>${obj.address}</td> <tr>`;
        $("#student_tbl_body").append(tbl_row);

    });

}

$("#student_save_btn").on("click", function () {
    console.log("save btn clicked!!!")
    let f_name = $("#f_name").val();
    let l_name = $("#l_name").val();
    let address = $("#address").val();

    addStudent(f_name,l_name,address);
     student_db.push(student_obj);


    let student_obj = new StudentDTO(f_name, l_name, address);
    student_db.push(student_obj);

    load_student_table();
});

// ==================== Select Student =======================

$("#student_tbl_body").on('click', 'tr', function () {

     tbl_row = $(this).index();

     let student_obj = get_student_detail(tbl_row);


    $("#f_name").val(student_obj.f_name);
    $("#l_name").val(student_obj.l_name);
    $("#address").val(student_obj.address);
});

// ==================== Remove Student =======================

$("#student_delete_btn").on('click', () => {

    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) {


            student_db.splice(tbl_row,1);
            load_student_table();
            $("#student_reset_btn").click();

            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
            });
        }
    });

});

let tbl_row;