const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID)
}

// console.log("URL:- " + import.meta.env.VITE_APPWRITE_URL);
// console.log("project:- " + import.meta.env.VITE_APPWRITE_PROJECT_ID);
// console.log("database:- " + import.meta.env.VITE_APPWRITE_DATABASE_ID);
// console.log("collection:- " + import.meta.env.VITE_APPWRITE_COLLECTION_ID);
// console.log("bucket:- " + import.meta.env.VITE_APPWRITE_BUCKET_ID);

// console.log("conf.URL:- " + conf.appwriteUrl);
// console.log("conf.project:- " + conf.appwriteProjectId);
// console.log("conf.database:- " + conf.appwriteDatabaseId);
// console.log("conf.collection:- " + conf.appwriteCollectionId);
// console.log("conf.bucket:- " + conf.appwriteBucketId);


export default conf