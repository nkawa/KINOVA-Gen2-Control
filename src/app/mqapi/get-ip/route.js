// pages/api/get-ip/route.js
export async function GET(request) {
    const userAgent = request.headers.get('user-agent');
    const clientIP = request.headers.get('x-forwarded-for');
    const host = request.headers.get('host');
    //    console.log("Request:", request.headers);
    return Response.json({
        userAgent,
        clientIP,
        host
    })
}

