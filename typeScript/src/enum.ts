enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green;

// By default, enums begin numbering their members starting at 0.
// You can change this by manually setting the value of one of its members.
// For example, we can start the previous example at 1 instead of 0:

// enum Color {
//   Red = 1,
//   Green,
//   Blue,
// }
// let c: Color = Color.Green;

// Or, even manually set all the values in the enum:

// enum Color {
//   Red = 1,
//   Green = 2,
//   Blue = 4,
// }
// let c: Color = Color.Green;
