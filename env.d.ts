declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SECRET: string;
      PORT:string;
      MONGO_URL: string;
    }
  }
}

export {};
