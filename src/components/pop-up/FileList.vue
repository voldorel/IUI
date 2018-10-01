<template>
    <div class="file-list">
        <ul class="fa-ul">
            <li @click="sayhi"><span class="fa-li"><i class="fas fa-file"></i></span>Project1</li>
            <li @click="sayhi"><span class="fa-li"><i class="fas fa-file"></i></span>Test</li>
            <li @click="sayhi"><span class="fa-li"><i class="fas fa-file"></i></span>Sth Different</li>
            <li @click="sayhi"><span class="fa-li"><i class="fas fa-file"></i></span>in lists</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "FileList",
        methods:{
            sayhi(){
                alert('you clicked file icon')
            }
        }
    }
</script>

<style scoped>

    .file-list{
        font-size: x-small;
    }

    li{
        margin-bottom: 10px;
        cursor: pointer;
    }
    li:hover{
        color: #3A9AFC;
    }

</style>