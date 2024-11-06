import React, { useReducer, useEffect } from "react";
import useFetch from "../data/useFetch";
import Table from "react-bootstrap/Table";
import Accordion from "react-bootstrap/Accordion";
import TableHeader from "../components/TableHeader";
import TableDataReducer from "../data/TableDataReducer";
import "../styles/TableHeader.css";

const Lab5 = () => {
  const { data: posts } = useFetch("https://jsonplaceholder.typicode.com/posts");
  const { data: users } = useFetch("https://jsonplaceholder.typicode.com/users");
  const { data: comments } = useFetch("https://jsonplaceholder.typicode.com/comments");

  const [tableData, dispatch] = useReducer(TableDataReducer, []);

  const generateTableData = () => {
    return posts.map((p) => ({
      user: users.find((u) => u.id === p.userId),
      post: p,
      comments: comments.filter((c) => c.postId === p.id),
    }));
  };

  useEffect(() => {
    if (posts.length && users.length && comments.length) {
      dispatch({ type: "RESET", payload: generateTableData() });
    }
  }, [posts, users, comments]);

  const handleSort = (order) => {
    switch (order) {
      case "userAsc":
        dispatch({ type: "SORT_USER_ASC" });
        break;
      case "userDesc":
        dispatch({ type: "SORT_USER_DESC" });
        break;
      case "titleAsc":
        dispatch({ type: "SORT_TITLE_ASC" });
        break;
      case "titleDesc":
        dispatch({ type: "SORT_TITLE_DESC" });
        break;
      case "commentsAsc":
        dispatch({ type: "SORT_COMMENTS_ASC" });
        break;
      case "commentsDesc":
        dispatch({ type: "SORT_COMMENTS_DESC" });
        break;
      case "reset":
        dispatch({ type: "RESET", payload: generateTableData() });
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <h1>Posts Table</h1>
      <Table striped bordered hover>
        <TableHeader onSort={handleSort} />
        <tbody>
          {tableData.map(({ user, post, comments }) => (
            <tr key={post.id}>
              <td className="table-user-col">
                <a href={`/lab5/users/${user?.id}`} className="table-button-link">
                  {user ? user.name : "Unknown User"}
                </a>
              </td>
              <td className="table-title-col">
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>{post.title}</Accordion.Header>
                    <Accordion.Body>{post.body}</Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </td>
              <td className="table-comments-col">
                <a href={`/lab5/posts/${post.id}/comments`} className="table-button-link">
                  {comments.length}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Lab5;
