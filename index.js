import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';
import { ping } from './controller/system.js';
import { deletUserById, getAllUsers, getUserById, postUser } from './lib/userInfo.js';

const serverPort = 3000;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
const router = express.Router();


router.route('/ping').get(ping);
router.route('/all-users').get(getAllUsers);

router.route('/user').get(getUserById);
router.route('/user').post(postUser);
router.route('/user').delete(deletUserById);

app.use('/socialLoginProject/api/v1', router);
app.listen(serverPort);

//http://13.209.76.2:3000/socialLoginProject/api/v1/ping
