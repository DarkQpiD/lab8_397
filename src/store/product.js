import { ref, computed } from 'vue'

import { defineStore } from 'pinia';

export const useProductStore = defineStore('useProductStore', () => {
    const products = ref([
        {
            name: 'แหวนนภา',
            image: 'https://down-th.img.susercontent.com/file/b4f14ee93706f7f47ecdd421db4df4df',
            description: 'ใช้แล้วมีไฟธาตุนภาเท่ๆ',
            price: 1000,
        },
        {
            name: 'แหวนอรุณ',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjeQeFnFwaMXz2x_cAlWlst7ilr6MTsiTnOSOBPiTs0f3T3Q5X3uz57Vag9pBAUY8AjsU&usqp=CAU',
            description: 'ใช้แล้วมีไฟธาตุอรุณเท่ๆ',
            price: 200,
        },
        {
            name: 'แหวนพิรุณ',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCOW4pX3Vgi7HUtMFKwwWL9YNukNgTrQ95lR0o5OeOmT8HSZZg3cALbvpSAegeA1Xwglw&usqp=CAU',
            description: 'ใช้แล้วมีไฟธาตุพิรุณเท่ๆ',
            price: 200,
        },
        {
            name: 'แหวนอัสนี',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKXid1kkAqnBE1MrZ3BZNNBs-nsrR9SpfIhKuvDSyCBalz4AQvm98kgyey0I4r5v3PpTw&usqp=CAU',
            description: 'ใช้แล้วมีไฟธาตุอัสนีเท่ๆ',
            price: 200,
        },
        {
            name: 'แหวนวายุ',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScUOFxhlqCWjsYUmmW08d3yNS7P8vzwGAclje97opZ9X8joBUVqFbO9eWqS-86EfNdh6M&usqp=CAU',
            description: 'ใช้แล้วมีไฟธาตุวายุเท่ๆ',
            price: 200,
        },
    ]);
    const input = ref('');

    const list_products = computed(() => products.value);

  const load_products = computed(() => products.value.length > 0);

  const search_products = computed(() => {
    if (input.value.length < 3) return products.value;

    return products.value.filter((prd) => {
      if (prd.name.toLowerCase().includes(input.value.toLowerCase()) === false) {
        return false;
      } else {
        return prd.name.toLowerCase().includes(input.value.toLowerCase());
      }
    });
  });

  return { products, list_products, load_products, input, search_products };
});
