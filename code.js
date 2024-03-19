var key = "yourKeyHere"; // Replace with your actual key
var initializationVector = "yourIVHere"; // Replace with your actual IV

var ciphertextBase64 = "yourBase64EncodedCiphertext"; // Replace with your actual ciphertext

var keyBytes = CryptoJS.enc.Utf8.parse(key);
var ivBytes = CryptoJS.enc.Utf8.parse(initializationVector);
var ciphertextBytes = CryptoJS.enc.Base64.parse(ciphertextBase64);

var decrypted = CryptoJS.AES.decrypt(
    { ciphertext: ciphertextBytes },
    keyBytes,
    { iv: ivBytes, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 }
);

var decryptedText = CryptoJS.enc.Utf8.stringify(decrypted);

console.log("Decrypted Text:", decryptedText);



/**
 * Hello Raheel 
 * Replace "yourKeyHere", "yourIVHere", and "yourBase64EncodedCiphertext" with your actual key, IV, and ciphertext. This code assumes that the encryption was done using AES in CBC mode with PKCS7 padding.

    If you have the correct key and IV, using this template should help you decrypt the ciphertext. 
 */