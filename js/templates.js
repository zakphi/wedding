// template source
var intro_source = $('#intro-template').html();
var nav_source = $('#nav-template').html();
var the_wedding_source = $('#the-wedding-template').html();
var wedding_party_source = $('#wedding-party-template').html();
var gallery_source = $('#gallery-template').html();
var guest_info_source = $('#guest-info-template').html();
var registry_source = $('#registry-template').html();

// compile the template
var intro_template = Handlebars.compile(intro_source);
var nav_template = Handlebars.compile(nav_source);
var the_wedding_template = Handlebars.compile(the_wedding_source);
var wedding_party_template = Handlebars.compile(wedding_party_source);
var gallery_template = Handlebars.compile(gallery_source);
var guest_info_template = Handlebars.compile(guest_info_source);
var registry_template = Handlebars.compile(registry_source);

var oneDay = 24*60*60*1000;	// hours*minutes*seconds*milliseconds
var today = new Date();
var BigDay = new Date("July 3, 2016");
var diffDays = Math.floor((BigDay.getTime() - today.getTime())/(oneDay));

var intro_data = {
  "header":
  {
    "main": "Emily & Philip",
    "sub": "are getting married!"
  },
  "days_until":
  {
    "days":diffDays,
  }
};

var nav_data = { nav: [
  {title: "the wedding", name: "the-wedding"},
  {title: "wedding party", name: "wedding-party"},
  {title: "gallery", name: "gallery"},
  {title: "guest info", name: "guest-info"},
  {title: "registry", name: "registry"},
  {title: "contact us", name: "contact-us"}
]};

var the_wedding_data = {
  "venue":
  {
    "img": "images/venue.jpg",
    "alt": "Crabtree's Kittle House",
    "name": "Crabtree's Kittle House",
    "street": "11 Kittle Road",
    "city": "Chappaqua, NY",
    "zip": "10514",
    "directions": "https://goo.gl/cnZzQ3",
    "hashtag": "pezwedding16"
  },
  "date":
  {
    "BigDay": "July 3rd, 2016"
  },
  schedule: [
    {name: "We say 'I do'", time: "5:00pm"},
    {name: "Eat, drink, and be merry", time: "6:00pm"},
    {name: "Party time", time: "7:00pm"},
  ],
};

var wedding_party_data = { members: [
  {img: "images/wedding_party/stephen.jpg", alt: "Stephen, Best Man", name: "Stephen", role: "Best Man", width: "127", height: "200"},
  {img: "images/wedding_party/ephraim.jpg", alt: "Ephraim, Groomsman", name: "Ephraim", role: "Groomsman", width: "127", height: "200"},
  {img: "images/wedding_party/christina.jpg", alt: "Christina, Maid of Honor", name: "Christina", role: "Maid of Honor", width: "127", height: "200"},
  {img: "images/wedding_party/eve.jpg", alt: "Eve, Bridesmaid", name: "Eve", role: "Bridesmaid", width: "127", height: "200"},
]};

var gallery_data = { gallery: [
  {img: "images/engagement_pictures/895C7630_first-min.jpg", width: "600", height: "400"},
  {img: "images/engagement_pictures/895C7650-min.jpg", width: "600", height: "400"},
  {img: "images/engagement_pictures/895C7670-min.jpg", width: "267", height: "400"},
  {img: "images/engagement_pictures/895C7683-min.jpg", width: "267", height: "400"},
  {img: "images/engagement_pictures/895C7699-min.jpg", width: "600", height: "400"},
  {img: "images/engagement_pictures/895C7711-min.jpg", width: "600", height: "400"},
  {img: "images/engagement_pictures/895C7721-min.jpg", width: "600", height: "400"},
  {img: "images/engagement_pictures/895C7732-min.jpg", width: "600", height: "400"},
  {img: "images/engagement_pictures/895C7737-min.jpg", width: "267", height: "400"},
  {img: "images/engagement_pictures/895C7757-min.jpg", width: "600", height: "400"},
  {img: "images/engagement_pictures/895C7766-min.jpg", width: "600", height: "400"},
  {img: "images/engagement_pictures/895C7775-min.jpg", width: "600", height: "400"},
  {img: "images/engagement_pictures/DND_9100-min.jpg", width: "267", height: "400"},
  {img: "images/engagement_pictures/DND_9126-min.jpg", width: "600", height: "400"},
  {img: "images/engagement_pictures/DND_9131-min.jpg", width: "600", height: "400"},
  {img: "images/engagement_pictures/DND_9160-min.jpg", width: "267", height: "400"},
  {img: "images/engagement_pictures/DND_9169-min.jpg", width: "600", height: "400"},
  {img: "images/engagement_pictures/DSC03849-Edit-min.jpg", width: "600", height: "400"},
  {img: "images/engagement_pictures/DSC03863-min.jpg", width: "600", height: "400"},
  {img: "images/engagement_pictures/DSC03903-min.jpg", width: "600", height: "400"},
  {img: "images/engagement_pictures/DSC03940-min.jpg", width: "267", height: "400"},
  {img: "images/engagement_pictures/DSC03935_last-min.jpg", width: "267", height: "400"},
]};

var guest_info_data = {
  "hotel":
  {
    "name": "Mount Kisco Holiday Inn",
    "street": "1 Holiday Inn Drive",
    "city": "Mount Kisco, NY",
    "zip": "10549",
    "phone": "914-241-2600",
    "code": "WZW",
    "directions": "https://goo.gl/1A7DAz",
  },
};

var registry_data = { registry: [
  {img: "images/registry/bed_bath_and_beyond.png", alt: "Bed Bath & Beyond", width: "200", height: "200", link: "http://goo.gl/pKAzQu"},
  {img: "images/registry/amazon.png", alt: "Amazon", width: "200", height: "200", link: "http://www.amazon.com/registry/wedding/3K284SFHQ2STZ"},
]};

// execute
var intro = intro_template(intro_data);
var nav = nav_template(nav_data);
var the_wedding = the_wedding_template(the_wedding_data);
var wedding_party = wedding_party_template(wedding_party_data);
var gallery = gallery_template(gallery_data);
var guest_info = guest_info_template(guest_info_data);
var registry = registry_template(registry_data);

// render
$('#intro').append(intro);
$('#nav').append(nav);
$('#the-wedding').append(the_wedding);
$('#wedding-party').append(wedding_party);
$('#gallery').append(gallery);
$('#guest-info').append(guest_info);
$('#registry').append(registry);
