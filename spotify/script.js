console.log('lets write javascript');

async function getSongs() {
    let a = await fetch("http://127.0.0.1:154/spotify/songs/")
    let response = await a.text();
    console.log("HTML Response (first 500 chars):", response.substring(0, 500))
    
    let div = document.createElement("div")
    div.innerHTML = response;
    let as = div.getElementsByTagName("a")
    let songs = []
    
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        
        
        console.log(`Link ${index}:`)
        console.log(`  element.href = "${element.href}"`)
        console.log(`  element.getAttribute("href") = "${element.getAttribute("href")}"`)
        console.log(`  element.textContent = "${element.textContent}"`)
        

        if(element.getAttribute("href") && element.getAttribute("href").endsWith(".mp3")){
            songs.push(element.getAttribute("href"))
            console.log("  ✓ Found MP3!")
        }
        console.log("---")
    }
    
    return songs
}  

async function main() {
    let songs = await getSongs()
    console.log("Final songs array:", songs)
    
}

main()