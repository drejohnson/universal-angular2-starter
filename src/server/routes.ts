import { Router, Request, Response } from 'express';
import { ngApp } from './app'

export const router = Router();

router.get('/*', ngApp);
