interface IDatabase {
    save(orderId: number):void;
}

interface ILogger {
    logInfo(info: string):void;
}

interface IEmailSender {
    sendEmail(userId: number):void;
}

class Database implements IDatabase {
    public save(orderId: number):void {}
}

class Logger implements ILogger {
    public logInfo(info: string): void{}
}

class EmailSender implements IEmailSender {
    public sendEmail(userId: number):void{}
}

class Card {
    public checkOut(orderId: number, userId: number):void {
        const db: IDatabase = new Database();
        db.save(orderId);

        const log: ILogger = new Logger();
        log.logInfo("Order has been checkout");

        const es: IEmailSender = new EmailSender();
        es.sendEmail(userId);
    }
}