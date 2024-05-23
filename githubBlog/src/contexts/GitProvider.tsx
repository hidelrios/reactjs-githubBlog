import { ReactNode, createContext, useEffect, useState } from "react";
import api from "../lib/axios";

interface GitContextType {
  user: any;
  issues: any;
  getUser: (username: string) => Promise<void>;
  getUserIssues: (username: string, repository: string) => Promise<void>;
}

interface GitContextProviderProps {
  children: ReactNode;
}

export const GitContext = createContext({} as GitContextType);

export const GitContextProvider = ({ children }: GitContextProviderProps) => {
  const [user, setUser] = useState("");
  const [issues, setIssues] = useState([]);

  async function getUser(username: string) {
    try {
      const response = await api.get(`/users/${username}`);
      setUser(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  async function getUserIssues(username: string, repository: string) {
    //https://api.github.com/search/issues?q=repo:hidelrios/reactjs-githubBlog
    try {
      const response = await api.get(`search/issues`, {
        params: {
          q: `repo:${username}/${repository}`,
        },
      });
      setIssues(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getUser("hidelrios");
    getUserIssues("hidelrios", "reactjs-githubBlog");
  }, []);

  return (
    <GitContext.Provider value={{ getUser, user, issues, getUserIssues }}>
      {children}
    </GitContext.Provider>
  );
};


