#!/usr/bin/env node
import * as commander from 'commander';
import {translate} from './main';

const program = new commander.Command();

program.version('0.0.1', undefined, undefined)
  .name('fy')
  .usage('<ENGLISH>')
  .arguments('<ENGLISH>')
  .action(function (english) {
    translate(english);
  });

program.parse(process.argv);//对参数进行解析
