const productsData = JSON.parse(products);

const productsGroup = document.querySelector('.product-group');

productsData.forEach((product) => {
    const article = document.createElement('article');
    article.classList.add('product');

    const imageDiv = document.createElement('div');
    imageDiv.classList.add('product-img');

    const hoverDiv = document.createElement('div');
    hoverDiv.classList.add('hover-effect');

    const cartLink = document.createElement('a');
    cartLink.href = '#';
    cartLink.setAttribute('name', product.id)
    cartLink.classList.add('cart-link');

    const iconCart = document.createElement('i');
    iconCart.classList.add('icon-cart');

    const spanCartLink = document.createElement('span');
    spanCartLink.textContent = 'Add to cart';

    const imageProduct = document.createElement('img');
    imageProduct.src = product.src;
    imageProduct.alt = product.alt;

    const captionProduct = document.createElement('div');
    captionProduct.classList.add('caption');

    const nameProduct = document.createElement('a');
    nameProduct.classList.add('product-name');
    nameProduct.href = product.link;
    nameProduct.textContent = product.name;

    const descriptionProduct = document.createElement('p');
    descriptionProduct.classList.add('product_description');
    descriptionProduct.textContent = product.description;

    const priceProduct = document.createElement('p');
    priceProduct.classList.add('product-price');
    priceProduct.textContent = product.currency.USD + product.price;

    productsGroup.appendChild(article);
    article.appendChild(imageDiv);
    article.appendChild(captionProduct);
    imageDiv.appendChild(hoverDiv);
    imageDiv.appendChild(imageProduct);
    hoverDiv.appendChild(cartLink);
    cartLink.append(iconCart);
    cartLink.append(spanCartLink);
    captionProduct.appendChild(nameProduct);
    captionProduct.appendChild(descriptionProduct);
    captionProduct.appendChild(priceProduct);
});

/* Блок Cart items */
const cartItems = document.querySelector('.cart_items');
const productBox = document.querySelector(".products__preview");
if (productBox.children.length === 0) { cartItems.classList.add('hidden'); }

const addToCartBtn = document.querySelectorAll('.cart-link');

/* Добавление товара в блок Cart items */
addToCartBtn.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const index = Number(button.name);

        productsData.forEach((productInCart) => {
            if (index === productInCart.id) {
                const productEl = document.createElement("div");
                productEl.classList.add("cart-product");

                const imgEl = document.createElement("img");
                imgEl.classList.add("cart-product__img");
                imgEl.setAttribute("alt", productInCart.alt);
                imgEl.src = productInCart.src;

                const productContent = document.createElement("div");
                productContent.classList.add("cart-product__info");

                const productInfo = document.createElement("div");
                productInfo.classList.add("cart-product__info");

                const productProperties = document.createElement("div");
                productProperties.classList.add("cart-product__properties");

                const productTitle = document.createElement("a");
                productTitle.classList.add("cart-product__name");
                productTitle.href = productInCart.link;
                productTitle.textContent = productInCart.name;


                const propertiesList = document.createElement("ul");
                propertiesList.classList.add("cart-product__properties_list");

                const propertyPrice = document.createElement("li");
                propertyPrice.classList.add("cart-product__property");
                propertyPrice.textContent = "Price: ";

                const properColor = document.createElement("li");
                properColor.classList.add("cart-product__property");
                properColor.textContent = "Color: " + productInCart.color;

                const propertySize = document.createElement("li");
                propertySize.classList.add("cart-product__property");
                propertySize.textContent = "Size: " + productInCart.size;

                const propertyQuantity = document.createElement("li");
                propertyQuantity.classList.add("cart-product__property");
                propertyQuantity.textContent = "Quantity: ";

                const spanPrice = document.createElement("span");
                spanPrice.classList.add("cart-product__property_price");
                spanPrice.textContent = productInCart.currency.USD + productInCart.price;

                const inputQuantity = document.createElement("input");
                inputQuantity.classList.add("cart-product__property_variant", "quantity");
                inputQuantity.type = "number";
                inputQuantity.value = productInCart.quantity;

                const closeBtn = document.createElement("button");
                closeBtn.classList.add("cart-product__button_close");
                closeBtn.type = "button";
                closeBtn.textContent = "X";


                productBox.appendChild(productEl);
                productEl.appendChild(imgEl);
                productEl.appendChild(productContent);
                productContent.appendChild(productProperties);
                productProperties.appendChild(productTitle);
                productProperties.appendChild(propertiesList);
                propertiesList.appendChild(propertyPrice);
                propertiesList.appendChild(properColor);
                propertiesList.appendChild(propertySize);
                propertiesList.appendChild(propertyQuantity);
                propertyPrice.appendChild(spanPrice);
                propertyQuantity.appendChild(inputQuantity);
                productContent.appendChild(closeBtn);

                cartItems.classList.remove('hidden');
            }

        });
        const productC = document.querySelectorAll('.cart-product');
        productC.forEach((productIC) => {

            const closeBtn = productIC.querySelector('.cart-product__button_close');

            productIC.addEventListener('click', (e) => {
                e.preventDefault();
                if (e.target == closeBtn) {
                    productIC.remove();
                }
                if (productBox.children.length === 0) { cartItems.classList.add('hidden'); }
            });

        });
    });
});
