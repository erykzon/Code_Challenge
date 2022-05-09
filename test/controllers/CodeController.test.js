const Controller = require('./../../lib/controllers/CodeController')
const Reader = require('./../../lib/utils/Reader')
const students = Reader.readJsonFile('students.json')

describe('Test de Controller', ()=>{
    test('Test para Allusers', ()=>{
        const All = Controller.getAllStudents(students)
        expect(students).toMatchObject(All)
    })
    test('Test para obtener email de estudiantes con certificacion', ()=>{
        const email = Controller.getStudentsHaveCertificacion(students)
        expect(email.email="Sexton@visualpartnership.xyz").toContain("Sexton@visualpartnership.xyz")

    })
    test('Test para over',()=>{
        const over = Controller.getStudentsCredits(students)
        expect(over.credits = 508).toBeGreaterThan(500)
    })

})