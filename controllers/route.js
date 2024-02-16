import { NextResponse } from "next/server";
import connect from "@/database/firebaseConfig";
import Post from "../models/Post";

export const GET = async (request) => {
    try {
        await connect();
    } catch (error) {
        return new NextResponse("Error in featching posts " + error, {status:500});
    }
}