$.ajax({
    url: "https://www.flickr.com/services/rest/?method=flickr.photos.search",
    dataType: "json",
    data: {
        api_key: "6d2ca35639d1d6bc10f4e95dc29073a6",
        per_page: 20,
        format: "json",
        nojasoncallback: 1,
        privacy_filter: 5,
        tags: "landscape"
    }
})

.success(function(data){
    console.log(data.photos.photo);
    let items = data.photos.photo;

    $("#gallery").append("<ul>");

    $(items).each(function(index,data){
        let text = data.title;
        if(!data.title){
            text = "No description in this photo";
        }

        $("#gallery ul")
            .append(
                $("<li>")
                    .append(
                        $("<a>").attr({
                            href : "https://live.staticflickr.com/"+data.server+"/"+data.id+"_"+data.secret+"_b.jpg"
                        })

                        .append(
                            $("<img>").attr({
                                src : "https://live.staticflickr.com/"+data.server+"/"+data.id+"_"+data.secret+"_m.jpg"
                            })
                        )
                    )
                    .append(
                        $("<p>").text(text)
                    )

                    .append(
                        $("<div class='profile'>")
                            .append(
                                $("<img>").attr({
                                    src:  "https://www.flickr.com/buddyicons/"+data.owner+".jpg"
                                }),
                                $("<span>").text(data.owner)
                            )
                    )
            )
    })
})
.error(function(err){
    console.err("데이터를 호출하는 데 실패했습니다");
})