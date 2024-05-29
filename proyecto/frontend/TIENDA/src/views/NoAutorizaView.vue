<template>
    <div>
        <div class="alert alert-danger" role="alert" style="text-align:center">
            <h2><Icon icon="maki:police" /> Acceso no autorizado <Icon icon="" /></h2>
        </div>
    </div>
</template>
<script>
    import { Icon } from '@iconify/vue';
    export default {
        name: "No AutorizaView",
        components: { Icon },
    }
</script>