const productsData = JSON.parse(products);

const productsGroup = document.querySelector('.product-group');
console.log(productsGroup);

productsData.forEach((product) => {
    const article = document.createElement('article');
    article.classList.add('product');

    const imageDiv = document.createElement('div');
    imageDiv.classList.add('product-img');

    const hoverDiv = document.createElement('div');
    hoverDiv.classList.add('hover-effect');

    const cartLink = document.createElement('a');
    cartLink.href = 'cart.html';
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