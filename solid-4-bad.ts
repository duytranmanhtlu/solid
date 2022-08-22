// **Interface Segregation Principle**

// BAD

interface InfStudy {
  studyEnglish();

  studyMath();

  studyFrench();
}

class NormalStudentBad implements InfStudy {
  studyEnglish() {

  }

  studyMath() {

  }

  studyFrench() {
    return 0;
  }
}

class AdvancedStudentBad implements InfStudy {
  studyEnglish() {}

  studyMath() {}

  studyFrench() {
  
  }
}

