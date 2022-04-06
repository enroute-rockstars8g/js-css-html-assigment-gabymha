const n_fibonacci = (n) => {
    if (n == 0){
        return 1
    } else if (n == 1){
        return 1
    } else{
        return n_fibonacci(n-1) + n_fibonacci(n-2)
    }
}

const fibonacci_wrapper = () => {
    var n = document.getElementById("number").value;
    
    if (n < 0){
        alert("Value must be 0 or above.")
        return 
    }else if (n > 43){
        alert("For this page integrity, we cannot compute fibonacci above 43.\nThanks for the understanding!")
        return 
    }

    var r = n_fibonacci(n)

    window.alert("Fibonacci number for " + n + " is " + r);
}

// console.log( n_fibonacci(4)) ;

const n_factorial = (n) => {
    if (n == 0){
        return 1
    } else if (n == 1){
        return 1
    } else{
        var valorfactorial = 1
        for (let i = 1; i <=n; i++) {
            valorfactorial*=i
          }
        return valorfactorial
    }
}

const factorial_wrapper = () => {
    var n = document.getElementById("number1").value;
    
    if (n < 0){
        alert("Value must be 0 or above.")
        return 
    }else if (n > 10){
        alert("For this page integrity, we cannot compute factorial number above 10.\nThanks for the understanding!")
        return 
    }

    var r = n_factorial(n)
    window.alert("Factorial number for " + n + " number is " + r);
}


// console.log( n_factorial(4)) ;



