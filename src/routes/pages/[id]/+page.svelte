<script>
    export let data;
    console.log(data);
    console.log('yes');
    import { pageStore } from '../../store';
    import {fly,fade,scale} from 'svelte/transition'
    import Popular from '../../../component/popular.svelte';
    
    
</script>
{#key $pageStore}
    <mainn in:fly={{y:-50}} out:fly={{y:-50}}>
        <Popular movies={data}/>
    </mainn>
{/key}
