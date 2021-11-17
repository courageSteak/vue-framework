const app = new Vue({
  el: "#app",
  data: {
    books: [
      {
        id: 1,
        name: '《算法导论》',
        date: '2006-9',
        price: 85.00,
        count: 1
      },
      {
        id: 2,
        name: '《UNIX编程艺术》',
        date: '2006-2',
        price: 59.00,
        count: 2
      },
      {
        id: 3,
        name: '《羊皮卷》',
        date: '2008-10',
        price: 36.00,
        count: 3
      }
    ]
  },
  computed: {
    totalPrice() {
      // 1 普通for循环
      // let totalPrice = 0;
      // for (let i = 0; i < this.books.length; i++) {
      //   totalPrice += this.books[i].price * this.books[i].count
      // }

      // 2 for(let i in this.books)
      // let totalPrice = 0;
      // for (let i in this.books) {
      //   totalPrice += this.books[i].price * this.books[i].count
      // }

      // 3 for(let i of this.books)
      // let totalPrice = 0;
      // for (let item of this.books) {
      //   totalPrice += item.price * item.count;
      // }
      // return totalPrice

      // 高阶函数reduce
      return this.books.reduce(function (preValue, book) {
        return preValue + book.price * book.count
      }, 0)


    }
  },
  methods: {
    // getFinalPrice(price) {
    //   return '￥' + price.toFixed(2)
    // }

    increment(index) {
      console.log('increment: ', index)
      this.books[index].count++;
    },
    decrement(index) {
      console.log('decrement: ', index)
      this.books[index].count--;
    },
    removeHandle(index) {
      this.books.splice(index, 1)
    }

  },
  filters: {
    showPrice(price) {
      return '￥' + price.toFixed(2)
    }
  }
})




