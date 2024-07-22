function compareArrays(arr1, arr2) {
    // Сначала проверим, имеют ли массивы одинаковую длину
    if (arr1.length !== arr2.length) {
        return false;
    }

    // Используем метод every для сравнения элементов на одинаковых индексах
    return arr1.every((value, index) => value === arr2[index]);
}

function getUsersNamesInAgeRange(users, gender) {
    // Фильтруем пользователей по заданному полу
    const filteredUsers = users.filter(user => user.gender === gender);

    // Проверяем, есть ли пользователи после фильтрации
    if (filteredUsers.length === 0) {
        return 0;
    }

    // Получаем массив возрастов отфильтрованных пользователей
    const ages = filteredUsers.map(user => user.age);

    // Вычисляем среднее значение возраста
    const averageAge = ages.reduce((sum, age) => sum + age, 0) / ages.length;

    return averageAge;
}