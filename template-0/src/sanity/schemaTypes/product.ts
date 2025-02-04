const productSchema = {
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    { 
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    { 
      name: 'price',
      type: 'number',
      title: 'Price',
    },
    { 
      name: 'description',
      type: 'text',
      title: 'Description',
    },
    { 
      name: 'image',
      type: 'image',
      title: 'Image',
      options: { hotspot: true },
    },

    {
      name: 'inventory',
      type: 'number',
      title: 'Inventory Count',
    },

  ],
};


export default productSchema;