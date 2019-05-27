package com.xuxu.service;

import com.xuxu.model.BaseUser;

public interface IUserService {

    /**
     * 查找用户
     * @param userId
     * @return
     */
    public BaseUser selectUser(long userId);

    /**
     * 登录
     * @param name
     * @param password
     * @return
     */
    public BaseUser userLogin(String name,String password);

    /**
     * 获取验证码
     * @param tel
     * @return
     */
    public Integer getCode(Integer tel);
    /**
     * 获取头像
     * @param id
     * @return
     */
    public String getProfile(Integer id);


}