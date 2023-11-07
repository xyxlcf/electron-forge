

const information = document.getElementById('info');

const func = async () => {
    const response = await window.versions.ping()
    information.innerText = `本应用正在使用 Chrome (v${versions.chrome()}), Node.js (v${versions.node()}),和 Electron (v${versions.electron()})${response}`
    information.style.color = '#0094ff'
    information.style.fontSize = '18px'
};

func()