// 1
// const student = { name: "Бат", age: 17, isStudent: true };
//   console.log(student);
// 2
// const fruits = ["Алим", "Банана", "Жүрж"];
// console.log(fruits);
// 3
// const person = {name:"Ану", age:20};
// console.log (person.name)
// 4
// const colors = ["Улаан", "Ногоон" ,"Цэнхэр"] ;
// console.log (colors [0]);
// 5
// const product = { name:"Дэвтэр", price:2500 };
// console.log (product["price"]);
// 6
// const students = ["Бат", "Ану" ,"Болд"];
// console.log (students [1]);
// 7
// const person = {name:"Бат",age:18};
// console.log (person.name + " " +person.age + "настай")
// 8
// const animals = ["Нохой", "Муур","Туулай", "Морь"];
// console.log (animals.length);
// 9
// const numbers = [10, 20, 30, 40, 50];
//     last = numbers.length -1 ;
// console.log (numbers[last]);
// 10
// const student = { name: "Сараа", age: 16, grade: 10 };
//         key = "grade";
// console.log (student[key]);
// 11
// const fruits = ["Алим", "Банана", "Жүрж"];
// fruits[1]="Усан үзэм"
// console.log (fruits);
// 12
// const person = { name: "Болд", age: 17 };
// if (person.age>=18 ) {
//     person.isAdult = true;}
//     else {
//         person.isAdult =false;}
// console.log (person);
// 13
// const books = ["Математик", "Англи хэл"];
// books.push("Программчлал");
// console.log(books);
// 14
// const student = { name:"Ану", age:15};
//     student.grade = "9"
//     console.log (student);
// 15
// const asd = { name: "Тэмүүлэн", score: 100 };
//     if (asd.score >=100)
//     {asd.score +=50;} 
//     else {
//         asd.score +=10;
//     }
//     console.log (asd.score );
// 16
// const items = ["Дэвтэр", "Бал", "Баллуур"];
//       removeditem = items.pop ();
//       console.log (items);
//       console.log (removeditem);
// 17
// const queue = ["Бат", "Ану"];
//       queue.unshift ("Болд")
//       console.log (queue);
// 18
// const lamp = { isOn: false }
//     if (lamp.isOn );{
//         lamp.isOn=false; 
//     console.log ("Гэрлийг унтраалаа.")}
// 19
// const queue = ["Болд", "Бат", "Ану"];
//     firstPerson = queue.shift ();
//     console.log (queue);
//     console.log (firstPerson);
// 20 
// const user = { name: "Бат", isVerified: true, temporaryCode: "ABC123" };
//      if  (user.isVerified) {
//     delete user.temporaryCode;
//      }
//     else {
//         console.log ("Эхлээд бүртгэлээ баталгаажуулна уу ?")
//     }
// //     console.log (user);
// // 21
// const product = { name: "Дэвтэр", price: 2500, quantity: 4 };
//       total = product.price*product.quantity
//         console.log (total);
// 22
// const rectangle = { width: 5, height: 8 };
//         area = rectangle.width*rectangle.height;
//     console.log (rectangle);
//     console.log (area);
// 23
// const scores = { math: 80, english: 90, programming: 100 };
//         total = (scores.math+scores.english+scores.programming)/3 ;
//         console.log (total);
// 24
// const product = { price: 50000, discountPercent: 20 } ;
//      finalPrice = product.price-(product.price*product.discountPercent/100)
//      console.log (finalPrice);
// 25
// const account = { owner: "Болд", balance: 50000 }, withdrawAmount = 60000;
//         if (account.balance-account.withdrawAmount >= false );
//         else {
//             console.log ( "Үлдэгдэл хүрэлцэхгүй байна.")
//         }
//         console.log (account);
// 26 
// const product = { name: "Бал", stock: 0 };
//   console.log(product.stock > 0 ? "Бэлэн байна" : "Дууссан");
// 27 
// const numbers = [15, 25, 10];
//       sum = numbers[0]+numbers[1]+numbers[2] 
//       console.log (sum);
// 28
// const scores = [80, 90, 100];
//     sum = (scores[0]+scores[1]+scores[2])/3;
//     console.log (sum);
// 29
// const customer = { money: 10000 }, product = { price: 8000, stock: 3 };
//  if (customer.money-customer.price >=true );
//  else {
//     console.log ("Авч болно.")
//  }
// 30
// const student = { name: "Сараа", score: 85 } ;
//  if (student.score >=90) {
//     console.log ("Маш сайн")
//  }
//  else if (student.score >=60) {
//     console.log ("Тэнцсэн")
//  }
//  else 
//     console.log ("Тэнцээгүй");
// 31
// const student = { name: "Бат", age: 16 } ;
//        console.log ("age" in student);
//        console.log ("email" in student);
// 32
//  const student = { name: "Болд", address: { city: "Улаанбаатар", district: "Хан-Уул" } };
//  console.log ( student.address.city);
// 33
    // const person = { name: "Ану", address: { city: "Улаанбаатар", district: "Баянзүрх" } } ;
    // console.log (person.address.district);
