import React from "react";
import { SlInfo } from "react-icons/sl";
import { useParams } from "react-router";
import { posts } from "../data/posts";
const post = posts;
function find_post(slug: string | undefined) {
  if (slug) {
    return post.find((pos) => pos.slug === slug);
  }
}
function PostsDetail() {
  const params = useParams();
  const post_to_be_detailed = find_post(params.slug);
  return <div>{post_to_be_detailed?.body}</div>;
}

export default PostsDetail;
