const students = [
    {
        name:"Flavia",
        firstNote: 5,
        secondNote: 4,
    },
    {
        name: "Diego",
        firstNote: 10,
        secondNote: 10,
    },
    {
        name: "Vitoria",
        firstNote: 8,
        secondNote: 9,
    },
    {
        name:"Ana",
        firstNote: 3,
        secondNote: 5,
    }
]

function average(firstNote,secondNote) {
    return (firstNote + secondNote)/2
}

 

 function printStudentNote(student) {
     return `A média do(a) aluno(a) ${student.name} é 
     ${average(student.firstNote,student.secondNote)}`
 }

 for(let student of students) {
     let averageStudent = printStudentNote(student)
     alert(averageStudent)
 }

 
