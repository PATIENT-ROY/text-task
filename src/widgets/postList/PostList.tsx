import { PostItem } from "../../entities/PostItem";
import { useGetPostsQuery } from "../../store/api";
import { Box } from "@mui/material";
import ContentLoader from "react-content-loader";
import styles from "./PostList.module.scss";

interface PostListProps {
  page: number;
  searchQuery: string;
}

type PostType = {
  id: string;
  title: string;
  body: string;
};

export const PostList = ({ page, searchQuery }: PostListProps) => {
  const {
    data: posts,
    isLoading,
    isError,
  } = useGetPostsQuery({
    page,
    search: searchQuery,
  });

  if (isLoading) {
    return (
      <div>
        {Array.from({ length: 16 }).map((_, index) => (
          <ContentLoader
            key={index}
            speed={2}
            width={150}
            height={260}
            viewBox="0 0 150 265"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <rect x="0" y="5" rx="10" ry="10" width="150" height="94" />
            <rect x="0" y="110" rx="3" ry="3" width="120" height="15" />
            <rect x="0" y="130" rx="3" ry="3" width="80" height="15" />
            <rect x="0" y="165" rx="8" ry="8" width="80" height="30" />
            <rect x="110" y="160" rx="8" ry="8" width="40" height="40" />
          </ContentLoader>
        ))}
      </div>
    );
  }

  if (isError) return <div>Error loading posts</div>;

  return (
    <Box>
      {posts?.map((post: PostType) => (
        <PostItem key={post.id} post={post} />
      ))}
    </Box>
  );
};
