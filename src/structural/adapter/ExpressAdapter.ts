import express, { Request, Response } from 'express';
import Http from './Http';

export default class ExpressAdapter implements Http {
  private app: any;

  constructor() {
    this.app = express();
  }

  async route(method: string, url: string, callback: any): Promise<any> {
    this.app[method](url, async (req: Request, res: Response) => {
      const output = await callback(req.params, req.body);
      res.json(output);
    });
  }

  async listen(port = 3000): Promise<void> {
    this.app.listen(port);
  }
}
