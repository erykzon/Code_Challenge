const Reader = require("../utils/Reader")
const Service = require("../services/CodeService")
const base = require("./../../students.json")

const students = Reader.readJsonFile("students.json")
class CodeController {
    static getAllStudents(){
        return Service.AllStudents(students)
    }
    static getStudentsHaveCertificacion(){
        return Service.StudentsHaveCertificacion(students)
    }
    static getStudentsCredits(){
        return Service.StudentsCredits(students)
    }
}

module.exports = CodeController