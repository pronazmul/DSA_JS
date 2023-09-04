## Find Me

[![Facebook][facebook-shield]][facebook-url]
[![LinkedIn][linkedin-shield]][linkedin-url]
[![mail][mail-shield]][mail-url]

<h1 align="center">Linear Search</h1>

<br />
 <p align="center">
    <img src="https://user-images.githubusercontent.com/58470993/196596880-6b18d835-0401-423b-ac92-f60ceefc6f33.png" alt="Logo" width="500" height="200" />
</p>

### `লিনিয়ার সার্চ (Linear search)`

ইলিমেন্ট যা ইনপুটের পরিমাণ যত বাড়াবেন কাজ অথবা সময় ঠিক ততোই বাড়বে। ১০ টা ইনপুটে ১০ সেকেন্ড লাগলে ১০০ টায় ১০০ সেকেন্ড।

```js
/*
@Desc:    Find Index Number form an array.
@Constraint: Ascending or dscending order not required.
@Step 1:[O(n)]  Traverse on array
@COMPLEXITY: O(n)
*/

function linearSearch(array, index) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === index) return i
  }
  return -1
}

let index = linearSearch([3, 4, 5, 1, 6, 7, 9, 32, 554, 66], 9)
```

<!-- Shield Icons -->

[facebook-shield]: https://img.shields.io/badge/-Facebook-black.svg?style=flat-square&logo=facebook&color=555&logoColor=white
[facebook-url]: https://facebook.com/devnazmul
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/pronazmul
[thumbnail-shield]: https://i.ibb.co/d6hxnvd/Screenshot-50.png
[mail-shield]: https://img.shields.io/badge/mnazmul.dev-%40gmail.com-brightgreen
[mail-url]: mailto:mnazmul.dev@gmail.com
