// Шаг 1: Создаем функцию-конструктор Student
function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = []; // Инициализируем пустой массив для оценок
}

// Шаг 2: Добавляем метод setSubject в прототип Student
Student.prototype.setSubject = function(subjectName) {
    this.subject = subjectName;
};

// Шаг 3: Добавляем метод addMarks с использованием rest параметра
Student.prototype.addMarks = function(...marksToAdd) {
    if (!this.marks) {
        console.log("Студент отчислен и не может получать оценки.");
        return;
    }
    this.marks.push(...marksToAdd);
};

// Шаг 4: Добавляем метод getAverage для расчета среднего арифметического оценок
Student.prototype.getAverage = function() {
    if (!this.marks || this.marks.length === 0) {
        return 0;
    }
    const sum = this.marks.reduce((total, mark) => total + mark, 0);
    return sum / this.marks.length;
};

// Шаг 5: Добавляем метод exclude для исключения студента и установки причины
Student.prototype.exclude = function(reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
};
