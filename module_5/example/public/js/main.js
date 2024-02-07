const makers = (element, parent, props = {}) => {
  const tag = document.createElement(element);
  Object.assign(tag, props);
  parent.appendChild(tag);
  return tag;
};

const bodyprops = {
  style: "width: 100vw; height: 100vh; background-color:beige;margin:0; padding:0",
};

const body = makers("div", document.body, bodyprops);

const headerprops = {
  style: "width:100%; height:15%; background-color:pink",
};

const header = makers("div", body, headerprops);

const homeprops = {
  style: "width:20%; height:100%; text-align:center; text-decoration:none",
  innerText: "home",
  href: "/",
};

const home = makers("a", header, homeprops);

const shopprops = {
  style: "width:20%; height:100%; text-align:center; text-decoration:none",
  innerText: "shop",
  href: "/shop",
};

const shop = makers("a", header, shopprops);
