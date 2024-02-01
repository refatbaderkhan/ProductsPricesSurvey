const mongoose = require('mongoose');

const productGroupsSchema = new mongoose.Schema({
  productGroupName: String,
});

const productGroupVaritiesSchema = new mongoose.Schema({
  productGroupId: { type: mongoose.Schema.Types.ObjectId, ref: 'ProductGroups' },
  productGroupVarityName: String,
});

const originsSchema = new mongoose.Schema({
  originName: String,
});

const purchaseUoMsSchema = new mongoose.Schema({
  purchaseUoMName: String,
});

const sizesSchema = new mongoose.Schema({
  sizeName: String,
});

const pricesSchema = new mongoose.Schema({
  minPrice : Number,
  maxPrice : Number
});

const productsSchema = new mongoose.Schema({
  groupId : { type: mongoose.Schema.Types.ObjectId, ref: 'ProductGroups' },
  groupVarityId : { type: mongoose.Schema.Types.ObjectId, ref: 'ProductGroupVarities' },
  originId : { type: mongoose.Schema.Types.ObjectId, ref: 'Origins' },
  purchaseUoMId : { type: mongoose.Schema.Types.ObjectId, ref: 'PurchaseUoMs' },
  sizeId : { type: mongoose.Schema.Types.ObjectId, ref: 'Sizes' },  
  prices: [pricesSchema],
});

const ProductGroups = mongoose.model('ProductGroups', productGroupsSchema);
const ProductGroupVarities = mongoose.model('ProductGroupVarities', productGroupVaritiesSchema);
const Origins = mongoose.model('Origins', originsSchema);
const PurchaseUoMs = mongoose.model('PurchaseUoMs', purchaseUoMsSchema);
const Sizes = mongoose.model('Sizes', sizesSchema);
const Products = mongoose.model('Products', productsSchema);

module.exports = {  
  ProductGroups,
  ProductGroupVarities,
  Origins,
  PurchaseUoMs,
  Sizes,
  Products,
};

