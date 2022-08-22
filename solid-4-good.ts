// Good
interface InfCommonStudy {
    studyEnglish();
    studyMath();
}

interface InfAdvancedStudy {
    studyFrench();
}

interface InfNormalStudy {
    studyPhilosophy();
}

class NormalStudent implements InfCommonStudy, InfNormalStudy {
    studyEnglish() {
        // study this way
    }

    studyMath() {
    // study this way
    }
    

    studyPhilosophy() {
    //study this way
    }
}

class AdvancedStudent implements InfCommonStudy, InfAdvancedStudy {
    studyEnglish() {
    // study that way
    }

    studyMath() {
    // study that way
    }

    studyFrench() {
    // study that way
    }
}