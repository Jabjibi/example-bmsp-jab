export async function GET(){
    return new Response(
        JSON.stringify({
            name: "Tanapon Yurawan",
            email: "tanapon.yu@ku.th",
            university:"Kasetsart Sriracha Campus",
            job:"Developer trainees",
            tel:"090-215-9223"
        })
    )
}