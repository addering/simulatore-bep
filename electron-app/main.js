const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

// Impedisce istanze multiple
const gotTheLock = app.requestSingleInstanceLock();
if (!gotTheLock) {
    app.quit();
}

function createWindow() {
    const win = new BrowserWindow({
        width: 1440,
        height: 900,
        minWidth: 960,
        minHeight: 600,
        title: 'ProntoQuota – Generatore di Preventivi Pro',
        icon: path.join(__dirname, 'Prontoquota_logo.png'),
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            // Abilita localStorage e altri Web APIs
            sandbox: false
        },
        // Aspetto premium: nessuna barra default, frame nativo
        show: false,
        backgroundColor: '#0f172a'
    });

    // Carica il file HTML locale
    win.loadFile(path.join(__dirname, 'preventivo.html'));

    // Mostra finestra solo quando è pronta (evita flash bianco)
    win.once('ready-to-show', () => {
        win.show();
    });

    // Rimuovi il menu di default (non serve in un'app standalone)
    // Lascia solo le funzioni di sistema essenziali (copia/incolla, zoom, ecc.)
    const template = [
        {
            label: 'ProntoQuota',
            submenu: [
                { label: 'Informazioni su ProntoQuota', role: 'about' },
                { type: 'separator' },
                { label: 'Nascondi', role: 'hide' },
                { label: 'Mostra Tutto', role: 'unhide' },
                { type: 'separator' },
                { label: 'Esci', role: 'quit' }
            ]
        },
        {
            label: 'Modifica',
            submenu: [
                { label: 'Annulla', role: 'undo' },
                { label: 'Ripeti', role: 'redo' },
                { type: 'separator' },
                { label: 'Taglia', role: 'cut' },
                { label: 'Copia', role: 'copy' },
                { label: 'Incolla', role: 'paste' },
                { label: 'Seleziona Tutto', role: 'selectAll' }
            ]
        },
        {
            label: 'Visualizza',
            submenu: [
                { label: 'Ingrandisci', role: 'zoomIn' },
                { label: 'Riduci', role: 'zoomOut' },
                { label: 'Dimensione Originale', role: 'resetZoom' },
                { type: 'separator' },
                { label: 'Schermo Intero', role: 'togglefullscreen' }
            ]
        },
        {
            label: 'Stampa',
            submenu: [
                {
                    label: 'Stampa / Salva PDF',
                    accelerator: 'CmdOrCtrl+P',
                    click: (_, focusedWindow) => {
                        if (focusedWindow) focusedWindow.webContents.print();
                    }
                }
            ]
        }
    ];

    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
}

app.whenReady().then(() => {
    createWindow();

    // Riapri finestra su Mac se si clicca sull'icona nel dock
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

// Chiudi su Windows/Linux quando tutte le finestre sono chiuse
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
