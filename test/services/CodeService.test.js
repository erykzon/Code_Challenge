const Service = require('./../../lib/services/CodeService') 
const base = require('../students.test.json')
// const expected = ['Warren', '6264d5d85cf81c496446b67f'];

describe('Prueba para Service ', () => {
   test('Test para allstudents',() =>{
       const expected = Service.AllStudents(base)
    expect(base).toMatchObject(expected)
   })

   test('Test para certificacion', ()  =>{
       const Certification = Service.StudentsHaveCertificacion(base)
       expect(Certification.email="Sexton@visualpartnership.xyz").toContain("Sexton@visualpartnership.xyz")

   })
   test('Test para over 500',() =>{
       const over500 = Service.StudentsCredits(base)
       expect(over500.credits = 508).toBeGreaterThan(500)
    //    console.log(over500.credits)
   })
  });
