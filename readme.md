# 1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

ans: এদের কাজ হল DOM থেকে element খুঁজে আনা ভিন্ন ভিন্ন উপায়ে এবং এদের মধ্যে পার্থক্য রয়েছে।

- getElementById: নির্দিষ্ট একটা id দিয়ে element খুঁজে আনে। যেহেতু id ইউনিক হয় তাই একটি element পাওয়া যায়।
- getElementsByClassName: className মূলত অনেক গুলা থাকে; যাদের সাথে className এর সাথে মিল আছে তাদের DOM থেকে খুঁজে পেতে এটি ব্যবহার করা হয়;
- querySelector: CSS Selector দিয়ে খুঁজে first element আনে;
- querySelectorAll: CSS Selector দিয়ে খুঁজে যত element পাওয়া যায় সব গুলা খুঁজে বের করে আনে;

# 2.How do you create and insert a new element into the DOM?

- প্রথমে একটা element create করতে হবেঃ document.createElement('tagName');
- তারপর element এ content যোগ করা;
- এখন কোন parent এ ধুকাবে তা খুঁজে বের করা এবং ঠিক করা;
- তারপর append করে দেয়া বা appnedChild করে দেয়া;
  এভাবে DOM এ ভিতরে তৈরি করা যায়;

# 3.What is Event Bubbling and how does it work?

ans: Event Bubbling হলো Element ঘাটলে Element পর্যন্ত থেমে থাকে না বরং Parent Element পর্যন্ত ধাপে ধাপে চলে যায় এটাকে বলে Event Bubbling;
একটা Element এ ক্লিক করলে তার উপরের তা হিট করে, এভাবে একটার উপরে আরেকটা হিট করে কাজ করে;

# 4.What is Event Delegation in JavaScript? Why is it useful?

ans: Event Delegation হলো parent element এ একবার event listener বসিয়ে event bubbling এর মাধ্যমে child element গুলোর event ধরতে পারা। এতে করে অনেকগুলো আলাদা আলাদা listener বসাতে হয় না, কোড ছোট হয় আর পারফরম্যান্স ভালো থাকে;

# 5.What is the difference between preventDefault() and stopPropagation() methods?

- preventDefault(): এটি Browser এর Default কাজ থামিয়ে দেয়। যেমন ফর্ম অটো সাবমিট অফ করে দেয়, লিঙ্ক ক্লিক করলে অন্য পেজে যাওয়া অফ করে ইত্যাদি;
- stopPropagation(): Event Bubbling অফ করার জন্য এটি ব্যবহার করা হয়; Event টাকে আর parent element এ উঠতে দেয় না;
