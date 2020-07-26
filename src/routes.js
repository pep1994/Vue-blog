import Vue from 'vue';
import Router from 'vue-router';
import showBlogs from './components/showBlogs.vue';
import addBlog from './components/addBlog.vue';
import singleBlog from './components/singleBlog.vue';

Vue.use(Router);

export default new Router({
    routes:[
        {
            path: '/',
            name: 'blog',
            component: showBlogs
        },
        {
            path: '/add',
            name: 'newBlog',
            component: addBlog
        },
        {
            path: '/blog/:id',
            name: 'singleBlog',
            component: singleBlog
        }   
    ]   
});