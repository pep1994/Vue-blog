<template>
  <div id="add-blog">
      <h2>Add a New Blog Post</h2>
      <form v-if="!submitted">
          <label>Blog Title:</label>
          <input type="text" v-model.lazy="blog.title" required >
          <label>Blog Content:</label>
          <textarea v-model.lazy="blog.content" cols="30" rows="10"></textarea>
          <div id="checkboxes">
            <label>Sport</label>
            <input type="checkbox" value="sport" v-model="blog.categories">
            <label>Life</label>
            <input type="checkbox" value="life" v-model="blog.categories">
            <label>Family</label>
            <input type="checkbox" value="family" v-model="blog.categories">
            <label>Food</label>
            <input type="checkbox" value="food" v-model="blog.categories">
          </div>
          <label>Author:</label>
          <select v-model="blog.author">
              <option v-for="(author, index) in authors" :key="index">{{author}}</option>
          </select>
          <button @click.prevent="post">Add Blog</button>
      </form>
      <div v-if="submitted">
            <h3>Thanks for adding your post</h3>
      </div>
      <div id="preview">
          <h3>Preview Blog</h3>
          <h5>Blog title: {{blog.title}}</h5>
          <h5>Blog content:{{blog.content}}</h5>
          <p>{{blog.content}}</p>
          <h5>Blog Categories:</h5>
          <ul>
              <li v-for="(category, index) in blog.categories" :key="index">{{category}}</li>
          </ul>
         <h5>Author: {{blog.author}}</h5>
      </div>
  </div>
</template>

<script>
export default {

    data() {
        return {
            blog: {
                title: "",
                content: "",
                categories: [],
                author: ""
            },
            authors: ['The Vue Ninja', 'The Vue Avenger', 'The Vue Vindicator'],
            submitted: false
        }
    },
    methods: {
        post: function() {
             this.$http.post('http://jsonplaceholder.typicode.com/posts', {
                 title: this.blog.title,
                 body: this.blog.content,
                 userId: 1
             }).then(function(){
                 this.submitted = true;
             });
        }
    }

}
</script>

<style lang="scss">
    #add-blog * {
        box-sizing: border-box;
    }

    #add-blog {
        margin: 20px auto;
        max-width: 500px;
    }

    label {
        display: block;
        margin: 20px 0 10px;
    }

    input[type="text"], textarea {
        display: block;
        width: 100%;
        padding: 8px;
    }

    #preview {
        padding: 10px 20px;
        border: 1px dotted #ccc;
        margin: 30px auto;

        h3 {
            margin-top: 10px;
        }
    }

    #checkboxes {
        input {
            display: inline-block;
            margin-right: 10px;
        }

        label {
            display: inline-block;
        }
    }
</style>