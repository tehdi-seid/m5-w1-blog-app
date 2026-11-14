import React from "react";
import { SlInfo } from "react-icons/sl";
import { useParams } from "react-router";
import { posts } from "../data/posts";
import { LuClock } from "react-icons/lu";
const post = posts;
function find_post(slug: string | undefined) {
  if (slug) {
    return post.find((pos) => pos.slug === slug);
  }
}
function PostsDetail() {
  const params = useParams();
  const post_to_be_detailed = find_post(params.slug);
  return (
    <article className="border">
      <div>
        <div>
          <p>
            <LuClock />
            <p>{post_to_be_detailed?.publishedAt}</p>
          </p>
        </div>
        <div>time 1m</div>
      </div>
    </article>
  );
}

export default PostsDetail;
