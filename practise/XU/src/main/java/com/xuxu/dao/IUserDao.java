package com.xuxu.dao;

import com.xuxu.model.BaseUser;
import org.apache.ibatis.annotations.Param;

public interface IUserDao {

    BaseUser selectUser(long id);

    BaseUser userLogin(@Param("name") String name,@Param("password") String password);

    Integer getCode(Integer tel);

    String getProfile(@Param("id")Integer id);

}