// Nome da página da planilha: REGENTES, INGLÊS, FRANCÊS, ED FÍSICA, MÚSICA, ARTES, TEC_INOVACAO, INTEGRAL
const nameClass = 'REGENTES';

// Conta onde ficará as turmas
const emailOwner = 'ef1@liceufranco.g12.br';

// Criação do objeto
function createOneClass(classInfo) {
  let course = Classroom.newCourse();
  course.name = classInfo.name;
  course.section = classInfo.section;
  course.room = classInfo.room;
  course.ownerId = emailOwner;
  course.courseState = "ACTIVE";
  Classroom.Courses.create(course);
}

// Criação da turma
function createClasses() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheetName = sheet.getSheetByName(nameClass);

  const lastRow = sheetName.getLastRow();
  const lastColumn = sheetName.getLastColumn();

  const data = sheetName.getRange(2,1,lastRow-1,lastColumn).getValues();

  data.forEach(column => {
    createOneClass( {
      name: column[0],
      section: column[1],
      room: column[2],
    } );
  })
}
