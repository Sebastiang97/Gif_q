export const getFetchGifs = async (category)=>{
        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=XI4VhJ3bHRJPx0Qi6KKexinBJsdSKnSi`;
        const res = await fetch(url);
        const {data} = await res.json();
        const imgs = data.map(img =>{
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })

        return imgs;
        
    }