// 34
    // const student = { name: "Бат", scores: { math: 70, english: 80 } } ;
    //  if ( student.scores.math <80 ) {
    //     student.scores.math+=10 ;
    //  }
    //  else {
    //     console.log ("Нэмэлт оноо шаардлаггүй")
    // }
    // console.log (student.scores.math);
// 35
    // const names = ["Бат", "Ану"];
    //       asd= names [1];
    //       names [0] = names [1];
    //       names [1] = asd;
    //       console.log (names);
// 36
//      const fruits = ["Алим", "Банана", "Жүрж"];
//   if (fruits.includes("Банана")) {
//     console.log("Банана байна");
//   } else {
//     console.log("Банана алга");
//   }
// 37
// const students = ["Бат", "Ану", "Болд", "Сараа"];
//       console.log (students.indexOf ("Болд"));
// 38
// const order = { product: { price: 5000, quantity: 3 }, delivery: { fee: 2500 } };
//   const productTotal = order.product.price * order.product.quantity; // 15000
//   if (productTotal >= 20000) {
//     order.delivery.fee = 0;
//   }
//   order.total = productTotal + order.delivery.fee;
//   console.log(order.total);
// 39
    // const user1 = { name: "Болд", age: 20 },
    //      user2 = { email: "bold@example.com", city: "Улаанбаатар" };
    //      Object.assign ( {},user1,user2);
    //      console.log (user1,user2);
// 40
    // const cart = [] ;
    //   if  ( cart.length === 0 ) {
    //   console.log ("Сагс хоосон") }
    //  else {
    //     console.log ("Сагс хоосон байна.")
    //  } 
// 41
//      const numbers = [35, 20];
//   if (numbers[0] > numbers[1]) {
//     console.log(numbers[0]); 
//   } else if (numbers[1] > numbers[0]) {
//     console.log(numbers[1]);}
// 42
// const students = ["Бат", "Ану"];
//   const newStudent = "Сараа";
//   if (!students.includes(newStudent)) {
//     students.push(newStudent);
//   } else {
//     console.log("Энэ нэр бүртгэлтэй байна");
//   }
//   console.log(students); 
// 43
    // const user1 = { name: "Ану", age: 18 }, 
    //     user2 = { email: "anu@example.com", city: "Улаанбаатар" } ;
    //     user = { ...user1,...user2} ;
    // console.log (user);
// 44
    // const groupA = ["Бат", "Ану"],
    //       groupB = ["Болд", "Сараа"];
    //       allstudent = groupA.concat(groupB);
    // console.log (allstudent);
// 45
//    const original = [10, 20, 30];
//         const copied = [...original];
//         copied[0] = 99;
//         console.log(original); 
//         console.log(copied); 
// 46
    // const numbers = [10, 20, 30, 40, 50];
    //         asd = numbers.slice (1,4) ;
    // console.log (asd);
// 47
    // const user = { name: "Сараа", age: 22, email: "saraa@example.com" };
    //      user2 = (user.name, user.age )
    //      profilename = "Бат";
    // console.log (user.name);
    // console.log (profilename);
// 48
    // const colors = ["Улаан", "Ногоон", "Цэнхэр", "Шар"];
    //         asd = (colors.splice (1));
    // console.log (asd);
// 49
// const days = ["Даваа", "Лхагва"] ;
//     days.splice (1 ,0, "Мягмар");
// console.log (days);
// 50
    // const words = ["Би", "JavaScript", "сурч", "байна."];
    //     asd = (words.join ( " " ));
    // console.log (asd);
// 51
// const students = [{ name: "Бат", score: 75 }, { name: "Ану", score: 90 }]
//         students[0].score +=10;
//         console.log (students [0].score);
//     if (students[1].score >=90) {
//             console.log ("Ану маш сайн");
//         }
//     else {
//         console.log ("Ану хичээгээрэй")
//     }





   



