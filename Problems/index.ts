{
    const formatString = (input: string, toUpper: boolean = true) => {
        if (toUpper) {
            return input.toUpperCase()
        } else {
            return input.toLowerCase()
        }
    }


    const makeUpperOrLower1 = formatString("Hello")
    const makeUpperOrLower2 = formatString("Hello", true)
    const makeUpperOrLower3 = formatString("Hello", false)
    console.log(makeUpperOrLower1)
    console.log(makeUpperOrLower2)
    console.log(makeUpperOrLower3)



    const filterByRating = (items: { title: string; rating: number }[]): { title: string; rating: number }[] => {
        return items.filter(item => item.rating > 4)
    }

    const books = [
        { title: "Book A", rating: 4.5 },
        { title: "Book B", rating: 3.2 },
        { title: "Book C", rating: 5.0 }
    ];

    const highRatedBooks = filterByRating(books)
    console.log(highRatedBooks)


    const concatenateArrays = <T>(...arrays: T[][]): T[] => {
        return ([] as T[]).concat(...arrays);
    }
     

    console.log(concatenateArrays([12], [8], [33]))
    console.log(concatenateArrays(["hello"], ["world"]));


    class Vehicle {
        private make: string;
                year: number;

        constructor(make: string, year: number) {
            this.make = make,
                this.year = year
        }

        getInfo() {
            return `Make: ${this.make}, Year: ${this.year}`
        }
    }

    class Car extends Vehicle {
        private model: string;

        constructor(make: string, year: number, model: string) {
            super(make, year),
                this.model = model
        }

        getModel() {
            return `Model: ${this.model}`
        }
    }

    const myCar = new Car("Toyota", 2020, "Corolla");
    myCar.getInfo();
    myCar.getModel();
    console.log(myCar.getInfo())
    console.log(myCar.getModel())


    const processValue = (value: string | number): number | undefined => {
        if (typeof value === "string") {
            return value.length
        }
        else if (typeof value === "number") {
            return value * 2
        }

    }

    processValue("hello");
    processValue(10);

    console.log(processValue("hello"))
    console.log(processValue(10))


    interface Product {
        name: string;
        price: number;
    }

    const getMostExpensiveProduct = (products: Product[]): Product | null => {
        if(products.length === 0) {
            return null
        }
        const sortProduct = products.sort((a, b) => b.price - a.price)
        return sortProduct[0]
    }

    const products = [
        { name: "Pen", price: 10 },
        { name: "Notebook", price: 25 },
        { name: "Bag", price: 50 }
    ];


    console.log(getMostExpensiveProduct(products))
    console.log(getMostExpensiveProduct([]))

    //  Problem-7
    enum Day {
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    }

    const getDayType = (day: Day): string => {
        if (day >= Day.Monday && day <= Day.Friday) {
            return "Weekday"
        } else {
            return "Weekend"
        }
    }

    getDayType(Day.Monday);  
    getDayType(Day.Sunday);   
    console.log(getDayType(Day.Monday))
    console.log(getDayType(Day.Sunday))


    const squareAsync = async(n: number): Promise<number> => {
                   return new Promise<number>((resolve, reject) => {
                        setTimeout(() => {
                              if(n < 0){
                                return reject(new Error("Negative number not allowed"))
                              }else{
                                return resolve(n * n)
                              }
                        }, 1000)
                   }) 
    }

    squareAsync(5).then(console.log);       
    squareAsync(-4).catch(console.error);    
    

    //
}