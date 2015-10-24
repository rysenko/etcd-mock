import path from 'path';
import fs from 'fs';
import promisify from 'r-promisify';
import Downloader from './downloader';
promisify(fs);

class EtcdMock {
  constructor() {
    this.binPath = path.join(__dirname, 'bin');
    this.dataPath = path.join(__dirname, 'data');
    this.downloader = new Downloader();
  }
  async start() {
    if (!await fs.existsAsync(this.binPath)) {
      await this.downloader.download(this.binPath);
    }
  }
  async stop() {
    //
  }
}

export default new EtcdMock();