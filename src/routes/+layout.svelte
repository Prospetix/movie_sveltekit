<script>
	import { pageStore } from './store.js';
    import Input from "../component/Input.svelte";
    import Footer from "../component/Footer.svelte";
    import {fly, scale, fade,blur,crossfade,slide} from "svelte/transition"

    import { page } from '$app/stores';
	
    let check = false
    // let nextPage = 2;
    let show = false

    function toggles() {
        show = !show
        console.log(show);
        check = !check
        
    }
   
    function reset() {
        pageStore.set(2)
    }   
    
    
</script>

<svelte:head>
    <title>movies.ED</title>
    {#if check}
        <style>
            body{
                overflow: hidden;
            }
        </style>    
    {/if} 
</svelte:head>

<!-- <svelte:body on:mousemove={send}/> -->

<main>
    <nav>
        <a on:click={reset} href="/"><div class="name">movies.<span>ED</span></div></a>
        <Input />
        {#key show}
            <div class="list" class:display={show} in:blur={{duration:700}} out:slide>
                <ul>
                    <li><a target="_parent" on:click={reset} class={$page.url.pathname === '/' ? 'active' : ''}  href="/">home</a></li>
                    <li><a target="_parent" on:click={reset} class={$page.url.pathname === '/about' ? 'active' : ''} href="/about">about</a></li>
                    <li><a target="_parent" on:click={reset} class={$page.url.pathname === '/adventure' ? 'active' : ''} href="/adventure">adventure</a></li>
                </ul>
            </div>
        {/key}
        
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="box" on:click={toggles}>
            <div class="toggle"> </div>
            
        </div>
    </nav>
    
  <slot />
   <!-- <a class="pages" on:click={next} href={"/pages/"+$pageStore}>{'page'+" "+$pageStore}</a> -->
  <Footer />
</main>



<style>
   
    main{
        height: 100%;
        display: flex;
        flex-direction: column;
       
    }
   
    .display{
        display: flex;
    }
    .active{
        color: green;
    }
    .box{
        /* background-color: red; */
        width: 50px;
        height: 40px;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        display: none;
    }
   .toggle{
        width: 30px;
        height: 3px;
        background-color: #ffffff;
        position: absolute;
        cursor: pointer;
   }
   .toggle::after{
        position: absolute;
        content: "";
        width: 31px;
        height: 3px;
        background-color: white;
        top: 10px;
   }
   .toggle::before{
        position: absolute;
        content: "";
        width: 30px;
        height: 3px;
        background-color: white;
        top: -10px;
   }
   .name{
    font-size: 1.4rem;
   }
    nav{
        background-color: rgb(10, 9, 9);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
    }
    div{
        font-size: 1.2rem;
        font-weight: 800;
        color: white;
    }
    span{
        color: green;
    }
    ul{
        display: flex;
        justify-content: space-around;
    }
    ul li{
        padding: 10px;
        list-style: none;
        transition: all 0.80s ease;
        /* border-radius: 10px; */
        position: relative;
    }
    ul li::after{
        position: absolute;
        content: "";
        width: 0%;
        height: 2px;
        background-color: green;
        left: 10%;
        bottom: 0;
        transition: 1s all ease-in-out;
    }
    ul li:hover::after{
        background-color: green;
        /* border-radius: 10px; */
        width: 90%;
        transform-origin: center;
        transition: .30s all ease-in-out;
    }
    
    a{
        font-size: 1rem;
        text-transform: uppercase;
        text-decoration: none;
        color: white;
        padding: 2px 2px;
        position: relative;
        cursor: pointer;
       
    }
    
    
    @media (max-width: 600px){
        *{
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }
        .list{
            /* display: block; */
            position: absolute;
            top: 70px;
            left: 0;
            height: 100vh;
            width: 100%;
            background-color: black;
            display: none;
            justify-content: center;
            align-items: start;
            bottom: 0;
            z-index: 10;
        }
        .list ul{
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            margin-top: 20px;
        }
        .list ul li{
            margin-top: 10px;
            
        }
        .list ul li a{
            padding: 20px;
            font-size: 2.1rem;
        }
        .box{
            display: flex;
        }
        .display{
        display: flex ;
        }
        ul li:hover::after{
        position: absolute;
        content: "";
        width: 0%;
        height: 2px;
        background-color: green;
        left: 10%;
        bottom: 0;
        transition: 1s all ease-in-out;
        }

        ul li a::after{
        position: absolute;
        content: "";
        width: 0%;
        height: 2px;
        background-color: green;
        left: 10%;
        bottom: 0;
        transition: 1s all ease-in-out;
        }
        ul li a:hover::after{
            background-color: green;
            /* border-radius: 10px; */
            width: 90%;
            transform-origin: center;
            transition: .30s all ease-in-out;
        }
    }
</style>