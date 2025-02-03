import { createClient } from '@sanity/client';
import axios from 'axios';


// Sanity Client Setup
const client = createClient({
  projectId: 'ygek1i39', // Sanity Project ID (replace karo)
  dataset: 'production', // Dataset name (e.g., production)
  useCdn: false,
  apiVersion: '2021-08-31',
  token: 'skLVxd2g9ZyEC7IH0SAztBtf8XBDaFEhOHt2GmBBwMyd8voVsoNIg8rnO1SeZxk4PeM9AwhzdbpnkBMFLvmPbSJnqQR5ZN2xVzmUMl2PglGPh8IU38V2lygQNOWjUGsv4aKXHQD2JuAjUh2N0JG5ltDKoPMZWBnBD6O05Q6g2fGQgXmIjjyX', // Sanity API token (replace karo)
});

async function importProducts() {
  try {
    console.log('Fetching products from your API...');
    const response = await axios.get('http://localhost:3000/api/products'); // API URL
    const products = response.data;

    console.log('Importing products into Sanity...');
    for (const product of products) {
      const sanityProduct = {
        _type: 'product',
        name: product.name,
        price: product.price,
        description: product.description || "",
        inventory: product.inventory !== undefined ? product.inventory : 0, // Added inventory field with default value 0
        image: product.image
          ? {
              _type: 'image',
              asset: {
                _type: 'reference',
                _ref: await uploadImageToSanity(product.image),
              },
            }
          : undefined,
      };

      await client.create(sanityProduct);
      console.log(` Imported: ${product.name} with inventory: ${sanityProduct.inventory}`);
    }
    console.log(' All products imported successfully!');
  } catch (error) {
    console.error(' Error importing products:', error);
  }
}

async function uploadImageToSanity(imageUrl) {
  try {
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    const buffer = Buffer.from(response.data);
    const asset = await client.assets.upload('image', buffer, {
      filename: imageUrl.split('/').pop(),
    });
    return asset._id;
  } catch (error) {
    console.error('Error uploading image:', error);
    return null;
  }
}

importProducts();
