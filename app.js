const app = Vue.createApp({
    data(){
        return{
            todoList: [
                {id:1,text:"Vue Bootcamp Hafta 1", completed:false},
                {id:2,text:"Vue Bootcamp Hafta 2", completed:false},
                {id:3,text:"Vue Bootcamp Hafta 3", completed:false},
                {id:4,text:"Vue Bootcamp Hafta 4", completed:false},
                {id:5,text:"Vue Bootcamp Hafta 5", completed:false},
                {id:6,text:"Vue Bootcamp Hafta 6", completed:false},
                {id:7,text:"Vue Bootcamp Hafta 7", completed:false},
            ],
        };
    },
    methods:{  //metodlar yazmak için kullanılır
        addTodo(event) {
            this.todoList.push({
                id: new Date().getTime(),
                text: event.target.value,
                completed: false,
            });
        },
        removeItem(todoItem){
            this.todoList = this.todoList.filter(todo=>todo!=todoItem);
        },
    },
    //computed reactivity sağladığı için anlık kontrol mekanizmasına sahiptir.Methodlardaki gibi v-on(@) kullanmaya gerek yoktur
    computed:{ //bir method gibi çalışan değişkenlerdir(geriye return ile değer döndürmesi gerekir)
        
    },
    watch: { //geriye bir değer dödürmek zorunda değildir
        
    },
    beforeCreate(){
        console.log("Vue oluşturulmadan önce beforeCreate çalışır")
    },
    created(){
        console.log("Vue oluluşturulduğunda created çalışır")
    },
    beforemount(){
        console.log("Vue oluşturulup Dom'a bağlanmadan hemen önce beforemount çalışır ")
    },
    mounted(){
        console.log("Vue oluşturulup Dom'a bağlandıktan sonra mounted çalışır")
    },
    beforeUpdate(){
        console.log("Elementler üzerinde herhangi bir değişiklik yapıldığında dom güncellenmeden hemen önce beforeUpdate çalışır")
    },
    updated(){
        console.log("Elementler üzerinde herhangi bir değişiklik yapılıp dom güncellendikten sonra update çalışır")
    },
    beforeDestroy(){
        console.log("Vue instance'i yok edilmeden önce beforeDestroy çalışır")
    },
    destroyed(){
        console.log("Vue instance'i yok edildikten sonra destroyed çalışır")
    },
}).mount("#app")