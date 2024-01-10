function disableClasses() {

  let turmas = Classroom.Courses.list({
    courseStates: "ACTIVE"
  }).courses;

  for (var i = 0; i < turmas.length; i++) {
    var turma = turmas[i];
    var courseId = turma.id;

    Classroom.Courses.update({
      name: turma.name,
      section: turma.section,
      courseState: "ARCHIVED"
    },courseId)

    Logger.log('Turma arquivada: ' + turma.name);
  }
}
