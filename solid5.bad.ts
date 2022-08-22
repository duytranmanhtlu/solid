
class BudgetReport {
    public database;
    constructor(database) {
        this.database = database;
    }
    public open(){
        return this.database.get();
    }
    public save(){
        return this.database.insert();
    }
}

class MySQLDatabase {
    // fields
    public get(){
        // get by id
    }
    public insert(){
        // inserts into db
    }
    public update(){
        // update some values in db
    }
    public delete(){
        // delete some records in db
    }
}

// Client
const database = new MySQLDatabase();
const report = new BudgetReport(database);

report.open();