import {Case} from '../models/Cases'
import { Router } from 'express'
import { loadDataFromApi } from '../utils/loadData';

const router = Router();

router.get('/load', (req, res) => {
    loadDataFromApi();
})

module.exports = router;