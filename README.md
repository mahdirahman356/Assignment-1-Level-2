# TypeScript Basics: Interfaces, Types, and `keyof` (Quick Look)



## Interfaces vs. Types: Think of it This Way

-   **Interfaces:** Mostly for describing how objects *look*. You can add more to them later (they can "merge"). Think of them like blueprints for objects.

    ```typescript
    interface Car {
      model: string;
    }

    interface Car { // Adding more to the Car blueprint
      year: number;
    }

    const myCar: Car = { model: "Sedan", year: 2023 };
    ```

-   **Types:** More like giving a nickname to any kind of data shape (not just objects). They can't be re-declared to add more. Think of them as labels for different kinds of data.

    ```typescript
    type CarModel = string;
    type CarDetails = { model: string; year: number };

    const myCarModel: CarModel = "SUV";
    const anotherCar: CarDetails = { model: "Hatchback", year: 2020 };
    ```

**Simple Rule:** Use `interface` mainly for object shapes. Use `type` for everything else (simpler names for existing types, combinations of types, etc.).

## `keyof`: Getting the "Names" of Things

-   `keyof` helps you get all the property names (like "model", "year") from an object's type. It gives you a list of those names that TypeScript understands.

    ```typescript
    interface Bike {
      brand: string;
      wheels: number;
    }

    type BikeKeys = keyof Bike; // BikeKeys is now "brand" | "wheels"

    function getBikeValue(bike: Bike, key: BikeKeys) {
      return bike[key]; // TypeScript knows 'key' is a valid property of Bike
    }

    const myBike: Bike = { brand: "Mountain", wheels: 2 };
    const bikeBrand = getBikeValue(myBike, "brand"); // Safe!
    // const invalidKey = getBikeValue(myBike, "color"); // TypeScript will complain!
    ```

**Simple Use:** `keyof` lets you safely work with object property names in your code, preventing mistakes.

