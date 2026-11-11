import moment from 'moment';

export class User {
    id!: number;
    name!: string;
    email!: string;
    password!: string;
    active!: true;

    static toJson(user: User): any{
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            password: user.password,
            active: user.active
        }
    }
}

export class Book {
    id!: number;
    name!: string;
    author!: string;
    release_date!: number;
    category!: 'NACIONAL';
    rated!: number;
    cover!: string;

    static toJson(book : Book): any{
        return {
            id: book.id,
            name: book.name,
            author: book.author,
            release_date: book.release_date,
            category: book.category,
            rated: book.rated,
            cover: book.cover
        }
    }
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


