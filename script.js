const imageslider = [
    "https://images.unsplash.com/photo-1682687219640-b3f11f4b7234?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1706463629335-d92264bbfd6f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1682695796497-31a44224d6d6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"    
];

let imgslider = document.getElementById("img");
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let currentIndex = 0;

function showimage(i) {
    if (i < 0) {
        currentIndex = imageslider.length - 1;//to jump the 1st image to last one
    } else if (i >= imageslider.length) {
        currentIndex = 0;
    }
    imgslider.src = imageslider[currentIndex];//to jump the 1st image to last one
}

prev.addEventListener("click", () => {
    currentIndex--;//working of previous button
    showimage(currentIndex);
});

next.addEventListener("click", () => {
    currentIndex++;//working of next button
    showimage(currentIndex);
});

showimage(currentIndex);
