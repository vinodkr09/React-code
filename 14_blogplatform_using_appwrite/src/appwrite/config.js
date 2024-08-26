import conf from "../configure/conf";
import { Client, ID, Databases, Storage, Query} from "appwrite";

export class Service{       // class name can be authservice or databaseService or storageService
    client = new Client();
    databases;
    bucket;   // bucket or storage

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)  // your API endpoint
            .setProject(conf.appwriteProjectId)  // your Project Id
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    // create Post
    async createPost({title, slug, content, featuredImage, status, userId}) {
        try {
            return await this.databases.createDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug, {     // here we have taken slug as the document Id
                title,
                content,
                featuredImage,
                status,
                userId,
            })  
            
        } catch (error) {
            console.log("Appwrite service :: createPost :: error", error);
        }
    }

    // updatePost
    async updatePost(slug, {title, content, featuredImage, status}) {
        try {
            return await this.databases.updateDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug,{  // here we have taken slug as the document ID
                title,
                content,
                featuredImage,
                status,
            })
            
        } catch (error) {
            console.log("Appwrite service :: updatePost :: error", error);
        }
    }

    // deletePost
    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug)
            return true

        } catch (error) {
            console.log("Appwrite service :: deletePost :: error", error);
            return false
        }
    }

    // getPost: to get only one post i.e. individual post
    async getPost(slug) {
        try {
            return await this.databases.getDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug)
            
        } catch (error) {
            console.log("Appwrite service :: getPost :: error", error);
            return false
        }
    }

    // getposts: to get all posts ||  queries is variable
    async getPosts(queries = [Query.equal("status", "active")]) {  // we have used query bcz we want select only active document, not unactive
        try {
            return await this.databases.listDocuments(conf.appwriteDatabaseId, conf.appwriteCollectionId, queries)
            
        } catch (error) {
            console.log("Appwrite services :: getPosts :: error", error);
            return false
        }
    }

    // file upload service
    async uploadFile(file) {
        try {
            return await this.bucket.createFile(conf.appwriteBucketId, ID.unique(), file)
            
        } catch (error) {
            console.log("Appwrite service :: uploadFile :: error", error);
            return false
        }
    }

    // delete file
    async deleteFile(fileId) {
        try {
             await this.bucket.deleteFile(conf.appwriteBucketId, fileId )
             return true
            
        } catch (error) {
            console.log("Appwrite services :: deleteFile :: error", error);
            return false
        }
    }

    // file Preview
    getFilePreview(fileId){
        return this.bucket.getFilePreview(conf.appwriteBucketId, fileId)
    }

 
}



const service = new Service()  // object(i.e service) is created so constructor is called.
export default service