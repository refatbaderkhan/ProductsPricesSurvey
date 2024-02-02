const { ProductGroups,
        ProductGroupVarieties,
        Origins,
        PurchaseUoMs,
        Sizes,
        Cities,
        Countries,
        Suppliers,
        WeekNumbers,
        UserNames,
        Products
      } = require('../models/product.model');


const getProductGroups = async (req, res) => {

  try {
    const productGroups = await ProductGroups.find();
    res.status(200).send(productGroups);
  } catch (error) {
    console.log(error);
    res.status(500).send("an error occured while getting product groups");
  }
}


const createProductGroup = async (req, res) => {
  const { productGroupName } = req.body;

  try {
    const productGroup = new ProductGroups({ productGroupName });

    if (!productGroup) {
      return res.status(400).send("Product Group Name Cannot be Empty");
    }

    const existingProductGroup = await ProductGroups.findOne({ productGroupName });
    if (existingProductGroup) {
      return res.status(400).send("Product Group Name Already Exists");
    }

    await productGroup.save();

    res.status(201).send({ productGroup , message: "Product Group Created Successfully" });
  
  } catch (error) {
    console.log(error);
    res.status(500).send("an error occured while creating product group");
  }
}


const getProductGroupVarieties = async (req, res) => {
  const { productGroupId } = req.params;

  try {
    const productGroupVarieties = await ProductGroupVarieties.find({ productGroupId });
    res.status(200).send(productGroupVarieties);

  } catch (error) {
    console.log(error);
    res.status(500).send("an error occured while getting product group varieties");
  }
}


const createProductGroupVariety = async (req, res) => {
  const { productGroupId, productGroupVarietyName } = req.body;

  try {
    const productGroupVariety = new ProductGroupVarieties({ productGroupId, productGroupVarietyName });

    if (!productGroupVariety) {
      return res.status(400).send("Product Group Variety Name Cannot be Empty");
    }

    const existingProductGroupVariety = await ProductGroupVarieties.findOne({ productGroupVarietyName });
    if (existingProductGroupVariety) {
      return res.status(400).send("Product Group Variety Name Already Exists");
    }

    await productGroupVariety.save();

    res.status(201).send({ productGroupVariety , message: "Product Group Variety Created Successfully" });
  
  } catch (error) {
    console.log(error);
    res.status(500).send("an error occured while creating product group variety");
  }
}


const getOrigins = async (req, res) => {

  try {
    const origins = await Origins.find();
    res.status(200).send(origins);
  } catch (error) {
    console.log(error);
    res.status(500).send("an error occured while getting origins");
  }
}


const createOrigin = async (req, res) => {
  const { originName } = req.body;

  try {
    const origin = new Origins({ originName });

    if (!origin) {
      return res.status(400).send("Origin Name Cannot be Empty");
    }

    const existingOrigin = await Origins.findOne({ originName });
    if (existingOrigin) {
      return res.status(400).send("Origin Name Already Exists");
    }

    await origin.save();

    res.status(201).send({ origin , message: "Origin Created Successfully" });
  
  } catch (error) {
    console.log(error);
    res.status(500).send("an error occured while creating origin");
  }
}


const getPurchaseUoMs = async (req, res) => {

  try {
    const purchaseUoMs = await PurchaseUoMs.find();
    res.status(200).send(purchaseUoMs);
  } catch (error) {
    console.log(error);
    res.status(500).send("an error occured while getting purchaseUoMs");
  }
}


const createPurchaseUoM = async (req, res) => {
  const { purchaseUoMName } = req.body;

  try {
    const purchaseUoM = new PurchaseUoMs({ purchaseUoMName });

    if (!purchaseUoM) {
      return res.status(400).send("Purchase UoM Name Cannot be Empty");
    }

    const existingPurchaseUoM = await PurchaseUoMs.findOne({ purchaseUoMName });
    if (existingPurchaseUoM) {
      return res.status(400).send("Purchase UoM Name Already Exists");
    }

    await purchaseUoM.save();

    res.status(201).send({ purchaseUoM , message: "Purchase UoM Created Successfully" });
  
  } catch (error) {
    console.log(error);
    res.status(500).send("an error occured while creating purchaseUoM");
  }
}


const getSizes = async (req, res) => {

  try {
    const sizes = await Sizes.find();
    res.status(200).send(sizes);

  } catch (error) {
    console.log(error);
    res.status(500).send("an error occured while getting sizes");
  }
}


const createSize = async (req, res) => {
  const { sizeName } = req.body;

  try {
    const size = new Sizes({ sizeName });

    if (!size) {
      return res.status(400).send("Size Name Cannot be Empty");
    }

    const existingSize = await Sizes.findOne({ sizeName });
    if (existingSize) {
      return res.status(400).send("Size Name Already Exists");
    }

    await size.save();

    res.status(201).send({ size , message: "Size Created Successfully" });
  
  } catch (error) {
    console.log(error);
    res.status(500).send("an error occured while creating size");
  }
}


const getCities = async (req, res) => {
  const { countryId } = req.params;

  try {
    const cities = await Cities.find({ countryId });
    res.status(200).send(cities);

  } catch (error) {
    console.log(error);
    res.status(500).send("an error occurred while getting cities");
  }
}


