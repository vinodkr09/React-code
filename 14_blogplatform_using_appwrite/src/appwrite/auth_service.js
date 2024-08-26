import conf from "../configure/conf";
import {client, Account, ID, Client} from "appwrite";

export class AuthService{
    client = new Client();
    account;

    // object is created so constructor is called
    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)  // your API endpoint
            .setProject(conf.appwriteProjectId)  // your Project Id
        this.account = new Account(this.client)
    }

    // creating Account or sign up
    async createAccount({email, password, name}){
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // call another method
                return this.login({email, password});
            } else {
                return userAccount;    
            }
            
        } catch (error) {
            throw error;
        }
    }

    // Login
    async login({email, password}){
        try {
            return await this.account.createEmailPasswordSession(email, password);

            // const userLogin = await this.account.createEmailPasswordSession(email, password);
            // return userLogin;
        } catch (error) {
            throw error;
        }

    }

    // current User means to check whether you are login or not
    async getCurrentUser(){
        try {
           return await this.account.get();
            
        } catch (error) {
            throw error;
        }

        return null;
    }

    // logout
    async logout(){
        try {
            await this.account.deleteSessions();
            
        } catch (error) {
            throw error;
        }
    }
    
}

const authService = new AuthService();   // authservice is object

export default authService