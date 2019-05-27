package com.xuxu.service.impl;

import com.xuxu.dao.IUserDao;
import com.xuxu.model.BaseUser;
import com.xuxu.service.IUserService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service("userService")
public class UserServiceImpl implements IUserService {

    @Resource
    private IUserDao userDao;

    public BaseUser selectUser(long userId) {
        return this.userDao.selectUser(userId);
    }

    public BaseUser userLogin(String name,String password) {
        return this.userDao.userLogin(name,password);
    }

    public Integer getCode(Integer tel){return this.userDao.getCode(tel);}

    public String getProfile(Integer id){return this.userDao.getProfile(id);}
}