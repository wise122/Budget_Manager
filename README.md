# 💰 SavingsTarget - Wota SSK Tabungan Tracker

Aplikasi kecil berbasis React + Chakra UI untuk melacak tabungan menuju target tertentu, cocok untuk para Wota yang sedang menabung demi event seperti **JKT48 SSK (Senbatsu Sousenkyo)**.

## ✨ Fitur

- 🎯 Input dan ubah **target tabungan**
- ➕ Tambahkan jumlah tabungan secara bertahap
- 📈 Tampilkan progress dalam bentuk **progress bar**
- 🧾 Simpan **riwayat penambahan** dengan waktu
- 🔒 Data disimpan di **localStorage**, aman dari refresh
- 🚫 Validasi terhadap input yang tidak masuk akal

## 🧱 Teknologi

- React
- Chakra UI
- JavaScript (ES6+)
- localStorage (untuk persistensi)

## 🚀 Cara Menjalankan

1. **Kloning repositori ini**
   ```bash
   git clone https://github.com/wise122/Budget_Manager.git
   cd Budget_Manager
   ```

2. **Instal dependensi**
   ```bash
   npm install
   ```

3. **Jalankan aplikasi**
   ```bash
   npm start
   ```

4. Buka di browser:
   ```
   http://localhost:3000
   ```


## 🗂 Struktur File

```
src/
├── components/
│   └── SavingsTarget.jsx
│   └── BottomBar.jsx
│   └── Dashboard.jsx
│   └── ExpenseForm.jsx
│   └── Sidebar.jsx
│   └── WishlistPage.jsx
├── App.jsx
├── index.js
```

## 📦 Penyimpanan

- Data `target`, `current`, dan `riwayat` disimpan ke `localStorage`:
  - `ssk-savings` — menyimpan `target` & `current`
  - `ssk-history` — menyimpan array log tabungan

## ✍️ Contoh Format Riwayat

```json
[
  {
    "amount": 50000,
    "timestamp": 1717753581145
  },
  {
    "amount": 100000,
    "timestamp": 1717753661245
  }
]
```

## 🔮 Rencana Fitur Selanjutnya

- 🔁 Tombol **reset** semua data
- ✏️ Edit atau hapus riwayat penambahan
- 📊 Grafik riwayat tabungan dari waktu ke waktu

