const reportData = {
    clientName: "JS Bank Limited",
    issueDate: "12 Dec, 2018",
    summary: {
        reporting: 2061,
        notReporting: 115,
        totalPortfolio: 2176
    },
    nrTypes: [
        { name: "NO CONTACT / NON-COOPERATIVE", quantity: 30 },
        { name: "LOW GSM/NON GSM AREA", quantity: 2 },
        { name: "PARKED FOR PROLONGED PERIOD", quantity: 28 },
        { name: "SCHEDULED FOR REDO", quantity: 40 },
        { name: "TOTAL LOSS / UNDER REPAIR", quantity: 7 },
        { name: "THIRD PARTY SOLD", quantity: 1 }
    ],
    comparison: {
        previousTotal: 2076,
        currentTotal: 2176,
        previousNRCount: 123,
        currentNRCount: 115,
        previousNRPercentage: 5.9,
        currentNRPercentage: 5.3
    },
   entries: [
    //for table 1 
    { sno: 1, reg: "BNP 101", name: "Ali", make: "Honda Civic", engine: "Q100001", chassis: "ZRE1000001", model: "2018", nrDate: "02/12/2018", aging: "26" },
    { sno: 2, reg: "BNP 102", name: "Sara", make: "Toyota Corolla", engine: "Q100002", chassis: "ZRE1000002", model: "2019", nrDate: "03/12/2018", aging: "25" },
    { sno: 3, reg: "BNP 103", name: "Umar", make: "Suzuki Swift", engine: "Q100003", chassis: "ZRE1000003", model: "2020", nrDate: "04/12/2018", aging: "24" },
    { sno: 4, reg: "BNP 104", name: "Zain", make: "Hyundai Tucson", engine: "Q100004", chassis: "ZRE1000004", model: "2018", nrDate: "05/12/2018", aging: "23" },
    { sno: 5, reg: "BNP 105", name: "Areeba", make: "Kia Sportage", engine: "Q100005", chassis: "ZRE1000005", model: "2017", nrDate: "06/12/2018", aging: "22" },
    { sno: 6, reg: "BNP 106", name: "Hamza", make: "Honda City", engine: "Q100006", chassis: "ZRE1000006", model: "2021", nrDate: "07/12/2018", aging: "21" },
    { sno: 7, reg: "BNP 107", name: "Nida", make: "Toyota Prius", engine: "Q100007", chassis: "ZRE1000007", model: "2015", nrDate: "08/12/2018", aging: "20" },
    { sno: 8, reg: "BNP 108", name: "Imran", make: "Suzuki Cultus", engine: "Q100008", chassis: "ZRE1000008", model: "2016", nrDate: "09/12/2018", aging: "19" },
    { sno: 9, reg: "BNP 109", name: "Fatima", make: "Honda Accord", engine: "Q100009", chassis: "ZRE1000009", model: "2019", nrDate: "10/12/2018", aging: "18" },
    { sno: 10, reg: "BNP 110", name: "Bilal", make: "Toyota Fortuner", engine: "Q100010", chassis: "ZRE1000010", model: "2022", nrDate: "11/12/2018", aging: "17" },
    
    { sno: 11, reg: "BNP 111", name: "Faisal", make: "Suzuki WagonR", engine: "Q100011", chassis: "ZRE1000011", model: "2020", nrDate: "12/12/2018", aging: "16" },
    { sno: 12, reg: "BNP 112", name: "Asma", make: "Nissan Juke", engine: "Q100012", chassis: "ZRE1000012", model: "2016", nrDate: "13/12/2018", aging: "15" },
    { sno: 13, reg: "BNP 113", name: "Junaid", make: "Honda Vezel", engine: "Q100013", chassis: "ZRE1000013", model: "2021", nrDate: "14/12/2018", aging: "14" },
    { sno: 14, reg: "BNP 114", name: "Mehak", make: "Toyota Aqua", engine: "Q100014", chassis: "ZRE1000014", model: "2020", nrDate: "15/12/2018", aging: "13" },
    { sno: 15, reg: "BNP 115", name: "Hassan", make: "Suzuki Mehran", engine: "Q100015", chassis: "ZRE1000015", model: "2014", nrDate: "16/12/2018", aging: "12" },
    { sno: 16, reg: "BNP 116", name: "Tania", make: "Hyundai Elantra", engine: "Q100016", chassis: "ZRE1000016", model: "2023", nrDate: "17/12/2018", aging: "11" },
    { sno: 17, reg: "BNP 117", name: "Yasir", make: "Kia Picanto", engine: "Q100017", chassis: "ZRE1000017", model: "2021", nrDate: "18/12/2018", aging: "10" },
    { sno: 18, reg: "BNP 118", name: "Rabia", make: "MG HS", engine: "Q100018", chassis: "ZRE1000018", model: "2022", nrDate: "19/12/2018", aging: "9" },
    { sno: 19, reg: "BNP 119", name: "Sajid", make: "Changan Alsvin", engine: "Q100019", chassis: "ZRE1000019", model: "2021", nrDate: "20/12/2018", aging: "8" },
    { sno: 20, reg: "BNP 120", name: "Noreen", make: "Proton Saga", engine: "Q100020", chassis: "ZRE1000020", model: "2021", nrDate: "21/12/2018", aging: "7" },
    
    { sno: 21, reg: "BNP 121", name: "Ahmad", make: "DFSK Glory", engine: "Q100021", chassis: "ZRE1000021", model: "2022", nrDate: "22/12/2018", aging: "6" },
    { sno: 22, reg: "BNP 122", name: "Kinza", make: "Toyota Yaris", engine: "Q100022", chassis: "ZRE1000022", model: "2020", nrDate: "23/12/2018", aging: "5" },
    { sno: 23, reg: "BNP 123", name: "Irfan", make: "Hyundai Sonata", engine: "Q100023", chassis: "ZRE1000023", model: "2021", nrDate: "24/12/2018", aging: "4" },
    { sno: 24, reg: "BNP 124", name: "Anam", make: "Kia Stonic", engine: "Q100024", chassis: "ZRE1000024", model: "2022", nrDate: "25/12/2018", aging: "3" },
    { sno: 25, reg: "BNP 125", name: "Farhan", make: "Honda BR-V", engine: "Q100025", chassis: "ZRE1000025", model: "2019", nrDate: "26/12/2018", aging: "2" },
    { sno: 26, reg: "BNP 126", name: "Sana", make: "Toyota Hilux", engine: "Q100026", chassis: "ZRE1000026", model: "2018", nrDate: "27/12/2018", aging: "1" },
    { sno: 27, reg: "BNP 127", name: "Zara", make: "Nissan Dayz", engine: "Q100027", chassis: "ZRE1000027", model: "2015", nrDate: "28/12/2018", aging: "0" },
    { sno: 28, reg: "BNP 128", name: "Rehan", make: "Suzuki Alto", engine: "Q100028", chassis: "ZRE1000028", model: "2021", nrDate: "29/12/2018", aging: "12" },
    { sno: 29, reg: "BNP 129", name: "Zubair", make: "Hyundai Santa Fe", engine: "Q100029", chassis: "ZRE1000029", model: "2023", nrDate: "30/12/2018", aging: "5" },
    { sno: 30, reg: "BNP 130", name: "Aysha", make: "Toyota Vitz", engine: "Q100030", chassis: "ZRE1000030", model: "2016", nrDate: "31/12/2018", aging: "3" },
    
    //for table 2
    { sno: 1, reg: "BNP 101", name: "Ali", make: "Honda Civic", engine: "Q100001", chassis: "ZRE1000001", model: "2018", nrDate: "02/12/2018", aging: "26" },
    { sno: 2, reg: "BNP 102", name: "Sara", make: "Toyota Corolla", engine: "Q100002", chassis: "ZRE1000002", model: "2019", nrDate: "03/12/2018", aging: "25" },
    
    //for table 3
    { sno: 1, reg: "BNP 101", name: "Ali", make: "Honda Civic", engine: "Q100001", chassis: "ZRE1000001", model: "2018", nrDate: "02/12/2018", aging: "26" },
    { sno: 2, reg: "BNP 102", name: "Sara", make: "Toyota Corolla", engine: "Q100002", chassis: "ZRE1000002", model: "2019", nrDate: "03/12/2018", aging: "25" },
    { sno: 3, reg: "BNP 103", name: "Umar", make: "Suzuki Swift", engine: "Q100003", chassis: "ZRE1000003", model: "2020", nrDate: "04/12/2018", aging: "24" },
    { sno: 4, reg: "BNP 104", name: "Zain", make: "Hyundai Tucson", engine: "Q100004", chassis: "ZRE1000004", model: "2018", nrDate: "05/12/2018", aging: "23" },
    { sno: 5, reg: "BNP 105", name: "Areeba", make: "Kia Sportage", engine: "Q100005", chassis: "ZRE1000005", model: "2017", nrDate: "06/12/2018", aging: "22" },
    { sno: 6, reg: "BNP 106", name: "Hamza", make: "Honda City", engine: "Q100006", chassis: "ZRE1000006", model: "2021", nrDate: "07/12/2018", aging: "21" },
    { sno: 7, reg: "BNP 107", name: "Nida", make: "Toyota Prius", engine: "Q100007", chassis: "ZRE1000007", model: "2015", nrDate: "08/12/2018", aging: "20" },
    { sno: 8, reg: "BNP 108", name: "Imran", make: "Suzuki Cultus", engine: "Q100008", chassis: "ZRE1000008", model: "2016", nrDate: "09/12/2018", aging: "19" },
    { sno: 9, reg: "BNP 109", name: "Fatima", make: "Honda Accord", engine: "Q100009", chassis: "ZRE1000009", model: "2019", nrDate: "10/12/2018", aging: "18" },
    { sno: 10, reg: "BNP 110", name: "Bilal", make: "Toyota Fortuner", engine: "Q100010", chassis: "ZRE1000010", model: "2022", nrDate: "11/12/2018", aging: "17" },
    
    { sno: 11, reg: "BNP 111", name: "Faisal", make: "Suzuki WagonR", engine: "Q100011", chassis: "ZRE1000011", model: "2020", nrDate: "12/12/2018", aging: "16" },
    { sno: 12, reg: "BNP 112", name: "Asma", make: "Nissan Juke", engine: "Q100012", chassis: "ZRE1000012", model: "2016", nrDate: "13/12/2018", aging: "15" },
    { sno: 13, reg: "BNP 113", name: "Junaid", make: "Honda Vezel", engine: "Q100013", chassis: "ZRE1000013", model: "2021", nrDate: "14/12/2018", aging: "14" },
    { sno: 14, reg: "BNP 114", name: "Mehak", make: "Toyota Aqua", engine: "Q100014", chassis: "ZRE1000014", model: "2020", nrDate: "15/12/2018", aging: "13" },
    { sno: 15, reg: "BNP 115", name: "Hassan", make: "Suzuki Mehran", engine: "Q100015", chassis: "ZRE1000015", model: "2014", nrDate: "16/12/2018", aging: "12" },
    { sno: 16, reg: "BNP 116", name: "Tania", make: "Hyundai Elantra", engine: "Q100016", chassis: "ZRE1000016", model: "2023", nrDate: "17/12/2018", aging: "11" },
    { sno: 17, reg: "BNP 117", name: "Yasir", make: "Kia Picanto", engine: "Q100017", chassis: "ZRE1000017", model: "2021", nrDate: "18/12/2018", aging: "10" },
    { sno: 18, reg: "BNP 118", name: "Rabia", make: "MG HS", engine: "Q100018", chassis: "ZRE1000018", model: "2022", nrDate: "19/12/2018", aging: "9" },
    { sno: 19, reg: "BNP 119", name: "Sajid", make: "Changan Alsvin", engine: "Q100019", chassis: "ZRE1000019", model: "2021", nrDate: "20/12/2018", aging: "8" },
    { sno: 20, reg: "BNP 120", name: "Noreen", make: "Proton Saga", engine: "Q100020", chassis: "ZRE1000020", model: "2021", nrDate: "21/12/2018", aging: "7" },
    
    { sno: 21, reg: "BNP 121", name: "Ahmad", make: "DFSK Glory", engine: "Q100021", chassis: "ZRE1000021", model: "2022", nrDate: "22/12/2018", aging: "6" },
    { sno: 22, reg: "BNP 122", name: "Kinza", make: "Toyota Yaris", engine: "Q100022", chassis: "ZRE1000022", model: "2020", nrDate: "23/12/2018", aging: "5" },
    { sno: 23, reg: "BNP 123", name: "Irfan", make: "Hyundai Sonata", engine: "Q100023", chassis: "ZRE1000023", model: "2021", nrDate: "24/12/2018", aging: "4" },
    { sno: 24, reg: "BNP 124", name: "Anam", make: "Kia Stonic", engine: "Q100024", chassis: "ZRE1000024", model: "2022", nrDate: "25/12/2018", aging: "3" },
    { sno: 25, reg: "BNP 125", name: "Farhan", make: "Honda BR-V", engine: "Q100025", chassis: "ZRE1000025", model: "2019", nrDate: "26/12/2018", aging: "2" },
    { sno: 26, reg: "BNP 126", name: "Sana", make: "Toyota Hilux", engine: "Q100026", chassis: "ZRE1000026", model: "2018", nrDate: "27/12/2018", aging: "1" },
    { sno: 27, reg: "BNP 127", name: "Zara", make: "Nissan Dayz", engine: "Q100027", chassis: "ZRE1000027", model: "2015", nrDate: "28/12/2018", aging: "0" },
    { sno: 28, reg: "BNP 128", name: "Rehan", make: "Suzuki Alto", engine: "Q100028", chassis: "ZRE1000028", model: "2021", nrDate: "29/12/2018", aging: "12" },
    
    //for table 4
    { sno: 1, reg: "BNP 101", name: "Ali", make: "Honda Civic", engine: "Q100001", chassis: "ZRE1000001", model: "2018", nrDate: "02/12/2018", aging: "26" },
    { sno: 2, reg: "BNP 102", name: "Sara", make: "Toyota Corolla", engine: "Q100002", chassis: "ZRE1000002", model: "2019", nrDate: "03/12/2018", aging: "25" },
    { sno: 3, reg: "BNP 103", name: "Umar", make: "Suzuki Swift", engine: "Q100003", chassis: "ZRE1000003", model: "2020", nrDate: "04/12/2018", aging: "24" },
    { sno: 4, reg: "BNP 104", name: "Zain", make: "Hyundai Tucson", engine: "Q100004", chassis: "ZRE1000004", model: "2018", nrDate: "05/12/2018", aging: "23" },
    { sno: 5, reg: "BNP 105", name: "Areeba", make: "Kia Sportage", engine: "Q100005", chassis: "ZRE1000005", model: "2017", nrDate: "06/12/2018", aging: "22" },
    { sno: 6, reg: "BNP 106", name: "Hamza", make: "Honda City", engine: "Q100006", chassis: "ZRE1000006", model: "2021", nrDate: "07/12/2018", aging: "21" },
    { sno: 7, reg: "BNP 107", name: "Nida", make: "Toyota Prius", engine: "Q100007", chassis: "ZRE1000007", model: "2015", nrDate: "08/12/2018", aging: "20" },
    { sno: 8, reg: "BNP 108", name: "Imran", make: "Suzuki Cultus", engine: "Q100008", chassis: "ZRE1000008", model: "2016", nrDate: "09/12/2018", aging: "19" },
    { sno: 9, reg: "BNP 109", name: "Fatima", make: "Honda Accord", engine: "Q100009", chassis: "ZRE1000009", model: "2019", nrDate: "10/12/2018", aging: "18" },
    { sno: 10, reg: "BNP 110", name: "Bilal", make: "Toyota Fortuner", engine: "Q100010", chassis: "ZRE1000010", model: "2022", nrDate: "11/12/2018", aging: "17" },
    
    { sno: 11, reg: "BNP 111", name: "Faisal", make: "Suzuki WagonR", engine: "Q100011", chassis: "ZRE1000011", model: "2020", nrDate: "12/12/2018", aging: "16" },
    { sno: 12, reg: "BNP 112", name: "Asma", make: "Nissan Juke", engine: "Q100012", chassis: "ZRE1000012", model: "2016", nrDate: "13/12/2018", aging: "15" },
    { sno: 13, reg: "BNP 113", name: "Junaid", make: "Honda Vezel", engine: "Q100013", chassis: "ZRE1000013", model: "2021", nrDate: "14/12/2018", aging: "14" },
    { sno: 14, reg: "BNP 114", name: "Mehak", make: "Toyota Aqua", engine: "Q100014", chassis: "ZRE1000014", model: "2020", nrDate: "15/12/2018", aging: "13" },
    { sno: 15, reg: "BNP 115", name: "Hassan", make: "Suzuki Mehran", engine: "Q100015", chassis: "ZRE1000015", model: "2014", nrDate: "16/12/2018", aging: "12" },
    { sno: 16, reg: "BNP 116", name: "Tania", make: "Hyundai Elantra", engine: "Q100016", chassis: "ZRE1000016", model: "2023", nrDate: "17/12/2018", aging: "11" },
    { sno: 17, reg: "BNP 117", name: "Yasir", make: "Kia Picanto", engine: "Q100017", chassis: "ZRE1000017", model: "2021", nrDate: "18/12/2018", aging: "10" },
    { sno: 18, reg: "BNP 118", name: "Rabia", make: "MG HS", engine: "Q100018", chassis: "ZRE1000018", model: "2022", nrDate: "19/12/2018", aging: "9" },
    { sno: 19, reg: "BNP 119", name: "Sajid", make: "Changan Alsvin", engine: "Q100019", chassis: "ZRE1000019", model: "2021", nrDate: "20/12/2018", aging: "8" },
    { sno: 20, reg: "BNP 120", name: "Noreen", make: "Proton Saga", engine: "Q100020", chassis: "ZRE1000020", model: "2021", nrDate: "21/12/2018", aging: "7" },
    
    { sno: 21, reg: "BNP 121", name: "Ahmad", make: "DFSK Glory", engine: "Q100021", chassis: "ZRE1000021", model: "2022", nrDate: "22/12/2018", aging: "6" },
    { sno: 22, reg: "BNP 122", name: "Kinza", make: "Toyota Yaris", engine: "Q100022", chassis: "ZRE1000022", model: "2020", nrDate: "23/12/2018", aging: "5" },
    { sno: 23, reg: "BNP 123", name: "Irfan", make: "Hyundai Sonata", engine: "Q100023", chassis: "ZRE1000023", model: "2021", nrDate: "24/12/2018", aging: "4" },
    { sno: 24, reg: "BNP 124", name: "Anam", make: "Kia Stonic", engine: "Q100024", chassis: "ZRE1000024", model: "2022", nrDate: "25/12/2018", aging: "3" },
    { sno: 25, reg: "BNP 125", name: "Farhan", make: "Honda BR-V", engine: "Q100025", chassis: "ZRE1000025", model: "2019", nrDate: "26/12/2018", aging: "2" },
    { sno: 26, reg: "BNP 126", name: "Sana", make: "Toyota Hilux", engine: "Q100026", chassis: "ZRE1000026", model: "2018", nrDate: "27/12/2018", aging: "1" },
    { sno: 27, reg: "BNP 127", name: "Zara", make: "Nissan Dayz", engine: "Q100027", chassis: "ZRE1000027", model: "2015", nrDate: "28/12/2018", aging: "0" },
    { sno: 28, reg: "BNP 128", name: "Rehan", make: "Suzuki Alto", engine: "Q100028", chassis: "ZRE1000028", model: "2021", nrDate: "29/12/2018", aging: "12" },
    { sno: 29, reg: "BNP 129", name: "Zubair", make: "Hyundai Santa Fe", engine: "Q100029", chassis: "ZRE1000029", model: "2023", nrDate: "30/12/2018", aging: "5" },
    { sno: 30, reg: "BNP 130", name: "Aysha", make: "Toyota Vitz", engine: "Q100030", chassis: "ZRE1000030", model: "2016", nrDate: "31/12/2018", aging: "3" },
    
    { sno: 31, reg: "BNP 131", name: "Talha", make: "Suzuki Baleno", engine: "Q100031", chassis: "ZRE1000031", model: "2012", nrDate: "01/01/2019", aging: "40" },
    { sno: 32, reg: "BNP 132", name: "Noor", make: "Honda Insight", engine: "Q100032", chassis: "ZRE1000032", model: "2017", nrDate: "02/01/2019", aging: "39" },
    { sno: 33, reg: "BNP 133", name: "Faizan", make: "Suzuki Liana", engine: "Q100033", chassis: "ZRE1000033", model: "2010", nrDate: "03/01/2019", aging: "38" },
    { sno: 34, reg: "BNP 134", name: "Zeeshan", make: "Toyota Passo", engine: "Q100034", chassis: "ZRE1000034", model: "2015", nrDate: "04/01/2019", aging: "37" },
    { sno: 35, reg: "BNP 135", name: "Shazia", make: "Honda Fit", engine: "Q100035", chassis: "ZRE1000035", model: "2020", nrDate: "05/01/2019", aging: "36" },
    { sno: 36, reg: "BNP 136", name: "Hammad", make: "Hyundai Venue", engine: "Q100036", chassis: "ZRE1000036", model: "2023", nrDate: "06/01/2019", aging: "35" },
    { sno: 37, reg: "BNP 137", name: "Aiman", make: "MG ZS", engine: "Q100037", chassis: "ZRE1000037", model: "2022", nrDate: "07/01/2019", aging: "34" },
    { sno: 38, reg: "BNP 138", name: "Raheel", make: "Toyota Camry", engine: "Q100038", chassis: "ZRE1000038", model: "2020", nrDate: "08/01/2019", aging: "33" },
    { sno: 39, reg: "BNP 139", name: "Lubna", make: "Kia Sorento", engine: "Q100039", chassis: "ZRE1000039", model: "2021", nrDate: "09/01/2019", aging: "32" },
    { sno: 40, reg: "BNP 140", name: "Tariq", make: "Hyundai Kona", engine: "Q100040", chassis: "ZRE1000040", model: "2023", nrDate: "10/01/2019", aging: "31" },

    //for table 5
    { sno: 1, reg: "BNP 101", name: "Ali", make: "Honda Civic", engine: "Q100001", chassis: "ZRE1000001", model: "2018", nrDate: "02/12/2018", aging: "26" },
    { sno: 2, reg: "BNP 102", name: "Sara", make: "Toyota Corolla", engine: "Q100002", chassis: "ZRE1000002", model: "2019", nrDate: "03/12/2018", aging: "25" },
    { sno: 3, reg: "BNP 103", name: "Umar", make: "Suzuki Swift", engine: "Q100003", chassis: "ZRE1000003", model: "2020", nrDate: "04/12/2018", aging: "24" },
    { sno: 4, reg: "BNP 104", name: "Zain", make: "Hyundai Tucson", engine: "Q100004", chassis: "ZRE1000004", model: "2018", nrDate: "05/12/2018", aging: "23" },
    { sno: 5, reg: "BNP 105", name: "Areeba", make: "Kia Sportage", engine: "Q100005", chassis: "ZRE1000005", model: "2017", nrDate: "06/12/2018", aging: "22" },
    { sno: 6, reg: "BNP 106", name: "Hamza", make: "Honda City", engine: "Q100006", chassis: "ZRE1000006", model: "2021", nrDate: "07/12/2018", aging: "21" },
    { sno: 7, reg: "BNP 107", name: "Nida", make: "Toyota Prius", engine: "Q100007", chassis: "ZRE1000007", model: "2015", nrDate: "08/12/2018", aging: "20" },
   
    //for table 6
    { sno: 1, reg: "BNP 101", name: "Ali", make: "Honda Civic", engine: "Q100001", chassis: "ZRE1000001", model: "2018", nrDate: "02/12/2018", aging: "26" }
    
],

    portfolioComparison: [
        { type: "NO CONTACT / NON-COOPERATIVE", earlier: 30, today: 30 },
        { type: "LOW GSM/NON GSM AREA", earlier: 2, today: 2 },
        { type: "PARKED FOR PROLONGED PERIOD", earlier: 28, today: 28 },
        { type: "SCHEDULED FOR REDO", earlier: 47, today: 47 },
        { type: "TOTAL LOSS/UNDER REPAIR", earlier: 7, today: 7 },
        { type: "THIRD PARTY SOLD", earlier: 1, today: 1 }
    ],
    chartData: {
        reportingPie: {
            labels: ['Reporting', 'Not Reporting'],
            data: [2061, 115],
            colors: ['#5087bb', '#95b7df']
        },
        itPie: {
            labels: ['IT Issues', 'Other Issues'],
            data: [3224, 159082],
            colors: ['#3c66b1', '#a3a3a3']
        },
        portfolioPie: {
            labels: [
                'NO CONTACT / NON-COOPERATIVE',
                'LOW GSM/NON GSM AREA',
                'SCHEDULED FOR REDO',
                'TOTAL LOSS / UNDER REPAIR',
                'THIRD PARTY SOLD'
            ],
            data: [35, 2, 54, 8, 1],
            colors: ['#ed7d31', '#ffc000', '#70ad47', '#9e480e', '#997300']
        },
        barChart: {
            labels: ['30 Days Earlier', 'Today'],
            datasets: [
                {
                    label: 'Total Portfolio',
                    data: [2076, 2176],
                    color: '#3a6cc6'
                },
                {
                    label: 'NR Count',
                    data: [123, 115],
                    color: '#ee7420'
                }
            ]
        }
    }
};