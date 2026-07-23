const products = {
  productList: [
    {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    },
  ],

  displayProduct: false,
  addProductForm: false,

  displayProducts: function() {
    this.displayProduct = !this.displayProduct;
    const productDisplayPanel = document.getElementById("product-display-panel");
    const listButton = document.querySelector(".list-button");

    let list = "";

    if (this.displayProduct) {
      list += `<div class="list-container">
              <br>
      `;
      for (const p of this.productList) {
        list += `
        <p> <span  class="field-label">Title</span>${p.title}</p>
        <p><span  class="field-label">Price</span>: $${p.price.toFixed(2)}</p>
        <p><span  class="field-label">Description</span>: ${p.description}</p>
        <p><span  class="field-label">Category</span>: ${p.category}</p>
      `
        list += "<br>";
      }
      list += "</div>";

      productDisplayPanel.classList.add("visible-panel");
      listButton.innerText = "Close List";
    } else {
      productDisplayPanel.classList.remove("visible-panel");
      listButton.innerText = "List";
    }

    productDisplayPanel.innerHTML = list;
  },

  showAddProductForm: function() {
    this.addProductForm = !this.addProductForm;
    const addProductPanel = document.getElementById("add-product-panel");
    const addProductButton = document.querySelector(".add-product-button");

    let form = ''
    if (this.addProductForm) {
      form += `
        <form  onsubmit="products.submitForm(); return false;">
          <div class="form-container">
            <div class="form-field">
              <label class="form-label" for="title">Title</label>
              <input type="text" name="title" id="title" required class="form-input">
            </div>

            <div class="form-field">
              <label class="form-label" for="price">Price</label>
              <input type="number" name="price" id="price" required class="form-input">
            </div>

            <div class="form-field">
              <label class="form-label" for="description">Description</label>
              <input type="text" name="description" id="description" required class="form-input">
            </div>

            <div class="form-field">
              <label class="form-label" for="category">Category</label>
              <input type="text" name="category" id="category" required class="form-input">
            </div>

            <div class="action-button-container">
              <input class="submit-button" type="submit" value="submit" onsubmit="window.alert('confirm')">
              <input class="cancel-button" type="reset" value="Cancel">
            </div>
          </div>
        </form>
      `

    addProductButton.innerText = '- Close Form'
  }else{
    addProductButton.innerText = '+ Add Product'
  }

  addProductPanel.innerHTML = form;
  },

  submitForm: function() {
    const title = document.getElementById("title").value;
    const price = document.getElementById("price").value;
    const description = document.getElementById("description").value;
    const category = document.getElementById("category").value;
    const id = Math.max(...this.productList.map(p => p.id)) + 1;

  this.productList.push({
    id: id,
    title: title,
    price: price,
    description: description,
    category: category,
  });

  this.displayProduct = false;
  this.displayProducts();

  document.querySelector("form").reset();
  },
}