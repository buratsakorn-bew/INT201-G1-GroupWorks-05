// default parameter
// สร้าง function ที่ขื่อว่า group และ รับค่า Parameter เป็น name ที่ = INT201_S2_G1
function group(name = 'INT201_S2_G1') {
    return name; // return ค่า name 
}

// Test
console.log(group());
console.log(group('JavaScript'));
console.log(group(undefined));
// ถ้าเกิดกำหนดค่าเป็น undefined มันจะออกค่ามาเป็นสิ่งที่เรากำหนดไว้ใน parameter