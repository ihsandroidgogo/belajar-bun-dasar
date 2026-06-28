Bun.serve({
    port: 3000,
    fetch: (request,server) => {
        const url = new URL(request.url)
        if(url.searchParams.get("nama")){
            const nama = url.searchParams.get("nama")
            return new Response(`Hello, ${nama}!`)
        } else {
            return new Response("Hello, World!")
        }
    }
})