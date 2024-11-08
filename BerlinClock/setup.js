const { spawn, execSync } = require('child_process');
const os = require('os');
const path = require('path');
const fs = require('fs');


/**
 * Runs a command in a shell and returns a Promise that resolves or rejects
 * when the command exits.
 *
 * @param {string} command The command to run.
 * @param {string[]} args The arguments to pass to the command.
 * @return {Promise<void>} A Promise that resolves if the command exits with
 *     code 0, or rejects if the command exits with a non-zero code.
 */
function runCommand(command, args) {
  return new Promise((resolve, reject) => {
    const proc = spawn(command, args, {
      stdio: 'inherit',
      shell: process.platform === 'win32'
    });

    proc.on('close', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Command failed with exit code ${code}`));
      }
    });

    proc.on('error', (err) => {
      reject(err);
    });
  });
}


/**
 * Checks if npm is installed by attempting to execute 'npm --version'.
 * @returns {boolean} true if npm is installed, false otherwise.
 */
function checkNPM() {
  try {
    execSync('npm --version', { stdio: 'ignore' });
    return true;
  } catch (e) {
    return false;
  }
}


/**
 * Checks if Node.js is installed by attempting to execute 'node --version'.
 * @returns {boolean} true if Node.js is installed, false otherwise.
 */
function checkNode() {
  try {
    execSync('node --version', { stdio: 'ignore' });
    return true;
  } catch (e) {
    return false;
  }
}


async function setup() {
  console.log('🚀 Starting project setup...');

  // Check for Node.js and npm
  if (!checkNode()) {
    console.error('❌ Node.js is not installed. Please install Node.js from https://nodejs.org/');
    process.exit(1);
  }

  if (!checkNPM()) {
    console.error('❌ npm is not installed. Please install npm.');
    process.exit(1);
  }

  try {
    // Check if node_modules exists
    if (!fs.existsSync(path.join(process.cwd(), 'node_modules'))) {
      console.log('📦 Installing dependencies...');
      await runCommand('npm', ['install']);
    } else {
      console.log('✅ Dependencies already installed');
    }
    console.log('🚀 Starting development server...');
    await runCommand('npm', ['run', 'dev']);

  } catch (error) {
    console.error('❌ Error during setup:', error.message);
    process.exit(1);
  }
}

// Run setup
setup().catch(error => {
  console.error('❌ Setup failed:', error);
  process.exit(1);
});