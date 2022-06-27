export function converDate(type, number){
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
    const dayNames = ["Sun","Mon", "Tue", "Wed", "Thu", "Fri", "Sat",
    ];

    if(type === "day"){
        return dayNames[number]
    }else if(type=== "month"){
        return monthNames[number]
    }

}