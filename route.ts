import express, { Router } from 'express';
import { refundController } from './controller';
import authorizer from '../../common-module/middleware/permissionAuthorizer';
//import validatePayload from '../../common-module/middleware/validator';
//import { journalSchema } from './validaton';
//import requestParser from '../../common-module/middleware/requestParser';
const refundRoute: Router = express.Router();

refundRoute.post('/:id', authorizer(), refundController.initiateRefund);
export default refundRoute;
