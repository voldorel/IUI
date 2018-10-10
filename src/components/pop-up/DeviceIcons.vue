<template>
    <v-layout row wrap :style = '{fontSize: "10px", marginLeft: "30px", alignItems:"flex-end"}' class="m-left mt-2 text-xs-center"  >
        <v-flex xs2 >
            <img
                    src="./../../assets/iPhonex.png"
                    :style = "{height: '3em'}"
                    class="mb-1"
            />
            <p style="align-items: flex-end" >iPhone X</p>
        </v-flex>
        <v-flex xs2 >
            <img
                    src="./../../assets/iPad.png"
                    :style = "{height: '3.5em'}"
                    class="mb-1"
            />
            <p style="align-items: flex-end" >iPad</p>
        </v-flex>
        <v-flex xs2>
            <img
                    src="./../../assets/mac.png"
                    :style = "{height: '3em'}"
                    class="mb-1"
            />
            <p style="align-items: flex-end" >iMac</p>
        </v-flex>
        <v-flex xs2>
            <img
                    src="./../../assets/blank.png"
                    :style = "{height: '3em'}"
                    class="mb-1"
            />
            <p style="align-items: flex-end" >Blank Canvas</p>
        </v-flex>
    </v-layout>
</template>

<script>
    export default {
        name: "Deviceicons"
    }
</script>

<style scoped>

</style>