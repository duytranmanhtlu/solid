interface OfficialEmployee {
    checkAttendance();
}
class Employee {
    public working() {
        console.log('I am working!');
    }
}

class Developer extends Employee implements OfficialEmployee {
    checkAttendance(){
        console.log('checked');
    }
}

class Cleaner extends Employee {

}