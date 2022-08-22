// **Open/Closed Principle**

// BAD
const STANDARD_FEE = 100;

class StudentBad {
    public name: string;
    public age: number;
    public studentType: string;

    payFee() {
        if (this.studentType === 'foreign') return STANDARD_FEE * 1.3;
        else if (this.studentType === 'talented') return STANDARD_FEE * 0.8;
        else return STANDARD_FEE;
    }
}