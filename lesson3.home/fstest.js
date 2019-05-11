var obj = {
    'first-name':"Arthur",
    'last-name': "Vardikyan",
    'age':15,
    'tumo-student': true
}
JSON.stringify(Object.create(null, { x: { age: obj.age, 'first-name': obj["first-name"], 'last-name': obj["last-name"], 'tumo-student': obj["tumo-student"] } }));