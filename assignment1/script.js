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

  toggleMode: function({flagName, buttonClass, panelId, btnTextOpen, btnTextClose, renderHTML, styleClass = null}) {
    this[flagName] = !this[flagName];
    const button = document.querySelector(buttonClass);
    const panel = document.getElementById(panelId);

    if (styleClass) {
      panel.classList.toggle(styleClass);
    }
    panel.innerHTML = this[flagName] ? renderHTML.call(this): '';
    button.innerText = this[flagName] ? btnTextClose : btnTextOpen;
  },

  displayProducts: function() {
    this.toggleMode({
      flagName: 'displayProduct', 
      buttonClass: '.list-button', 
      panelId: 'product-display-panel', 
      btnTextOpen: 'List', 
      btnTextClose: 'Close List', 
      renderHTML: this.renderHTMLDisplayProduct,
      styleClass: 'visible-panel'
    });
  },

  showAddProductForm: function() {
    this.toggleMode({
      flagName: 'addProductForm', 
      buttonClass: '.add-product-button', 
      panelId: 'add-product-panel', 
      btnTextOpen: '+ Add Product', 
      btnTextClose: '- Close Form',
      renderHTML: this.renderHTMLAddProduct,
  });
  },

  refreshProductList: function() {
    if (!this.displayProduct) return;

    document.getElementById("product-display-panel").innerHTML = this.renderHTMLDisplayProduct();
  },

  submitForm: function() {
    const title = document.getElementById("title").value;
    const price = document.getElementById("price").valueAsNumber;
    const description = document.getElementById("description").value;
    const category = document.getElementById("category").value;
    const id = 0? 1 : Math.max(...this.productList.map(p => p.id)) + 1;

    this.productList.push({
      id: id,
      title: title,
      price: price,
      description: description,
      category: category,
    });

    this.refreshProductList()

    document.querySelector("form").reset();
  },

  renderHTMLDisplayProduct: function(){
    let list = `<div class="list-container">
              <br>
      `
    for (const p of this.productList) {
        list += `
        <p><span  class="field-label">Title</span>: ${p.title}</p>
        <p><span  class="field-label">Price</span>: $${p.price.toFixed(2)}</p>
        <p><span  class="field-label">Description</span>: ${p.description}</p>
        <p><span  class="field-label">Category</span>: ${p.category}</p>
      `
        list += "<br>"
    }
    list += "</div>"

    return list;
  },

  renderHTMLAddProduct: function(){
    return `
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
              <input class="submit-button" type="submit" value="submit">
              <input class="cancel-button" type="reset" value="Cancel">
            </div>
          </div>
        </form>
      `
  },
}