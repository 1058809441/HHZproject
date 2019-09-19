<template>
    <div>home
        <div @click="toUser">个人中心</div>
    </div>
    
</template>

<script>
export default {
    methods:{
        toUser(){
            this.$router.push("/users");

        }
    }
}
</script>