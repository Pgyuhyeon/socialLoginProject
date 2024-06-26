'use strict';
import dotenv from 'dotenv';
dotenv.config();

import { consoleBar, timeLog, resSend } from '../config/common.js';
import { pool } from './connect.js';

// ---------[get]all-users---------
/**
 * 
 * @swagger
 * /all-users:
 *  get:
 *    summary: 모든 유지 정보 리턴
 *    description: 모든 유저 정로 리턴
 */
// ---------[get]all-users---------

const getAllUsers = async (req, res) => {
  const query = 'SELECT * FROM user';
  const results = {};
  results.result = true;
  results.error = [];
  results.users = [];

  try {
    const connection = await pool.getConnection(async conn => conn);
    try{
      const [rows, fields] = await connection.query(query);
      results.users = rows;
    } catch (err){
      results.result = false;
      results.error.push('Query Error');
    }
    connection.release();
  } catch (err){
   results.result = false;
   results.error.push('DB Error'); 
  }
  res.send(results);
  consoleBar();
  timeLog('GET all-users called // '+ JSON.stringify(req.query) + ' // ' +JSON.stringify(results));
};

export { getAllUsers };

// ---------[get]users---------

const getUserById = async (req, res) => {
  const query = 'SELECT * FROM user WHERE userId = ?;';
  const userId = req.query.userId;
  const results = {};
  results.result = true;
  results.error = [];
  results.users = [];

  try {
    const connection = await pool.getConnection(async conn => conn);
    try{
      const [rows, fields] = await connection.query(query, userId);
      results.users = rows;
    } catch (err){
      results.result = false;
      results.error.push('Query Error');
    }
    connection.release();
  } catch (err){
   results.result = false;
   results.error.push('DB Error'); 
  }
  res.send(results);
  consoleBar();
  timeLog('GET all-users called // '+ JSON.stringify(req.query) + ' // ' +JSON.stringify(results));
};

export { getUserById };


// ---------[post]users---------

const postUser = async (req, res) => {
  const query = 'INSERT INTO user(userId, userName, profileImg) VALUES (?, ?, ?);';
  const userId = req.body.userId;
  const userName = req.body.userName;
  const profileImg = req.body.profileImg;

  const queryData = [userId, userName, profileImg];

  const results = {};
  results.result = true;
  results.error = [];
  results.users = [];

  try {
    const connection = await pool.getConnection(async conn => conn);
    try{
      const [rows, fields] = await connection.query(query, queryData);
      console.log(rows);
    } catch (err){
      results.result = false;
      results.error.push('Query Error');
    }
    connection.release();
  } catch (err){
   results.result = false;
   results.error.push('DB Error'); 
  }
  res.send(results);
  consoleBar();
  timeLog('GET all-users called // '+ JSON.stringify(req.query) + ' // ' +JSON.stringify(results));
};

export { postUser };


// ---------[delete]users---------

const deletUserById = async (req, res) => {
  const query = 'DELETE FROM user WHERE userId = ?;';
  const userId = req.query.userId;
  const results = {};
  results.result = true;
  results.error = [];
  results.users = [];

  try {
    const connection = await pool.getConnection(async conn => conn);
    try{
      const [rows, fields] = await connection.query(query, userId);
    } catch (err){
      results.result = false;
      results.error.push('Query Error');
    }
    connection.release();
  } catch (err){
   results.result = false;
   results.error.push('DB Error'); 
  }
  res.send(results);
  consoleBar();
  timeLog('GET all-users called // '+ JSON.stringify(req.query) + ' // ' +JSON.stringify(results));
};

export { deletUserById };
