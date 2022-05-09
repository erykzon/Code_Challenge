const Reader = require("../utils/Reader")

class CodeService{
    static AllStudents(students){
        return students
    }
    static StudentsHaveCertificacion(students ){
        const Certificaicon =  students.filter((student)=> student.haveCertification === true )
        return Certificaicon.map(std => std.email)     
    }
    static StudentsCredits(students){
        const Over = students.filter((student) => student.credits > 500)
        return Over 
    }
}

module.exports = CodeService