//Higther Order Function 
// function ที่เช็คอายุของแต่ละคนในกลุ่มโดยที่ ให้หาคนที่มีอายุมากกว่าหรือเท่ากับ 16 

let group1 = [{id:1 , name: 'Pataradanai', age:20 },
              {id:2 , name: 'Pichaya', age:19},
              {id:3 , name: 'Paramat', age:12},
              {id:4 , name: 'Buratsakorn', age:16},
              {id:5 , name: 'Wareewan', age:19},
              {id:6 , name: 'Wajanapnap', age:22} ];

function filterAge(array,func){ // สร้างฟังก์ชั่นที่รับ parameter สองตัวโดยที่ตัวแรกไว้รับตัวแปรที่เป็น Array ตัวที่สองเป็น Function
    const ans = []; //สร้างตัวแปรที่เป็น Array ใหม่มารอรับ
    for (let i = 0; i < array.length; i++){ //ลูปค่าใน Array ปกติ
        if(func(array[i])){ // เช็คเงื่อนไขโดยให้เอา parameter ที่เป็น Function มารับโดยเช็คเงื่อนไข index ของ array ในแต่ละรอบ
            ans.push(array[i]); //เมื่อเช็คแล้วเงื่อนไขเป็น True ให้ push ค่า array เข้าไปใน array ใหม่ที่เตรียมไว้
        }
    }
    return ans; // return array ที่เช็คค่าได้ออก
}
console.log(filterAge(group1, group => group.age <= 16)); 
//แสดงผลค่า function filterAge โดยวิธีการใช้จะเหมือนกับ foreach โดยที่ parameter ตัวแรกใส่ค่าชุดข้อมูล Array ที่ต้องการหา
//parameter ตัวที่สองจะใส่เป็นเงื่อนไขของฟังก์ชั่นเป็น callback function 
