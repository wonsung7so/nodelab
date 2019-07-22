-- mysql 테이블 생성
drop database if exists boardDB;
create database boardDB;
use boardDB;

create table board(
		_id int auto_increment primary key,
    title varchar(100),
    writer varchar(20),
    content text,
    view int default 0,
    regdate varchar(20)
);





















