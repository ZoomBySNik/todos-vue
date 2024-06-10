import axios from "axios";

export const postModule = {
    namespaced: true, // Переносим namespaced сюда
    state: () => ({
        posts: [],
        isPostsLoading: true,
        selectedSort: '',
        searchData: '',
        page: 1,
        limit: 15,
        totalPages: 0,
        sortOptions: [
            {value: 'title', name: 'По заголовку'},
            {value: 'body', name: 'По содержанию'},
            {value: 'likes', name: 'По количеству лайков'}
        ],
    }),
    getters: {
        sortedPosts(state) {
            let sortedPosts = [...state.posts];

            switch (state.selectedSort) {
                case "title":
                    sortedPosts = sortedPosts.sort((a, b) => a.title?.localeCompare(b.title));
                    break;
                case "body":
                    sortedPosts = sortedPosts.sort((a, b) => a.body?.localeCompare(b.body));
                    break;
                case "likes":
                    sortedPosts = sortedPosts.sort((a, b) => a.likes - b.likes);
                    break;
                default:
                    break;
            }
            return sortedPosts;
        },
        sortedAndSearchedPosts(state, getters) {
            return getters.sortedPosts.filter(p =>
                p.title.toLowerCase().includes(state.searchData.toLowerCase()) ||
                p.body.toLowerCase().includes(state.searchData.toLowerCase())
            );
        }
    },
    mutations: {
        setPosts(state, posts) {
            state.posts = posts;
        },
        setIsPostsLoading(state, bool) {
            state.isPostsLoading = bool;
        },
        setSelectedSort(state, selectedSort) {
            state.selectedSort = selectedSort;
        },
        setTotalPages(state, totalPages) {
            state.totalPages = totalPages;
        },
        setSearchData(state, searchData) {
          state.searchData = searchData;
        },
        setPage(state, page) {
            state.page = page;
        },
        incrementLikes(state, post) {
            const index = state.posts.findIndex(p => p.id === post.id);
            if (index !== -1) {
                state.posts[index].likes += 1;
                state.posts = [...state.posts];
            }
        },
        decrementLikes(state, post) {
            const index = state.posts.findIndex(p => p.id === post.id);
            if (index !== -1) {
                state.posts[index].likes -= 1;
                state.posts = [...state.posts];
            }
        },
        resetPage(state){
            state.page = 1;
        }
    },
    actions: {
        async fetchPosts({ state, commit }) {
            commit('setIsPostsLoading', true);
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: state.page,
                        _limit: state.limit
                    }
                });
                commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.limit));
                let posts = response.data;
                posts.forEach((post) => {
                    post.likes = Math.round(Math.random() * 100);
                });
                commit('setPosts', posts);

            } catch (e) {
                alert(`Ошибка ${e}`);
            } finally {
                commit('setIsPostsLoading', false);
            }
        },
        async fetchMorePosts({ state, commit }) {
            try {
                if(state.page < state.totalPages){
                    commit('setPage', state.page + 1);
                    const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                        params: {
                            _page: state.page,
                            _limit: state.limit
                        }
                    });
                    commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.limit));
                    let postsWithoutLikes = response.data;
                    postsWithoutLikes.forEach((post) => {
                        post.likes = Math.round(Math.random() * 100);
                    });
                    commit('setPosts', [...state.posts, ...postsWithoutLikes]);
                }
            } catch (e) {
                alert(`Ошибка ${e}`);
            }
        },
    }
};
