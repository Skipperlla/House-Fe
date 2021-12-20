### Kurulum

Başlamadan önce, birkaç npm paketini ve Node.js'i indirip kurduğunuzdan emin olmanız gerekiyor.

- Node.js yükleyerek başlayalım => https://nodejs.org/en/ kendi orijinal sitesinden kurulum dosyasını indirip kolayca kurulum yapabilirisiniz.

- Node.js'i indirdikten sonra Node.js sürücümüze MongoDB yükliyelim.MongoDB Node.js Driver kurulu değilse aşağıdaki komutla kurabilirsiniz.

```npm
npm install -g mongodb
```

### MongoDB Nedir ?

MongoDB; MongoDB Inc. tarafından ölçeklenebilir, doküman tabanlı, C++ ile geliştirilmiş açık kaynak, NoSQL veritabanı uygulamasıdır

### Ücretsiz bir MongoDB Atlas kümesi oluşturun ve örnek verileri yükleyin

Ardından, bir MongoDB veritabanına ihtiyacınız olacak. MongoDB'yi kullanmaya başlamanın en kolay yolu, MongoDB'nin hizmet olarak tam olarak yönetilen veritabanı olan Atlas'ı kullanmaktır.

### Kümenizin bağlantı bilgilerini alın

Son adım,kümenizi bağlantı için hazırlamaktır.MongoDB Atlas'a girin,oluşturduğunuz kümenizi seçin ve <b>CONNECT</b> tıklayın.Bu ekranda Küme bağlantınız gözükecektir.Küme bağlantınız aşşağıdaki gibi olmalıdır.

```env
mongodb+srv://test:123456789@cluster0.gsfa4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
```

### Bir Node.js uygulaması oluşturun ve express adlı Node.js framework'ünü kurun

Command Line açıp aşşağıdaki kodu yazalım

```npm
npm init -y
```

- Bu kod Node.js uygulaması oluşturmak için

```npm
npm install express mongoose
```

- Bu kod ise Node.js uygulamamızı çalıştırmamız için gerekli framework'ü ve mongoDB bağlantımız için gerekli olan mongoose kütüphanesini indiricek
- Şimdi ise server.js adlı bir dosya oluşturalım ve içine şu kodları yazalım

```js
import express from "express"; // express'i uygulamamıza import edelim
import mongoose from "mongoose"; // MongoDB'ye bağlantımızı sağlamak için kullandığımız kütüphane
import { connectDatabase } from "./helpers/database/connectDatabase.js";
const app = express(); // app adındaki değişkene express'i fonksiyon olarak tanımlıyalım
const PORT = process.env.PORT || 5000; // Uygulamamızın çalışcağı port'u belirliyelim

// Burda ise mongoDB çalıştırmak için bir fonksiyon yazıyoruz
export const connectDatabase = async () => {
  const uri =
    "mongodb+srv://test:123456789@cluster0.gsfa4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"; 
    // Yukarıda gördüğünüz MongoDB url'imizi tanımlıyoruz

    
  await mongoose
    .connect(
      // Bu fonksiyon mongoDB ile aramızdaki bağlantıyı sağlicak olan köprü
      uri, // Yukarda tanımladığımız uri adlı değişkeni buraya yazıyoruz
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        autoIndex: true, // Burdaki ayarlamalar ise mongoDB'nin hatasını en aza indirgemek için yazdığımız gerekli olan ayarlar
      }
    )
    .then(() => console.log("Connected Database")) 
    // Burası ise eğer ki bağlantı doğru bir şekilde sağlandıysa consol'a yazılcak ifade
    
    .catch((err) => console.log(err)); // Burası ise eğer ki bağlantıda bir hata var ise ekrana yazıcağı hatayı belirlediğimiz yer
};

// Burda ise uygulamamızı çalıştırmak için dinlemeye alalım
app.listen(PORT, () => {
  console.log(`Listenin on Port => ${PORT}`);
});
```

### En son olarak komut satırına bu komutu yazdığımız zaman uygulamamız çalışmış ve bağlantı sağlanmış olucaktır.

```npm
node server.js
```
Ekran çıktısı ile aşşağıdaki gibi olucaktır

```cmd
Listenin on Port => 5000
Connected Database
```
