const Reader = require("../utils/Reader")

class CodeService{
    static AllStudents(students){
        return students
    }
    static StudentsHaveCertificacion(students,haveCertification ){
        const Certificaicon =  students.filter((student)=> student.haveCertification === true )
        return Certificaicon.map(std => std.email)     
    }


}

module.exports = CodeService