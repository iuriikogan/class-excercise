class Human {
    constructor(age, sex, marital_status, children){
    this.age = age;
    this.sex = sex;
    this.marital_status = marital_status
    this.children = children
    }
}

class Candidate extends Human {
    constructor(degree, work_history) {
        super(age, sex, marital_status, children)
        this.degree = degree;
        this.work_history = work_history;
    }
}

let jon = new Candidate(29, 'male', 'single', 0, 'BSc', '10 years')

console.log(jon);