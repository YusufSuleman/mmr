
import PocketBase from 'pocketbase';
import { createEffect, createResource, onMount, Suspense } from "solid-js";
import SolidMarkdown from "solid-markdown";
import { marked } from 'marked';
import { useParams } from "@solidjs/router";


const fetchFirstPost = async () => {
    const pb = new PocketBase('http://127.0.0.1:8090');
    return await pb.collection('posts').getFirstListItem("", { })
}
const fetchLatestPost = async () => {
    const pb = new PocketBase('http://127.0.0.1:8090');
    return await pb.collection('posts').getList(1, 1, {
        sort: "-created,id"
    });
    
}

function Post(props:any) {
    // return <Suspense fallback={"loading"}s>
    //  <h2>{record().title}</h2>
    // </Suspense>
    // <h2>{record()?.title}</h2>
    const params = useParams(); 
    
    let records = createResource(fetchLatestPost)

    const fetchPost = async () => {
        const pb = new PocketBase('http://127.0.0.1:8090');
        return await pb.collection('posts').getList(1, 1, {
            filter: "id="+"'"+params.id+"'"
        });
        
    }

    if (params.id == "latest") {
        records = createResource(fetchLatestPost)
    }
    else if (String(params.id).length == 15) {
        //ts-expect-error
        records = createResource(fetchPost)
    }
    //record()?.content
    
    let markdown
    //let record = records[0]()?.items.at(0)

    createEffect(() => {
        console.log('record data', records[0]()?.items.at(0))
        if (records[0]()?.items.at(0)) {
            //markdown = marked.parse(record()?.content)
            let postContent = document.getElementById("post-content")
            //console.log(markdown)
        }
    })
    onMount(() => {
    })
    return (
        <div class="content-body">
            <Suspense fallback={"loading"}>
            <div class="post">
                <div class="title">{records[0]()?.items.at(0)?.title}</div>
                <div class="info">
                    {records[0]()?.items.at(0)?.updated + "  "}
                    {records[0]()?.items.at(0)?.author}
                </div>
                <div innerHTML={records[0]()?.items.at(0)?.content} id="post-content"></div>

            </div>
            
            </Suspense>
        </div>
    )
}

export default Post