<template>
    <div class="file-list">

        <ul class="fa-ul">
            <li @click="sayhi"><span class="fa-li"><i class="fas fa-file"></i></span>Project1</li>
            <li @click="sayhi"><span class="fa-li"><i class="fas fa-file"></i></span>Test</li>
            <li @click="sayhi"><span class="fa-li"><i class="fas fa-file"></i></span>Sth Different</li>
            <li @click="sayhi"><span class="fa-li"><i class="fas fa-file"></i></span>in lists</li>
        </ul>

        <!--<v-list class="mt-2"-->
        <!--:dense="false">-->
        <!--<v-list-tile @click = 'console.log()' class = 'list-file'>-->
        <!--<v-list-tile-action class = 'm-icon'>-->
        <!--<v-icon size = '0.7em' color = 'primary'>fas fa-file</v-icon>-->
        <!--</v-list-tile-action>-->
        <!--<v-list-tile-content>-->
        <!--<p class="m-left-d grey1">-->
        <!--new file-->
        <!--</p>-->
        <!--</v-list-tile-content>-->
        <!--</v-list-tile>-->
        <!--<v-list-tile @click = 'console.log()' class = 'list-file'>-->
        <!--<v-list-tile-action class = 'm-icon'>-->
        <!--<v-icon size = '0.7em'>fas fa-file</v-icon>-->
        <!--</v-list-tile-action>-->
        <!--<v-list-tile-content>-->
        <!--<p class="m-left-d grey1">-->
        <!--124124b34643573-->
        <!--</p>-->
        <!--</v-list-tile-content>-->
        <!--</v-list-tile>-->
        <!--<v-list-tile @click = 'console.log()' class = 'list-file'>-->
        <!--<v-list-tile-action class = 'm-icon'>-->
        <!--<v-icon size = '0.7em'>fas fa-file</v-icon>-->
        <!--</v-list-tile-action>-->
        <!--<v-list-tile-content>-->
        <!--<p class="m-left-d grey1">-->
        <!--Untitled-->
        <!--</p>-->
        <!--</v-list-tile-content>-->
        <!--</v-list-tile>-->
        <!--</v-list>-->

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