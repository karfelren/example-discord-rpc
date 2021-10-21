const rpc = require('discord-rpc');
const client = new rpc.Client({ transport: 'ipc' });

client.on('ready', () => {
    client.request('SET_ACTIVITY', {
        pid: process.pid,
        activity: {
            details: "",
            state: "",
            timestamps: {
                start: Date.now()
            },
            assets: {
                large_image: "",  //developer portal > rich presence > art assets
                large_text: "",
                small_image: "",  //developer portal > rich presence > art assets
                small_text: ""
            },
            buttons: [
                { label: "label1", url: "url1" },
                { label: "label2", url: "url2" }
            ]//can enter data files that have been converted into links
        }
    });
});

client.login({
    clientId: '' //from developer portal (APPLICATION ID)
});