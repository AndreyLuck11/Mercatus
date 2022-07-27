import React, {useMemo, useState} from 'react';
import PostService from '../API/PostServise';
import { getPageCount } from '../utils/pages';
import { useEffect } from 'react';
import { usePost } from '../components/hooks/usePost';
import MyButton from '../components/UI/button/MyButton';
import MyModal from '../components/UI/MyModal/MyModal';
import PostForm from '../components/PostForm';
import PostFilter from '../components/PostFilter';
import Pagination from '../components/UI/Pagination/Pagination';
import PostList from '../components/PostList';
import Loader from '../components/UI/loader/Loader'
import {useFetching} from '../components/hooks/useFetching'


import axios from 'axios';

function Posts() {
			const[posts, setPosts] = useState([])

			const[filter, setFilter] = useState({sort:'', query:''})
			const[modal, setModal] = useState(false)
			const[totalPages, setTotalPages] = useState(0);
			const[limit, setLimit] = useState(10);
			const[page, setPage] = useState(1);
			const sortedAndSearchedPosts = usePost(posts, filter.sort, filter.query);
			

			const [fetchPosts, isPostsLoading, postError] = useFetching( async () => {
				const respons = await PostService.getAll(limit, page);
				setPosts(respons.data);
				const totalCount = respons.headers['x-total-count'];
				setTotalPages(getPageCount(totalCount, limit))

			})
			

			useEffect(() => {
				fetchPosts();
			}, [page])

			const createPost = (newPost) =>{
				setPosts([...posts, newPost])
				setModal(false);
			}

			const removePost = (post) => {
				setPosts(posts.filter(p => p.id !== post.id))
			}

			const changePage = (page) => {
				setPage(page)
			}


	return (
		<div className="App">
			<div className="container">
			<MyButton style={{marginTop: 10}} onClick={() => setModal(true)}>Создать пост</MyButton>
			<MyModal visible={modal} setVisible={setModal}>
				<PostForm create={createPost}/>
			</MyModal>
			
			<hr style={{margin:'15px 0px'}} />
			<PostFilter filter={filter} setFilter={setFilter}/>
			{postError && 
				<h1> Произошла ошибка ${postError} </h1>
			}

		 {isPostsLoading
				? <Loader/>
				: <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Cписок постов 1"/>
		 }

		 <Pagination
			 page={page}
			 changePage={changePage}
			 totalPages={totalPages}
		 />
			</div>
		</div>
	);
}
export default Posts;
