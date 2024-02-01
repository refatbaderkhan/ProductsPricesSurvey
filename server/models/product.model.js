const mongoose = require('mongoose');

const productGroupsSchema = new mongoose.Schema({
  productGroupName: String,
});

const productGroupVarietiesSchema = new mongoose.Schema({
  productGroupId: { type: mongoose.Schema.Types.ObjectId, ref: 'ProductGroups' },
  productGroupVarietyName: String,
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

const citiesSchema = new mongoose.Schema({
  cityName: String,
});

const countriesSchema = new mongoose.Schema({
  countryName: String,
});

const suppliersSchema = new mongoose.Schema({
  supplierName: String,
  cityId : { type: mongoose.Schema.Types.ObjectId, ref: 'Cities' },
  countryId : { type: mongoose.Schema.Types.ObjectId, ref: 'Countries' },
});

const weekNumbersSchema = new mongoose.Schema({
  weekNumber: Number,
});

const userNamesSchema = new mongoose.Schema({
  userName: String,
});

const productsSchema = new mongoose.Schema({
  weekNumberId : { type: mongoose.Schema.Types.ObjectId, ref: 'WeekNumbers' },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'UserNames' },
  cityId : { type: mongoose.Schema.Types.ObjectId, ref: 'Cities' },
  countryId : { type: mongoose.Schema.Types.ObjectId, ref: 'Countries' },
  supplierId : { type: mongoose.Schema.Types.ObjectId, ref: 'Suppliers' },
  groupId : { type: mongoose.Schema.Types.ObjectId, ref: 'ProductGroups' },
  groupVarietyId : { type: mongoose.Schema.Types.ObjectId, ref: 'ProductGroupVarities' },
  originId : { type: mongoose.Schema.Types.ObjectId, ref: 'Origins' },
  purchaseUoMId : { type: mongoose.Schema.Types.ObjectId, ref: 'PurchaseUoMs' },
  sizeId : { type: mongoose.Schema.Types.ObjectId, ref: 'Sizes' },  
  prices: [pricesSchema],
});

const ProductGroups = mongoose.model('ProductGroups', productGroupsSchema);
const ProductGroupVarieties = mongoose.model('ProductGroupVarieties', productGroupVarietiesSchema);
const Origins = mongoose.model('Origins', originsSchema);
const PurchaseUoMs = mongoose.model('PurchaseUoMs', purchaseUoMsSchema);
const Sizes = mongoose.model('Sizes', sizesSchema);
const Products = mongoose.model('Products', productsSchema);
const Cities = mongoose.model('Cities', citiesSchema);
const Countries = mongoose.model('Countries', countriesSchema);
const Suppliers = mongoose.model('Suppliers', suppliersSchema);
const WeekNumbers = mongoose.model('WeekNumbers', weekNumbersSchema);
const UserNames = mongoose.model('UserNames', userNamesSchema);

module.exports = {  
  ProductGroups,
  ProductGroupVarieties,
  Origins,
  PurchaseUoMs,
  Sizes,
  Products,
  Cities,
  Countries,
  Suppliers,
  WeekNumbers,
  UserNames
};

