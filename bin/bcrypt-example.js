const bcrypt = require("bcrypt");

// bcrypt.hash() or bcrypt.hashSync()
// ----------------------------------------------------------------------------
// ENCRYPT or HASH a string
// 1. Encrypt password for sign-up feature
// 2. Encrypt password for seed file that inserts users
// 3. Encrypt password for update password feature

const encryptedCoucou = bcrypt.hashSync("coucou", 10);
console.log(encryptedCoucou);

const encryptedEmpty = bcrypt.hashSync("", 10);
console.log(encryptedEmpty);

const encryptedLong = bcrypt.hashSync(
  "RV^zBsg4}wUHtq*azMM$dM362DDJFuBA?73#H7B^no",
  10
);
console.log(encryptedLong);

// bcrypt.compare() or bcrypt.compareSync()
// ----------------------------------------------------------------------------
// Compare a string to an encrypted string to see if the match
// 1. Compare strings for long-in feature
// 2. Compare strings for password confirmation

console.log(bcrypt.compareSync("coucou", encryptedCoucou)); // true
console.log(bcrypt.compareSync("CouCou", encryptedCoucou)); // false
console.log(bcrypt.compareSync("password", encryptedCoucou)); // false
