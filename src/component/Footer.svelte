<script>
    import { pageStore } from '../routes/store';
    function reset() {
        pageStore.set(2)
    }
</script>

 <footer>
    
    <div class="items">
        <a on:click={reset} href="/"><div class="name">movies.<span>ED</span></div></a>

        <div class="about">
            <a on:click={reset} href="/">home</a>
            <a on:click={reset} href="/">contact</a>
            <a on:click={reset} href="/">services</a>
        </div>

        <div class="social">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-square-instagram"></i>
            <i class="fa-brands fa-linkedin"></i>
        </div>
    </div>

    <div class="terms">
      <div class="links">
            <a on:click={reset} href="/">terms</a>
            <a on:click={reset} href="/">policy</a>
            <a on:click={reset} href="/">enquiries</a>
      </div>
      <a on:click={reset} href="/"><div class="names">movies.<span>ED</span></div></a>
      <p>&copy;2022 all right resevered</p>
    </div>

</footer>

<style>
    footer{
        position: relative;
        height: 200px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        background-color: rgb(0, 0, 0);
        margin-bottom: -20px;
    }
    footer::after{
        position: absolute;
        content: "";
        width: 100%;
        height: 1px;
        background-color: wheat;
    }
    .name{
        font-size: 1.6rem;
        font-weight: 800;
        color: white;
    }
    .items{
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .about{
        color: white;
    }
    .about a{
        color: white;
        text-decoration: none;
    }
    .social{
        color: white;
    }
    span{
        color: green;
    }
    a{
        font-size: 1rem;
        text-decoration: none;
        color: white;
    }
    .terms{
        display: flex;
        color:white;
        justify-content: space-around;
    }

    @media (max-width: 500px){
        .names{
            font-size: 1.1rem;
            position: absolute;
            top: -37px;
            right: 39%;

        }
        .terms{
            position: relative;
        }
        .terms .links {
            display: flex;
            justify-content: space-around;
            position: absolute;
            left: 20px;
        }
        .terms .links a {
            margin-right: 7px;
        }
        .terms p{
            position: absolute;
            right: 20px;
            word-spacing: 4px;
        }
    }
    
</style>