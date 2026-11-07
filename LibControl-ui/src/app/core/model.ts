import moment from 'moment';

export class User {
    id!: number;
}

export class Book {
    id!: number;
}

export class Review {
    id!: number;
    book!: any;
    date!: Date;
    rate!: number;
    commentary!: string;
    user: any;

    constructor(user_id: number, book_id: any){
        this.user = new User();
        this.book = new Book();
        this.user.id = user_id;
        this.book.id = book_id;
    }

    static toJson(review: Review): any {
        return {
            id: review.id,
            date: moment(review.date).format('DD/MM/YYYY'),
            rate: review.rate,
            commentary: review.commentary,
            user: { id: review.user.id },
            book: { id: review.book.id }
        }    
    }
}


