// Add Student of Teacher
function addPeople() {
  let infoClasses = Classroom.Courses.list().courses;

  infoClasses = infoClasses.filter(c => (c.courseState === 'ACTIVE' && c.section === 'P1_D / 2023'));

  infoClasses.map((c) => {
    try {
      Classroom.Invitations.create({
        "courseId": c.id,
        "userId": "2024500121@aluno.lfb.g12.br",
        "role": "STUDENT"
      })
      Logger.log("Sucesso ao adicionar na turma: " + c.name + " - " + c.section)
    } catch(e) {
      Logger.log(e)
      Logger.log("Erro ao adicionar")
    }
  })
}
