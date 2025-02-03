import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

type PostType = {
  id: string;
  title: string;
  body: string;
};

interface PostItemProps {
  post: PostType;
}

export const PostItem = ({ post }: PostItemProps) => {
  return (
    <motion.div
      key={post.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <Box mb={2} p={2} border={1} borderRadius={4}>
        <Typography variant="h6">{post.title}</Typography>
        <Typography variant="body2">{post.body}</Typography>
      </Box>
    </motion.div>
  );
};
