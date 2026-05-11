import fs from 'fs';
import path from 'path';

const dist = './dist';

// dist 폴더 초기화
if (fs.existsSync(dist)) {
    fs.rmSync(dist, { recursive: true, force: true });
}
fs.mkdirSync(dist);

// public 폴더 내용 복사
if (fs.existsSync('./public')) {
    fs.cpSync('./public', dist, { recursive: true });
}

// 루트의 주요 파일 복사
const filesToCopy = ['index.html', '404.html', 'CNAME', 'vercel.json'];
filesToCopy.forEach(file => {
    if (fs.existsSync(file)) {
        fs.copyFileSync(file, path.join(dist, file));
        console.log(`Copied ${file} to ${dist}`);
    }
});

console.log('Build completed successfully.');
