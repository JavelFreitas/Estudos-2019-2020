window.addEventListener('load', () => {
    let vector = [1, 2, 3, 4];
    let index = 0;
    let interval = setInterval(() => {
        if(index >=vector.length){
            this.clearInterval(interval);
        }

        if(index === 2){
            setTimeout(() => {
                console.log("Hello");
            }, 50);
        }
        console.log(vector[index]);
        index++;
    }, 200);
});