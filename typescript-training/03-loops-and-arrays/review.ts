let reviews: number[] = [5, 5, 4.5, 1, 3];

let sum: number = 0;

for (let i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    sum += reviews[i];
}

let average: number = sum / reviews.length;
console.log("Review average = " + average);