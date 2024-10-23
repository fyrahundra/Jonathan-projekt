<script>
    
    let image = "https://picsum.photos/id/70/367/267"
    let photo = "https://picsum.photos/id/88/367/267"
    let picture = "https://picsum.photos/id/93/367/267"

</script>

<h1>Photoapp</h1>

<p>Denna sida innehåller <strong> fina </strong> bilder</p>

<div class="photo">
    <div class="image-wrapper">
        <img src={image} alt="Flexbox egenskaper">
    </div>

    <div class="image-wrapper">
        <img src={photo} alt="Bild 2">
    </div>

    <div class="image-wrapper">
        <img src={picture} alt="Bild 3">
    </div>
</div>

<style>
    .photo{
        display: flex;
        max-width: 100vw;
        flex-wrap: wrap;
        background-color: blueviolet;
        overflow: hidden;
        align-items: center;
        justify-content: center;
    }
    .photo img{
        width: 100%;
        border-radius: 20px;
    }
    .image-wrapper img{
        width: 100%;
        flex-grow: 1;
        flex-basis: 300px;
        margin: 10px;
        border: 2px solid white;
        box-shadow: 4px 8px 10px rgba(0,0,0,0.2);
    }
    .image-wrapper:hover{
        flex-grow: 2;
        transition: flex 2s;
    }
    .image-wrapper:active{
        transform: scale(0.9);
        transition: transform 0.5s;
    }
    
    h1{
        text-align: center;
        font-size: 50px;
        margin: 20px;
        color: grey;
    }
</style>