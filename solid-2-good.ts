const standardFee = 100;

class Student {
    public name: string;
    public age: number;

    payFee() {
        return standardFee;
    }
}

class AdvancedStudent extends Student {
    payFee() {
        return standardFee * 0.8;
    }
}

class ForeignStudent extends Student {
    payFee() {
        return standardFee * 1.3;
    }
}