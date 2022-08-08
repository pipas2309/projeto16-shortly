import express from 'express';

import validator from '../middlewares/schemasValidation.js';
import stripData from '../middlewares/stripData.js'; // É REALMENTE NECESSÁRIO????
import tokenValidator from '../middlewares/tokensValidation.js';
//import controllers
//import tokenValidator

const router = express.Router();


router.post("/urls/shorten",tokenValidator, stripData, validator('shorten') /**, controllers */);

router.get("/urls/:id" /**, controllers */);

router.get("/urls/open/:shortUrl",  /**, controllers */);

router.delete("/urls/:id"/**,tokenValidator, controllers */);


export default router;