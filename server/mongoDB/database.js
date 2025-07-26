import mongoose from 'mongoose';
import { DB_URI } from '../config/env.config.js';

   if(!DB_URI){
            throw new Error('Error Connecting to database in development mode')
        }
    
export  const connectToDataBase =  async () => {
            try {
                await mongoose.connect(DB_URI)
                console.log(`Connected to Database in Development Mode`)
                
            } catch (error) {
                console.log(`Error Connecting Database ${error}`)

                process.exit(1)
                
            }
        
}