const router = require("express").Router()
const statedata = [{
        Tamilnadu: {
            capital: "CHENNAI",
            Population: "78.8 Million",
            officialLanguage: "Tamil",
            Manchester: "Coimbatore",
            Education: "73.54"
        },

        Andaman_NicobarIslands: {
            capital: "PORT BLAIR",
            Population: "2.5 Million",
            officialLanguage: "Singalam,Tamil",
            Manchester: "port blair",
            Education: "86.63%"
        },

        Andhrapradesh: {
            capital: "Amaravati",
            Population: "49 milion",
            officialLanguage: "Telugu",
            largest_city: "Vishakapatnam",
            Education: "67.05%"
        },

        Arunachalpradesh: {
            capital: "itanagar",
            Population: "1.5 milion",
            officialLanguage: "Engish",
            largest_city: "itanagar",
            Education: "65.38%"
        },

        Assam: {
            capital: "Dispur",
            Population: "3.15 milion",
            officialLanguage: "Assamse",
            largest_city: "Nagon",
            Education: "72%"
        },

        bihar: {
            capital: "Patna",
            Population: "10.15 milion",
            officialLanguage: "Hindi",
            largest_city: "Nagon",
            Education: "61%"
        },
        chattisgarah: {
            capital: "Naya Raipur",
            Population: "2.15 milion",
            officialLanguage: "chattisgari",
            largest_city: "raipur",
            Education: "72%"
        },
        Goa: {
            capital: "Panaji",
            Population: "14 milion",
            officialLanguage: "konkani",
            largest_city: "panaji",
            Education: "88%"
        },

        Gujarat: {
            capital: "GandhiNagar",
            Population: "60 milion",
            officialLanguage: "Gujarati",
            largest_city: "surat",
            Education: "78%"
        },
        Haryana: {
            capital: "chandigar",
            Population: "2 milion",
            officialLanguage: "haryavani",
            largest_city: "panipat",
            Education: "78%"
        },
        Himachal_pradesh: {
            capital: "shimla",
            Population: "6.8 milion",
            officialLanguage: "hindhi",
            largest_city: "shimla",
            Education: "82%"
        },
        jharghand: {
            capital: "ranchi",
            Population: "30 milion",
            officialLanguage: "hindhi",
            largest_city: "ranchi",
            Education: "64%"
        },
        karnataka: {
            capital: "Bangalore",
            Population: "60 milion",
            officialLanguage: "kannada",
            largest_city: "Bangalore",
            Education: "75%"
        },
        Kerala: {
            capital: "Thiruvananthapuram",
            Population: "30 million",
            officialLanguage: "Malayalam",
            largest_city: "kochi",
            Education: "94%"
        },
        madhyapradesh: {
            capital: "Bhopal",
            Population: "7 million",
            officialLanguage: "Marathi",
            largest_city: "Mumbai",
            Education: "76%"
        },
        maharastra: {
            capital: "mumbai",
            Population: "25 million",
            officialLanguage: "Marathi",
            largest_city: "mumbai",
            Education: "82%"
        },
        manipur: {
            capital: "imphal",
            Population: "28 million",
            officialLanguage: "Manipuri",
            largest_city: "imphal",
            Education: "82%"
        },
        maharastra: {
            capital: "mumbai",
            Population: "11 million",
            officialLanguage: "Malayalam",
            largest_city: "kochi",
            Education: "94%"
        },
        mizoram: {
            capital: "aizwal",
            Population: "1 million",
            officialLanguage: "Mizo",
            largest_city: "Aizwal",
            Education: "91%"
        },
        meghalaya: {
            capital: "shillong",
            Population: "29 million",
            officialLanguage: "English",
            largest_city: "shillong",
            Education: "79%"
        },
        Nagaland: {
            capital: "kohima",
            Population: "19 million",
            officialLanguage: "english",
            largest_city: "Dimapur",
            Education: "79%"
        },
        odisha: {
            capital: "Bhubaneswar",
            Population: "4 million",
            officialLanguage: "oriya",
            largest_city: "Brahmapur",
            Education: "72%"
        },
        punjab: {
            capital: "chandigar",
            Population: "27 million",
            officialLanguage: "punjabi",
            largest_city: "ludhiana",
            Education: "75%"
        },
        Rajasthan: {
            capital: "jaipur",
            Population: "65 million",
            officialLanguage: "hindhi",
            largest_city: "jaipur",
            Education: "66%"
        },
        sikkim: {
            capital: "Gangtok",
            Population: "6 lakh",
            officialLanguage: "Nepali",
            largest_city: "Gangtok",
            Education: "81%"
        },
        telangana: {
            capital: "hyderabad",
            Population: "35 million",
            officialLanguage: "telugu,urudhu",
            largest_city: "hyderabad",
            Education: "66%"
        },
        tiripura: {
            capital: "agartala",
            Population: "35 million",
            officialLanguage: "bengali",
            largest_city: "agartala",
            Education: "87%"
        },
        uttarpradesh: {
            capital: "lucknow",
            Population: "19 million",
            officialLanguage: "Hindhi",
            largest_city: "lucknow",
            Education: "67%"
        },
        uttarakand: {
            capital: "gairsain",
            Population: "10 million",
            officialLanguage: "hindhi",
            largest_city: "haridiwar",
            Education: "78%"
        },
        westbengal: {
            capital: "kolkata",
            Population: "9 million",
            officialLanguage: "bengali",
            largest_city: "kolkata",
            Education: "76%"
        }
    }

]

router.get("/signup", (req, res) => {
    res.json({ data: statedata })
})

module.exports = router