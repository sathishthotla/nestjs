

import {
    createCipheriv,
    randomBytes,
    createDecipheriv,
    createHash,
 } from 'crypto';


  // text -> love->format encryptData store - in db
  // db -> decrypt -> return as-> text love
  const alg = 'aes-256-ctr';
  let key = 'apple777';
  key = createHash('sha256').update(String(key)).digest('base64').substr(0, 32);
  // encryptData 
  export const encryptData = (data) => {
  console.log('-------------data before encrypt--->'
  ,data);
    const iv = randomBytes(16);
    const cipher = createCipheriv(alg, key, iv);
    const result = Buffer.concat([iv, cipher.update(data), cipher.final()]);
    console.log('-------------data after encrypt-result-->'
  ,result);
    return result;

  }
  //decryptData
    export const decryptData = (data) => {
      console.log('-------------data before decrypt--->'+data);
        const iv = data.slice(0, 16);
        data = data.slice(16);
        const decipher = createDecipheriv(alg, key, iv);
        const result = Buffer.concat([decipher.update(data), decipher.final()]);
        console.log('-------------data after decrypt--->'+result);
        return result;
      }
    