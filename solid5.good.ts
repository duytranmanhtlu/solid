interface DatabaseInterface {
    get(): void;
    insert(): void;
    update(): void;
    delete(): void;
}

class MySQLDatabase implements DatabaseInterface {
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

class MongoDB implements DatabaseInterface {
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

// Client
const mysql = new MySQLDatabase();
const report_mysql = new BudgetReport(mysql);

report_mysql.open();

const mongo = new MongoDB();
const report_mongo = new BudgetReport(mongo);

report_mongo.open();