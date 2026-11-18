import {mkdir, readFile, writeFile} from 'node:fs/promises'
import {dirname} from 'node:path'
import {createServer} from 'vite'

const pages = [
    ['/', 'index.html', 'Asia &amp; Sushi – Asiatische Küche in Hoppegarten', 'Asiatische Spezialitäten und Sushi in Hoppegarten. Küche entdecken, online bestellen oder vorbeikommen. Mahlsdorfer Str. 1.'],
    ['/bestellen', 'bestellen/index.html', 'Online bestellen – Asia &amp; Sushi Hoppegarten', 'Asiatische Spezialitäten und Sushi bequem über unseren bestehenden GloriaFood-Bestellservice bestellen.'],
    ['/impressum', 'impressum/index.html', 'Impressum – Asia &amp; Sushi Hoppegarten', 'Impressum von Asia und Sushi in Hoppegarten.'],
    ['/datenschutz', 'datenschutz/index.html', 'Datenschutzerklärung – Asia &amp; Sushi Hoppegarten', 'Datenschutzerklärung von Asia und Sushi in Hoppegarten.'],
    ['/pages/bestellen.html', 'pages/bestellen.html', 'Online bestellen – Asia &amp; Sushi Hoppegarten', 'Asiatische Spezialitäten und Sushi bequem über unseren bestehenden GloriaFood-Bestellservice bestellen.'],
    ['/pages/impressum.html', 'pages/impressum.html', 'Impressum – Asia &amp; Sushi Hoppegarten', 'Impressum von Asia und Sushi in Hoppegarten.'],
    ['/pages/datenschutz.html', 'pages/datenschutz.html', 'Datenschutzerklärung – Asia &amp; Sushi Hoppegarten', 'Datenschutzerklärung von Asia und Sushi in Hoppegarten.'],
    ['/impressum.html', 'impressum.html', 'Impressum – Asia &amp; Sushi Hoppegarten', 'Impressum von Asia und Sushi in Hoppegarten.'],
    ['/datenschutz.html', 'datenschutz.html', 'Datenschutzerklärung – Asia &amp; Sushi Hoppegarten', 'Datenschutzerklärung von Asia und Sushi in Hoppegarten.'],
]

const template = await readFile('dist/index.html', 'utf8')
const server = await createServer({server: {middlewareMode: true}, appType: 'custom'})
try {
    const {render} = await server.ssrLoadModule('/src/entry-server.jsx')
    for (const [path, file, title, description] of pages) {
        const markup = render(path)
        const html = template.replace(/<title>[\s\S]*?<\/title>/, '<title>' + title + '</title>')
            .replace(/(<meta\s+name="description"\s+content=")[^"]*("\s*\/>)/, '$1' + description + '$2')
            .replace('<div id="root"></div>', () => '<div id="root">' + markup + '</div>')
        await mkdir(dirname('dist/' + file), {recursive: true})
        await writeFile('dist/' + file, html)
    }
} finally {
    await server.close()
}
