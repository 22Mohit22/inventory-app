const { Client } = require("pg");

const SQL = `
CREATE TABLE products (
    id INTEGER PRIMARY KEY,
    item TEXT,
    price FLOAT,
    stock_Qty INTEGER
);

INSERT INTO products (id, item, price, stock_Qty) VALUES
(1, 'Laptop', 999.99, 10),
(2, 'Smartphone', 499.99, 25),
(3, 'Tablet', 299.99, 15),
(4, 'Headphones', 199.99, 50),
(5, 'Smartwatch', 149.99, 30),
(6, 'Camera', 599.99, 8),
(7, 'Printer', 129.99, 20),
(8, 'Monitor', 249.99, 18),
(9, 'Keyboard', 49.99, 40),
(10, 'Mouse', 29.99, 35),
(11, 'External Hard Drive', 89.99, 25),
(12, 'USB Flash Drive', 19.99, 100),
(13, 'Router', 79.99, 15),
(14, 'Speaker', 149.99, 12),
(15, 'Projector', 349.99, 5),
(16, 'Webcam', 59.99, 22),
(17, 'Microphone', 99.99, 30),
(18, 'Gaming Console', 399.99, 12),
(19, 'Smart TV', 799.99, 7),
(20, 'VR Headset', 299.99, 9);

CREATE TABLE details (
    pID INTEGER,
    description TEXT,
    category TEXT,
    supplier TEXT
);

INSERT INTO details (pID, description, category, supplier) VALUES
(1, 'High-performance laptop with 16GB RAM and 512GB SSD', 'Electronics', 'TechCorp'),
(2, 'Latest model smartphone with 128GB storage', 'Electronics', 'MobileWorld'),
(3, '10-inch tablet with high-resolution display', 'Electronics', 'GadgetHub'),
(4, 'Wireless noise-cancelling headphones', 'Accessories', 'AudioTech'),
(5, 'Smartwatch with heart rate monitor', 'Wearables', 'WearableInc'),
(6, 'Digital camera with 24MP resolution', 'Electronics', 'CamTech'),
(7, 'All-in-one inkjet printer', 'Office Supplies', 'PrintCo'),
(8, '27-inch 4K monitor', 'Electronics', 'ScreenMasters'),
(9, 'Mechanical keyboard with RGB lighting', 'Accessories', 'KeyTech'),
(10, 'Ergonomic wireless mouse', 'Accessories', 'MouseMakers'),
(11, '1TB external hard drive', 'Storage', 'DriveStore'),
(12, '64GB USB flash drive', 'Storage', 'DataStick'),
(13, 'Dual-band WiFi router', 'Networking', 'NetGear'),
(14, 'Bluetooth portable speaker', 'Audio', 'SoundWave'),
(15, 'HD projector with 3000 lumens', 'Electronics', 'ProjectorPros'),
(16, '1080p HD webcam', 'Accessories', 'CamTech'),
(17, 'Studio-quality USB microphone', 'Audio', 'SoundWave'),
(18, 'Next-gen gaming console', 'Gaming', 'GameStation'),
(19, '55-inch 4K Smart TV', 'Electronics', 'TeleVisionInc'),
(20, 'Virtual reality headset with controllers', 'Gaming', 'VRWorld');


`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.POSTGRES_URL,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
