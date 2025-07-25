/**
 * TODO
 * Selesaikan kode pembuatan class Inventory dengan ketentuan:
 * - Memiliki properti `items` untuk menampung daftar item dalam bentuk array.
 * - Memiliki method `addItem` untuk menambahkan item ke properti `items`.
 * - Memiliki method `removeItem` untuk menghapus item berdasarkan `id`.
 * - Memiliki method `listItems` untuk mengembalikan string yang merupakan informasi detail barang (dipanggil dari fungs `item.displayDetails()`).
 */

class Inventory {
    constructor() {
        this.items = [];
    }

    addItem(x) {
        return this.items.push(x);
    }

    removeItem(x) {
        return this.items.splice(x-1,1);
    }

    listItems() {
        // Masih bermasalah
        this.items.forEach(item => {
            console.log(item.displayDetails());
        });
    }
}


// Jangan hapus kode di bawah ini!
export default Inventory;
