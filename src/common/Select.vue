<template lang="">
    <div class="select-container">
        <div class="search-wrapper">
            <input v-bind:value="inputText" v-on:input="updateInput" type="text" placeholder="프랜차이즈 검색" />
            <p>{{inputText}}</p>
        </div>
    </div>
    <div class="wrapper">
        <div class="grid-item" v-for="logo in filteredList">
            <img v-bind:src ="logo.image"/>
            <small>{{logo.title}}</small>
        
        </div>
    </div>
</template>
<script>

 import logos from "../logos.js"
 // 로고 더미 데이터


export default {

    data () {
        return {
            inputText: '',
            logos: logos

        }
    },
    methods: {

        updateInput: function (event) {
            console.log(event.target.value)
            var updatedText = event.target.value;
            this.inputText = updatedText;
        },

    },
    computed: {
        filteredList() {
            return this.logos.filter(logo => {
                return logo.title.toLowerCase().includes(this.inputText.toLowerCase())
            })
        }
    }
    
}
</script>
<style>

    .select-container {
        display: flex;
        justify-content: center;
        align-items: center;

    }

    /* 서치창 */
    
    .search-wrapper {
        position: relative;
        
    }
    .search-wrapper > label {
        position: absolute;
        font-size: 12px;
        color: rgba(0,0,0,.50);
        top: 8px;
        left: 12px;
        z-index: -1;
        transition: .15s all ease-in-out;
    }
    .search-wrapper input {
        padding: 4px 12px;
        color: rgba(0,0,0,.70);
        border: 1px solid rgba(0,0,0,.12);
        transition: .15s all ease-in-out;
        background: white;
       
    }
    .search-wrapper:focus {
        outline: none;
        transform: scale(1.05);
    }

    /* 그리드 */
    .wrapper {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
    }


    .grid-item {
        text-align: center;
    }

    .grid-item > img {
        width: 50px;
        height: 50px;
    }




    

</style>