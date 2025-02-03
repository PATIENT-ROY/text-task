import { useState } from "react";
import { PostList } from "../../widgets/postList/PostList";
import { Pagination } from "../../features/pagination/Pagination";
import { Search } from "../../features/Search/Search";

export const MainPage = () => {
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      <Search onSearch={setSearchQuery} />
      <PostList page={page} searchQuery={searchQuery} />
      <Pagination currentPage={page} totalPages={10} onPageChange={setPage} />
    </div>
  );
};
