import PocketBase from 'pocketbase';

const pb = new PocketBase('https://yogawithmanu.pockethost.io');

async function uploadData(name, whatsappNumber, email) {
    console.log({name})
    alert("Uploading data to server");
    const data = {
        "name": name,
        "email": email,
        "phone": whatsappNumber
    };
    const record = await pb.collection('registrations').create(data);
    console.log(record);
    alert("Data uploaded to server");

}


export {pb, uploadData}