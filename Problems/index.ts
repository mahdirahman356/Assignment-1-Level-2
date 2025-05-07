{
    // Problem-1
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


    // problem-2

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

    //  Problem-3

    const concatenateArrays = <T>(...arrays: T[][]): T[] => {
                 return [].concat(...arrays)
    }
    const array: string[] =   concatenateArrays([12],[8],[33]) 
    console.log(array)

    //
}