const createCity = async (req, res) => {
  const { cityName, countryId } = req.body;

  try {
    const city = new Cities({ cityName, countryId });

    if (!city) {
      return res.status(400).send("City Name Cannot be Empty");
    }

    const existingCity = await Cities.findOne({ cityName });
    if (existingCity) {
      return res.status(400).send("City Name Already Exists");
    }

    await city.save();

    res.status(201).send({ city , message: "City Created Successfully" });
  
  } catch (error) {
    console.log(error);
    res.status(500).send("an error occured while creating city");
  }
}


const getCountries = async (req, res) => {

  try {
    const countries = await Countries.find();
    res.status(200).send(countries);

  } catch (error) {
    console.log(error);
    res.status(500).send("an error occured while getting countries");
  }
}


const createCountry = async (req, res) => {
  const { countryName } = req.body;

  try {
    const country = new Countries({ countryName });

    if (!country) {
      return res.status(400).send("Country Name Cannot be Empty");
    }

    const existingCountry = await Countries.findOne({ countryName });
    if (existingCountry) {
      return res.status(400).send("Country Name Already Exists");
    }

    await country.save();

    res.status(201).send({ country , message: "Country Created Successfully" });
  
  } catch (error) {
    console.log(error);
    res.status(500).send("an error occured while creating country");
  }
}


const getSuppliers = async (req, res) => {
  const { cityId, countryId } = req.params;

  try {
    const suppliers = await Suppliers.find({ cityId, countryId });
    res.status(200).send(suppliers);

  } catch (error) {
    console.log(error);
    res.status(500).send("an error occured while getting suppliers");
  }
}


const createSupplier = async (req, res) => {
  const { supplierName, cityId, countryId } = req.body;

  try {
    const supplier = new Suppliers({ supplierName, cityId, countryId });

    if (!supplier) {
      return res.status(400).send("Supplier Name Cannot be Empty");
    }

    await supplier.save();

    res.status(201).send({ supplier , message: "Supplier Created Successfully" });
  
  } catch (error) {
    console.log(error);
    res.status(500).send("An error occurred while creating supplier");
  }
}


const getWeekNumbers = async (req, res) => {
  
  try {
    const weekNumbers = await WeekNumbers.find();
    res.status(200).send(weekNumbers);

  } catch (error) {
    console.log(error);
    res.status(500).send("an error occured while getting week numbers");
  }
}


const createWeekNumber = async (req, res) => {
  const { weekNumber } = req.body;

  try {
    const weekNo = new WeekNumbers({ weekNumber });

    if (!weekNo) {
      return res.status(400).send("Week Number Cannot be Empty");
    }

    await weekNo.save();

    res.status(201).send({ weekNumber , message: "Week Number Created Successfully" });

  } catch (error) {
    console.log(error);
    res.status(500).send("an error occured while creating week number");
  }
}


const getUserNames = async (req, res) => {
    
  try {
    const userNames = await UserNames.find();
    res.status(200).send(userNames);

  } catch (error) {
    console.log(error);
    res.status(500).send("an error occured while getting user names");
  }
}

const createUserName = async (req, res) => {
  const { userName } = req.body;

  try {
    const newUserName = new UserNames({ userName });

    if (!newUserName) {
      return res.status(400).send("User Name Cannot be Empty");
    }

    const existingUserName = await UserNames.findOne({ userName });
    if (existingUserName) {
      return res.status(400).send("User Name Already Exists");
    }

    await newUserName.save();

    res.status(201).send({ newUserName , message: "User Name Created Successfully" });

  } catch (error) {
    console.log(error);
    res.status(500).send("an error occured while creating user name");
  }
}


const getProducts = async (req, res) => {

  try {
    const products = await Products.find();
    res.status(200).send(products);

  } catch (error) {
    console.log(error);
    res.status(500).send("an error occured while getting products");
  }
}


const createProduct = async (req, res) => {
  const { groupId, groupVarityId, originId, purchaseUoMId, sizeId, prices } = req.body;

  try {
    const product = new Products({ groupId, groupVarityId, originId, purchaseUoMId, sizeId, prices });

    if (!product) {
      return res.status(400).send("Product Cannot be Empty");
    }

    const existingProduct = await Products.findOne({ groupId, groupVarityId, originId, purchaseUoMId, sizeId });
    if (existingProduct) {
      return res.status(400).send("Product Already Exists");
    }

    await product.save();

    res.status(201).send({ product , message: "Product Created Successfully" });
  
  } catch (error) {
    console.log(error);
    res.status(500).send("an error occured while creating product");
  }
}


module.exports = {
  getProductGroups,
  createProductGroup,
  getProductGroupVarieties,
  createProductGroupVariety,
  getOrigins,
  createOrigin,
  getPurchaseUoMs,
  createPurchaseUoM,
  getSizes,
  createSize,
  getProducts,
  createProduct,
  getCities,
  createCity,
  getCountries,
  createCountry,
  getSuppliers,
  createSupplier,
  getWeekNumbers,
  createWeekNumber,
  getUserNames,
  createUserName
}