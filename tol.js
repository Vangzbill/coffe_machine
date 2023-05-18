/**
 * @TODO
 * Lengkapilah kode di bawah ini agar dapat mengakses jalan tol.
 * 1. Beli kartu tol (buyTollRoadCard) -> isi argumen money dengan angka 25 -> mengembalikan objek { tollRoadCard: true, balance: 0 }.
 * 2. Isi saldo kartu tol (topUpBalance) -> isi argumen card dengan objek card yang didapat dari langkah 1 dan isi argumen amount dengan angka 10 -> mengembalikan objek { tollRoadCard: true, balance: 10 }.
 * 3. Gunakan akses jalan toll (useTollRoad) -> isi argumen card dengan objek card yang didapat dari langkah 2.
 *
 * Catatan:
 * - Anda boleh menggunakan async/await atau .then() atau .catch() atau kombinasi keduanya.
 * - Jika ada error, tampilkan error (error.message) tersebut dengan console.log.
 * - Masing-masing langkah di atas harus dijalankan secara berurutan.
 * - Masing-masing langkah akan mencetak pesan ke console.
 * - Anda bisa mengeksplorasi fungsi yang sudah disediakan di utils.js. Namun, Anda tidak boleh mengubah isi dari utils.js.
 */
import { buyTollRoadCard, topUpBalance, useTollRoad } from './utils.js';

 async function getTollAccess() {
   try {
     const card = await buyTollRoadCard(25);
     console.log('Card purchased:', card);
 
     const toppedUpCard = await topUpBalance(card, 10);
     console.log('Card balance topped up:', toppedUpCard);
 
     await useTollRoad(toppedUpCard);
     console.log('Toll road used successfully');
   } catch (error) {
     console.log('Error:', error.message);
   }
 }
 
 getTollAccess()
   .then(() => {
     console.log('All steps completed successfully');
   })
   .catch((error) => {
     console.log('Unhandled error:', error.message);
   });
 
 // Jangan hapus kode di bawah ini
 getTollAccess();