import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Get the list of filenames from the environment variable
const files = process.env.COPY_FILES;
if (!files) {
    console.error('COPY_FILES is not defined in the .env file.');
    process.exit(1);
}

const filenames = files.split(',');
const sourceFile = 'dist/index.html';

// Check if the source file exists
if (!fs.existsSync(sourceFile)) {
    console.error(`Source file "${sourceFile}" does not exist.`);
    process.exit(1);
}

// Copy dist/index.html to each specified file
filenames.forEach((file) => {
    const targetPath = path.join('dist', file);
    try {
        fs.copyFileSync(sourceFile, targetPath);
        console.log(`Copied "${sourceFile}" to "${targetPath}"`);
    } catch (error) {
        console.error(`Failed to copy "${sourceFile}" to "${targetPath}":`, error);
    }
});
