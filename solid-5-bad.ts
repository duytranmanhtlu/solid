class DatabaseBad {
    public save(orderId: number):void {
        console.log('Saved!');
    }
}

class LoggerBad {
    public logInfo(info: string):void {
        console.log(info);
    }
}

class EmailSenderBad {
    public sendEmail(userId: number):void {
        console.log(`Sent: ${userId}`)
    }
}

class Cart {
    public checkOut(orderId: number, userId: number): void {
        const db = new DatabaseBad();
        db.save(orderId);

        const log = new LoggerBad();
        log.logInfo('Order has been checkout');

        const es = new EmailSenderBad();
        es.sendEmail(userId);
    }
}