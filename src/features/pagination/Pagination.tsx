import { Button, Box } from "@mui/material";
import { motion } from "framer-motion";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  return (
    <Box display="flex" justifyContent="center" mt={2}>
      {Array.from({ length: totalPages }, (_, i) => (
        <motion.div
          key={i + 1}
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Button
            variant={currentPage === i + 1 ? "contained" : "outlined"}
            onClick={() => onPageChange(i + 1)}
            style={{ margin: "0 5px" }}
          >
            {i + 1}
          </Button>
        </motion.div>
      ))}
    </Box>
  );
};
