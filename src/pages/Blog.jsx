import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Shell from "../components/Shell/Shell";
import Blogpost from "../components/Blogpost/Blogpost";
import Loader from "../components/Loader/Loader";
import { fetchBlogPosts } from "../contentful";

const Ornament = styled.img.attrs({
  src: "assets/ornament.png",
  alt: "Ornament",
})`
  padding-top: 40px;
  width: 200px;
`;

const ProjectsLayout = styled.div`
  display: flex;
  margin-top: 200px;
  flex-direction: column;
  gap: 40px;
  height: calc(100vh - 24px - 40px);
  width: 40vw;

  @media screen and (max-width: 920px) {
    margin-top: 0;
    width: 80vw;
  }
`;

function Blog() {
  const [blogposts, setBlogposts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const { entries, isLoading } = await fetchBlogPosts();
      setLoading(isLoading);
      setBlogposts(entries);
    };

    fetchData();
  }, []);

  return (
    <Shell>
      <ProjectsLayout>
        {loading ? (
          <Loader />
        ) : (
          blogposts
            .map((blogpost) => (
              <Blogpost
                key={blogpost.key}
                title={blogpost.title}
                description={blogpost.description}
                link={`blog/${blogpost.key}`}
                date={blogpost.date}
              />
            ))
        )}
        <Ornament />
      </ProjectsLayout>
    </Shell>
  );
}

export default Blog;
