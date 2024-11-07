mapIns = (id, location, gymName) => {
  //console.log(location);
  const mapOptions = {
    center: new naver.maps.LatLng(location[1], location[0]),
    zoom: 15,
  };

  const map = new naver.maps.Map(`map_${id}`, mapOptions);

  const markerOption = {
    position: new naver.maps.LatLng(location[1], location[0]),
    map: map,
  };
  const marker = new naver.maps.Marker(markerOption);

  const contentString = [
    "   <h3 style='font-size:12px; padding:0 5px;'>" + gymName + "</h3>",
  ].join("");

  const infowindow = new naver.maps.InfoWindow({
    content: contentString,
  });
  naver.maps.Event.addListener(marker, "click", function (e) {
    if (infowindow.getMap()) {
      infowindow.close();
    } else {
      infowindow.open(map, marker);
    }
  });

  infowindow.open(map, marker);
};

makehtml = (v) => {
  //console.log(v);
  const product = document.createElement("div");
  product.classList = "product";
  const product__div__top = document.createElement("div");
  product__div__top.classList = "product__div__top";
  const imgDiv = document.createElement("div");
  imgDiv.classList = "imgDiv";
  const img = document.createElement("img");
  img.classList = "div__img";
  img.src = v.gymPhotoSmall;
  imgDiv.appendChild(img);

  const contentDiv = document.createElement("div");
  contentDiv.classList = "contentDiv";
  const contentGenure = document.createElement("div");
  contentGenure.classList = "contentGenure";

  const contentGenure__subDiv = document.createElement("div");
  contentGenure__subDiv.classList = "contentGenure__subDiv";
  contentGenure__subDiv.innerHTML = v.tags.join(" / ");

  const contentGenure__subbutton = document.createElement("div");
  contentGenure__subbutton.classList = "contentGenure__subbutton";
  const contentGenure__subbutton__a = document.createElement("a");
  contentGenure__subbutton__a.innerHTML =
    '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.26253 5.59668C5.19337 4.54442 6.51555 3.80615 8.01562 3.80615C9.61988 3.80615 11.0418 4.53326 12.0003 5.66055C12.9589 4.53366 14.3801 3.80721 15.9844 3.80721C17.4845 3.80721 18.8066 4.54549 19.7375 5.59774C20.6607 6.64138 21.2425 8.03926 21.2499 9.47216C21.438 12.2013 19.3937 15.6384 12.4064 20.077C12.1657 20.2299 11.8592 20.233 11.6154 20.0852C5.0502 16.1044 2.75331 12.3467 2.75 9.49981L2.75 9.49894C2.75 8.05632 3.33333 6.64707 4.26253 5.59668ZM4.25 9.49848C4.25253 11.4865 5.88006 14.7558 11.9956 18.5585C18.6317 14.2622 19.8845 11.3309 19.7521 9.55581C19.7507 9.53724 19.75 9.51862 19.75 9.5C19.75 8.45212 19.3202 7.38997 18.614 6.5916C17.9094 5.79509 16.9737 5.30721 15.9844 5.30721C14.5453 5.30721 13.2987 6.13156 12.6641 7.34095C12.5345 7.58789 12.2787 7.74255 11.9998 7.74246C11.7209 7.74238 11.4651 7.58758 11.3357 7.34056C10.7021 6.13148 9.45467 5.30615 8.01562 5.30615C7.02627 5.30615 6.09063 5.79402 5.38602 6.59054C4.67987 7.38879 4.25013 8.45075 4.25 9.49848Z" fill="#3D4149"></path></svg>';

  contentGenure__subbutton__a.classList = "contentGenure__subbutton__a";

  contentGenure__subbutton.appendChild(contentGenure__subbutton__a);

  contentGenure.appendChild(contentGenure__subDiv);
  contentGenure.appendChild(contentGenure__subbutton);

  const gymname = document.createElement("div");
  gymname.classList = "gymname";
  gymname.innerHTML = v.gymName;
  const address = document.createElement("div");
  address.classList = "address";
  const price = document.createElement("div");
  price.classList = "price";
  price.innerHTML =
    String(Number(v.price.lowestPrice).toLocaleString()) +
    "~ <span style='font-size:14px; color:#868789;'>/원</span>";

  const map = document.createElement("div");
  map.classList = "map_div";
  map.id = `map_${v._id}`;

  contentDiv.appendChild(contentGenure);
  contentDiv.appendChild(gymname);
  contentDiv.appendChild(address);
  contentDiv.appendChild(price);
  contentDiv.appendChild(map);

  product__div__top.appendChild(imgDiv);
  product__div__top.appendChild(contentDiv);

  const product__div__bottom = document.createElement("div");
  product__div__bottom.classList = "product__div__bottom";
  const product__div__bottom_title = document.createElement("div");
  product__div__bottom_title.classList = "product__div__bottom_title";
  product__div__bottom_title.innerHTML = "무료 서비스";
  const product__div__bottom_service = document.createElement("div");
  product__div__bottom_service.classList = "product__div__bottom_service";
  product__div__bottom_service.innerHTML = v.service.free;

  product__div__bottom.appendChild(product__div__bottom_title);
  product__div__bottom.appendChild(product__div__bottom_service);

  product.appendChild(product__div__top);

  product.appendChild(product__div__bottom);

  document.querySelector(".wrap").appendChild(product);

  //map 띄운다.
  mapIns(v._id, v.location, v.gymName);
};
centerList.forEach((v) => makehtml(v));
