// Nome da página: REGENTES, INGLÊS, FRANCÊS, ED_FÍSICA, MÚSICA
const sheetName = 'FRANCÊS'
const emailOwner = ' ';

// Criação do objeto
function createOneClass(classInfo) {
  let course = Classroom.newCourse();
  course.name = classInfo.name;
  course.section = classInfo.section;
  course.ownerId = emailOwner;
  course.courseState = "ACTIVE";
  Classroom.Courses.create(course);
}

// Criação da turma
function createClasses() {

  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);

  const lastRow = sheet.getLastRow();
  const lastColumn = sheet.getLastColumn();

  const data = sheet.getRange(2,1,lastRow-1,lastColumn).getValues();

  data.forEach(column => {
    createOneClass( {
      name: column[0],
      section: column[1]
    } );
  })
  
}
